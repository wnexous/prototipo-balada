import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Card } from '../components/Card';
import { verifyFeatures as features } from '../data/onboarding';

export function VerifyIdentity() {
  const navigate = useNavigate();

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate('/signup')} />
        </Card>
        <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Verificação
        </h2>
        <span className="text-sm text-[var(--text-secondary)]">2 de 3</span>
      </div>

      {/* Progress indicator */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-foreground)]" />
            </div>
            <span className="text-[9px] uppercase text-[var(--accent)] tracking-wider">Dados</span>
          </div>
          <div className="h-[1px] bg-[var(--accent)] flex-1 mb-6" />
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-foreground)]" />
            </div>
            <span className="text-[9px] uppercase text-[var(--accent)] tracking-wider">Verificação</span>
          </div>
          <div className="h-[1px] bg-[var(--border)] flex-1 mb-6" />
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-transparent" />
            </div>
            <span className="text-[9px] uppercase text-[var(--text-tertiary)] tracking-wider">Perfil</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8 gap-7">
        {/* Illustration */}
        <div className="relative flex items-center justify-center">
          <div
            className="w-[120px] h-[120px] rounded-full border-2 border-[var(--accent)] flex items-center justify-center"
            style={{
              boxShadow: '0 0 0 12px rgba(232,255,71,0.06), 0 0 0 24px rgba(232,255,71,0.03)'
            }}
          >
            <span className="text-5xl text-[var(--accent)]">✓</span>
          </div>
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[22px] text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Identidade verificada
          </h2>
          <p className="text-sm leading-[1.8] text-[var(--text-secondary)] max-w-[280px]">
            Nenhum perfil falso. Nenhum golpe.
            Você sabe com quem está conversando.
          </p>
        </div>

        {/* Feature list */}
        <div className="w-full flex flex-col gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl px-4 py-[14px] flex items-center gap-3"
            >
              <span className="text-lg">{feature.icon}</span>
              <span className="text-[13px] text-[var(--text-primary)]">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-4 mt-4">
          <Button fullWidth onClick={() => navigate('/profile-setup')}>
            Começar verificação
          </Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/profile-setup')}>
            Pular por agora
          </Button>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}
