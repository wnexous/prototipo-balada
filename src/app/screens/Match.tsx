import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { people } from '../data/people';

export function Match() {
  const navigate = useNavigate();
  const { personName } = useParams<{ personName: string }>();

  const person = people.find(p => p.name.toLowerCase() === personName?.toLowerCase());

  useEffect(() => {
    // Trigger confetti animation on mount
    const timer = setTimeout(() => {
      // Animation complete
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!person) {
    navigate('/who-is-here');
    return null;
  }

  // Generate confetti particles
  const confettiParticles = Array.from({ length: 25 }).map((_, i) => {
    const colors = ['#e8ff47', person.color, '#ffffff'];
    const color = colors[i % colors.length];
    const size = Math.random() * 4 + 4;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.25 + 0.15;

    return { color, size, top, left, opacity };
  });

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col items-center justify-center px-10">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${person.color}0f 0%, transparent 70%)`
        }}
      />

      {/* Confetti particles */}
      {confettiParticles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            opacity: particle.opacity
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-[22px] max-w-full">
        {/* Star and title */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-5xl text-[var(--accent)] animate-[scale-in_0.5s_ease-out]">★</div>
          <h1
            className="text-[40px] text-[var(--accent)] tracking-[5px] animate-[slide-up_0.4s_ease-out_0.2s_both]"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
          >
            MATCH
          </h1>
          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-[2px]">
            Rolou reciprocidade ✨
          </p>
        </div>

        {/* Avatar pair */}
        <div className="flex items-end justify-center gap-7 my-4">
          {/* Left - You */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-[92px] h-[92px] rounded-full flex items-center justify-center border-[2.5px] border-[var(--accent)]"
              style={{
                backgroundColor: '#e8ff4712',
                boxShadow: '0 0 0 8px rgba(232,255,71,0.06), 0 0 30px rgba(232,255,71,0.15)'
              }}
            >
              <span className="text-4xl">😊</span>
            </div>
            <span className="text-[13px] font-bold text-[var(--text-primary)]">Você</span>
          </div>

          {/* Center emoji */}
          <div className="text-3xl mb-8">💫</div>

          {/* Right - Matched person */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-[92px] h-[92px] rounded-full flex items-center justify-center border-[2.5px]"
              style={{
                backgroundColor: `${person.color}1f`,
                borderColor: person.color,
                boxShadow: `0 0 0 8px ${person.color}0f, 0 0 30px ${person.color}2e`
              }}
            >
              <img src={person.photo} alt={person.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <span className="text-[13px] font-bold" style={{ color: person.color }}>
              {person.name}, {person.age}
            </span>
          </div>
        </div>

        {/* Body text */}
        <div className="text-center">
          <p className="text-sm text-[var(--text-secondary)] leading-[1.9]">
            Agora vocês podem conversar
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-[1.9]">
            antes de se encontrar na balada
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3 mt-4">
          <Button fullWidth onClick={() => navigate(`/chat/${person.name.toLowerCase()}`)}>
            💬 Mandar mensagem
          </Button>
          <Button variant="secondary" fullWidth onClick={() => navigate('/who-is-here')}>
            Continuar no evento
          </Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/who-is-here')}>
            ← Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
