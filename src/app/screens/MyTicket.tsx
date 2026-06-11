import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function MyTicket() {
  const navigate = useNavigate();

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate(-1)} />
        </Card>
        <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Meu Ingresso
        </h2>
        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-8 space-y-6">
        {/* Success state */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
            <span className="text-2xl text-[var(--accent-foreground)]">✓</span>
          </div>
          <span className="text-[13px] text-[var(--success)]">Pagamento confirmado!</span>
        </div>

        {/* Ticket card */}
        <div
          className="border-[1.5px] border-dashed border-[var(--accent)] rounded-[20px] overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(232,255,71,0.1)' }}
        >
          {/* Top band */}
          <div
            className="px-5 py-4 flex items-start justify-between"
            style={{
              background: 'radial-gradient(circle at top left, #e8ff47 0%, #e8ff4799 100%)'
            }}
          >
            <div>
              <div className="text-base font-bold text-[#080808]" style={{ fontFamily: 'Syne, sans-serif' }}>
                Festa do Rock 2026
              </div>
              <div className="text-[11px] text-[#080808] mt-1">★ Ingresso Válido</div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="px-2 py-1 rounded-full bg-[#080808]">
                <span className="text-[9px] font-bold text-[var(--accent)]">ROCK</span>
              </div>
              <span className="text-xs font-bold text-[#080808]">4.6</span>
            </div>
          </div>

          {/* Body */}
          <div className="bg-[var(--card)] px-5 py-5 space-y-5">
            <h3 className="text-xl text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
              Festa do Rock 2026
            </h3>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-base">📅</span>
                <span className="text-sm text-[var(--text-secondary)]">Hoje, 22h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">📍</span>
                <span className="text-sm text-[var(--text-secondary)]">Bar XV</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">🎟</span>
                <span className="text-sm text-[var(--text-secondary)]">Pista VIP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">👤</span>
                <span className="text-sm text-[var(--text-secondary)]">Lucas M.</span>
              </div>
            </div>

            {/* Dashed separator with semicircle cutouts */}
            <div className="relative">
              <div className="border-t border-dashed border-[var(--border)]" />
              <div className="absolute -left-5 top-0 w-6 h-6 bg-[var(--background)] rounded-full -translate-y-1/2" />
              <div className="absolute -right-5 top-0 w-6 h-6 bg-[var(--background)] rounded-full -translate-y-1/2" />
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-40 bg-white rounded-xl p-3 flex items-center justify-center">
                {/* QR Code pattern */}
                <div className="w-full h-full grid grid-cols-8 gap-[2px]">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const pattern = [1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0];
                    return (
                      <div
                        key={i}
                        className={`rounded-sm ${pattern[i] ? 'bg-black' : 'bg-white'}`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="text-[11px] text-[#555555] tracking-[2px]" style={{ fontFamily: 'DM Mono, monospace' }}>
                LINKUP-2026-ROCK-001
              </div>
            </div>

            {/* Barcode */}
            <div className="flex justify-center">
              <div className="text-xs text-[var(--text-tertiary)] tracking-[4px]" style={{ fontFamily: 'DM Mono, monospace' }}>
                × × × × × × × ×
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 pb-6">
          <Button variant="secondary" fullWidth className="flex items-center justify-center gap-2">
            <Share2 size={16} />
            Compartilhar ingresso
          </Button>
          <Button fullWidth onClick={() => navigate('/who-is-here')}>
            Já estou no evento →
          </Button>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}
