import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [sent, setSent] = useState(false);

  const maskedEmail = email
    ? email.replace(/^(.{3})(.*)(@.*)$/, (_, a, b, c) => a + '*'.repeat(Math.min(b.length, 5)) + c)
    : 'seu***@gmail.com';

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div
        className="flex items-center border-b"
        style={{ padding: '14px 18px', borderColor: '#1a1a1a', gap: 16 }}
      >
        <button
          onClick={() => navigate('/login')}
          className="flex items-center justify-center border"
          style={{ width: 36, height: 36, backgroundColor: '#161616', borderColor: '#242424', borderRadius: 10 }}
        >
          <ArrowLeft size={18} className="text-[#f5f5f5]" />
        </button>
        <h1
          className="font-bold text-[#f5f5f5] flex-1 text-center"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18 }}
        >
          Recuperar senha
        </h1>
        <div style={{ width: 36 }} />
      </div>

      <div
        className="flex-1 overflow-y-auto flex flex-col items-center"
        style={{ padding: '28px 24px', gap: 24, scrollbarWidth: 'none' }}
      >
        {!sent ? (
          <>
            {/* Illustration */}
            <div className="flex flex-col items-center" style={{ gap: 0 }}>
              <div
                className="flex items-center justify-center border"
                style={{
                  width: 96, height: 96,
                  borderRadius: '50%',
                  backgroundColor: '#161616',
                  borderColor: '#242424',
                  borderWidth: 1.5,
                  fontSize: 40,
                  boxShadow: `0 0 0 20px ${hexToRgba('#e8ff47', 0.04)}, 0 0 0 40px ${hexToRgba('#e8ff47', 0.02)}`,
                  zIndex: 1,
                  position: 'relative',
                }}
              >
                🔐
              </div>
            </div>

            {/* Text block */}
            <div className="text-center" style={{ maxWidth: 280 }}>
              <h2
                className="font-bold text-[#f5f5f5] mb-2"
                style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 24 }}
              >
                Esqueceu a senha?
              </h2>
              <p
                className="text-[#888]"
                style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", lineHeight: 1.8 }}
              >
                Digite seu e-mail e enviaremos um link para você criar uma nova senha.
              </p>
            </div>

            {/* Email input */}
            <div className="w-full" style={{ gap: 6, display: 'flex', flexDirection: 'column' }}>
              <label
                className="uppercase text-[#888]"
                style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
              >
                SEU E-MAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="seu@email.com"
                className="w-full border outline-none"
                style={{
                  backgroundColor: '#161616',
                  borderColor: focused ? '#e8ff47' : '#242424',
                  borderWidth: 1.5,
                  borderRadius: 12,
                  padding: '14px 16px',
                  color: '#f5f5f5',
                  fontSize: 14,
                  fontFamily: "'DM Mono', monospace",
                  transition: 'border-color 0.15s',
                }}
              />
            </div>

            {/* Primary button */}
            <button
              className="w-full font-bold"
              onClick={() => email && setSent(true)}
              style={{
                backgroundColor: email ? '#e8ff47' : '#242424',
                color: email ? '#080808' : '#444',
                borderRadius: 14,
                height: 52,
                fontSize: 14,
                fontFamily: "'Clash Display', sans-serif",
                border: 'none',
                transition: 'background-color 0.15s',
                cursor: email ? 'pointer' : 'default',
              }}
            >
              Enviar link de recuperação
            </button>

            {/* Ghost back button */}
            <button
              onClick={() => navigate('/login')}
              className="text-[#888]"
              style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
            >
              ← Voltar ao login
            </button>
          </>
        ) : (
          <>
            {/* Success state */}
            <div
              className="flex items-center justify-center border"
              style={{
                width: 96, height: 96,
                borderRadius: '50%',
                backgroundColor: hexToRgba('#3bff8a', 0.08),
                borderColor: '#3bff8a',
                borderWidth: 1.5,
                fontSize: 40,
                color: '#3bff8a',
                fontWeight: 700,
                boxShadow: `0 0 0 20px ${hexToRgba('#3bff8a', 0.03)}`,
              }}
            >
              ✓
            </div>

            <div className="text-center">
              <h2
                className="font-bold text-[#f5f5f5] mb-2"
                style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22 }}
              >
                Link enviado!
              </h2>
              <p
                className="text-[#888]"
                style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", lineHeight: 1.8 }}
              >
                Verifique seu e-mail em<br />
                <span className="text-[#f5f5f5]">{maskedEmail}</span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[#555]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                Não recebeu?
              </span>
              <button
                className="underline"
                style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}
                onClick={() => setSent(false)}
              >
                Reenviar
              </button>
            </div>

            <button
              className="w-full border font-bold"
              onClick={() => navigate('/login')}
              style={{
                backgroundColor: 'transparent',
                borderColor: '#242424',
                color: '#f5f5f5',
                borderRadius: 14,
                height: 52,
                fontSize: 14,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Voltar ao login
            </button>
          </>
        )}
      </div>

      <HomeIndicator />
    </div>
  );
}
