import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Toggle } from '../components/Toggle';
import { ConfirmModal } from '../components/ConfirmModal';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function Row({
  icon, label, subtitle, right, onPress, danger,
}: {
  icon: string;
  label: string;
  subtitle?: string;
  right?: React.ReactNode;
  onPress?: () => void;
  danger?: boolean;
}) {
  return (
    <button
      className="w-full flex items-center text-left border-b"
      style={{ padding: '16px 18px', borderColor: '#1a1a1a', gap: 12 }}
      onClick={onPress}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
      <div className="flex-1 min-w-0">
        <p
          style={{
            fontSize: 14,
            fontFamily: "'DM Mono', monospace",
            color: danger ? '#ff3b3b' : '#f5f5f5',
          }}
        >
          {label}
        </p>
        {subtitle && (
          <p className="text-[#555]" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", marginTop: 2 }}>
            {subtitle}
          </p>
        )}
      </div>
      {right}
    </button>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ padding: '20px 18px 8px' }}>
      <p
        className="uppercase text-[#888]"
        style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
      >
        {label}
      </p>
    </div>
  );
}

function Chevron() {
  return <span className="text-[#555]" style={{ fontSize: 16 }}>›</span>;
}

function VerifiedTag() {
  return (
    <div
      className="border"
      style={{
        padding: '3px 10px',
        borderRadius: 999,
        backgroundColor: hexToRgba('#3bff8a', 0.08),
        borderColor: '#3bff8a',
        color: '#3bff8a',
        fontSize: 10,
        fontFamily: "'DM Mono', monospace",
      }}
    >
      Verificado
    </div>
  );
}

export function Settings() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [toggles, setToggles] = useState({
    visibility: true,
    location: true,
    pushNotifs: true,
    matchNotifs: true,
    eventAlerts: true,
    messages: true,
    safetyTracking: false,
  });

  const setToggle = (key: keyof typeof toggles) => (v: boolean) =>
    setToggles((prev) => ({ ...prev, [key]: v }));

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div
        className="flex items-center border-b"
        style={{ padding: '14px 18px', borderColor: '#1a1a1a', gap: 16 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center border"
          style={{ width: 36, height: 36, backgroundColor: '#161616', borderColor: '#242424', borderRadius: 10 }}
        >
          <ArrowLeft size={18} className="text-[#f5f5f5]" />
        </button>
        <h1
          className="font-bold text-[#f5f5f5] flex-1 text-center"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18 }}
        >
          Configurações
        </h1>
        <div style={{ width: 36 }} />
      </div>

      <div className="flex-1 overflow-y-auto pb-8" style={{ scrollbarWidth: 'none' }}>

        {/* Profile preview card */}
        <div
          className="flex items-center border"
          style={{
            margin: 16,
            backgroundColor: '#161616',
            borderColor: '#242424',
            borderRadius: 18,
            padding: 18,
            gap: 14,
          }}
        >
          <div
            className="flex items-center justify-center border-2 border-[#e8ff47] rounded-full flex-shrink-0"
            style={{ width: 56, height: 56, backgroundColor: hexToRgba('#e8ff47', 0.1), fontSize: 26 }}
          >
            😊
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-bold text-white"
              style={{ fontSize: 16, fontFamily: "'Clash Display', sans-serif" }}
            >
              Lucas M., 20
            </p>
            <p style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
              verificado ✓
            </p>
            <p className="text-[#555] truncate" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
              lucas@email.com
            </p>
          </div>
          <button
            className="border font-bold"
            onClick={() => navigate('/profile-setup')}
            style={{
              backgroundColor: hexToRgba('#e8ff47', 0.1),
              borderColor: '#e8ff47',
              color: '#e8ff47',
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              borderRadius: 999,
              padding: '6px 14px',
            }}
          >
            Editar
          </button>
        </div>

        {/* CONTA */}
        <SectionLabel label="CONTA" />
        <Row icon="👤" label="Editar perfil" right={<Chevron />} onPress={() => navigate('/profile-setup')} />
        <Row icon="🔒" label="Alterar senha" right={<Chevron />} onPress={() => navigate('/forgot-password')} />
        <Row icon="📧" label="Alterar e-mail" subtitle="lucas@email.com" right={<Chevron />} />
        <Row icon="✓" label="Status de verificação" right={<VerifiedTag />} />

        {/* PRIVACIDADE */}
        <SectionLabel label="PRIVACIDADE" />
        <Row
          icon="👁"
          label="Visibilidade do perfil"
          right={<Toggle on={toggles.visibility} onChange={setToggle('visibility')} />}
        />
        <Row
          icon="📍"
          label="Compartilhar localização"
          right={<Toggle on={toggles.location} onChange={setToggle('location')} />}
        />
        <Row
          icon="💬"
          label="Quem pode me enviar mensagem"
          subtitle="Apenas matches"
          right={<Chevron />}
        />
        <Row icon="🚫" label="Usuários bloqueados" subtitle="0 bloqueados" right={<Chevron />} />

        {/* NOTIFICAÇÕES */}
        <SectionLabel label="NOTIFICAÇÕES" />
        <Row
          icon="🔔"
          label="Notificações push"
          right={<Toggle on={toggles.pushNotifs} onChange={setToggle('pushNotifs')} />}
        />
        <Row
          icon="💜"
          label="Novos matches"
          right={<Toggle on={toggles.matchNotifs} onChange={setToggle('matchNotifs')} />}
        />
        <Row
          icon="🎵"
          label="Alertas de evento"
          right={<Toggle on={toggles.eventAlerts} onChange={setToggle('eventAlerts')} />}
        />
        <Row
          icon="📩"
          label="Mensagens"
          right={<Toggle on={toggles.messages} onChange={setToggle('messages')} />}
        />

        {/* EMERGÊNCIA */}
        <SectionLabel label="EMERGÊNCIA" />
        <Row
          icon="🆘"
          label="Contatos de emergência"
          subtitle="Mãe, Ana, Gabi"
          right={<Chevron />}
          onPress={() => navigate('/emergency-contacts')}
        />
        <Row
          icon="📍"
          label="Rastreamento de segurança"
          right={<Toggle on={toggles.safetyTracking} onChange={setToggle('safetyTracking')} />}
        />

        {/* SOBRE */}
        <SectionLabel label="SOBRE" />
        <Row icon="⭐" label="Avaliar o app" right={<Chevron />} />
        <Row icon="📋" label="Termos de uso" right={<Chevron />} />
        <Row icon="🔐" label="Política de privacidade" right={<Chevron />} />
        <Row icon="💬" label="Suporte" right={<Chevron />} />
        <Row
          icon="ℹ"
          label="Versão 1.0.0 Beta"
          right={<span className="text-[#333]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>1.0.0</span>}
        />

        {/* Danger zone */}
        <div style={{ padding: '24px 18px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            className="w-full text-center"
            style={{ color: '#ff3b3b', fontSize: 14, fontFamily: "'DM Mono', monospace", padding: '12px 0' }}
            onClick={() => setShowLogoutModal(true)}
          >
            Sair da conta
          </button>
          <button
            className="w-full text-center"
            style={{ color: '#333', fontSize: 13, fontFamily: "'DM Mono', monospace", padding: '8px 0' }}
          >
            Excluir conta
          </button>
        </div>
      </div>

      {showLogoutModal && (
        <ConfirmModal
          icon="🚪"
          title="Sair da conta?"
          message="Você precisará fazer login novamente para acessar o aplicativo."
          confirmLabel="Sair"
          confirmDanger
          onConfirm={() => navigate('/')}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}

      <HomeIndicator />
    </div>
  );
}
