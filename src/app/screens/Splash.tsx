import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';

export function Splash() {
  const navigate = useNavigate();

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      <div
        className="flex-1 flex flex-col items-center justify-center relative"
        style={{
          background: 'radial-gradient(circle at center, rgba(232,255,71,0.04) 0%, transparent 70%)'
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-4 mb-auto mt-32">
          <svg width="90" height="90" viewBox="0 0 90 90" className="drop-shadow-[0_0_12px_rgba(232,255,71,0.5)]">
            {/* Left circle */}
            <circle cx="30" cy="45" r="25" fill="none" stroke="#e8ff47" strokeWidth="2" />
            {/* Right circle */}
            <circle cx="60" cy="45" r="25" fill="none" stroke="#e8ff47" strokeWidth="2" />
            {/* Intersection dots */}
            <circle cx="38" cy="45" r="4" fill="#e8ff47" />
            <circle cx="52" cy="45" r="4" fill="#e8ff47" />
          </svg>

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl tracking-[-2px] text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
              LinkUp
            </h1>
            <p className="text-[11px] uppercase tracking-[3px] text-[#555555]">
              conecte-se na balada
            </p>
          </div>

          <div className="px-2 py-1 border border-[#333333] rounded-full bg-[#242424] mt-2">
            <span className="text-[10px] text-[#555555]">Beta v1.0</span>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="w-full px-8 pb-8 flex flex-col gap-3">
          <Button fullWidth onClick={() => navigate('/login')}>
            Entrar
          </Button>
          <Button fullWidth variant="secondary" onClick={() => navigate('/signup')}>
            Criar Conta
          </Button>
          <p className="text-[11px] text-[var(--text-tertiary)] text-center mt-6">
            Ao continuar você aceita os{' '}
            <span className="text-[var(--accent)] underline">Termos de Uso</span>
          </p>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}
