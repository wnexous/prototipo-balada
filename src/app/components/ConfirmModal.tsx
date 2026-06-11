interface ConfirmModalProps {
  title: string;
  message: string;
  confirmLabel: string;
  confirmDanger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  icon?: string;
  dangerBg?: boolean;
}

export function ConfirmModal({
  title,
  message,
  confirmLabel,
  confirmDanger = false,
  onConfirm,
  onCancel,
  icon,
  dangerBg = false,
}: ConfirmModalProps) {
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={onCancel}
    >
      <div
        className="border"
        style={{
          backgroundColor: dangerBg ? '#1a0808' : '#161616',
          borderColor: dangerBg ? 'rgba(255,59,59,0.3)' : '#242424',
          borderRadius: 20,
          padding: 24,
          width: 'calc(100% - 48px)',
          maxWidth: 340,
          boxShadow: '0 24px 64px rgba(0,0,0,0.8)',
          animation: 'scaleIn 0.2s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>

        {icon && <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>}

        <h2
          className="font-bold mb-2"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 18,
            color: dangerBg ? '#ff3b3b' : '#f5f5f5',
          }}
        >
          {title}
        </h2>
        <p
          className="text-[#888]"
          style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", lineHeight: 1.7, marginBottom: 20 }}
        >
          {message}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={onConfirm}
            className="w-full font-bold"
            style={{
              backgroundColor: confirmDanger ? '#ff3b3b' : '#e8ff47',
              color: confirmDanger ? 'white' : '#080808',
              borderRadius: 12,
              padding: '14px 0',
              fontSize: 14,
              fontFamily: "'DM Mono', monospace",
              border: 'none',
            }}
          >
            {confirmLabel}
          </button>
          <button
            onClick={onCancel}
            className="w-full border"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#242424',
              color: '#888',
              borderRadius: 12,
              padding: '14px 0',
              fontSize: 14,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
