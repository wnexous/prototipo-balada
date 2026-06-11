interface ToggleProps {
  on: boolean;
  onChange: (v: boolean) => void;
}

export function Toggle({ on, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!on)}
      style={{
        width: 44,
        height: 24,
        borderRadius: 999,
        backgroundColor: on ? '#e8ff47' : '#242424',
        position: 'relative',
        border: 'none',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background-color 0.2s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'white',
          left: on ? 22 : 2,
          transition: 'left 0.22s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </button>
  );
}
