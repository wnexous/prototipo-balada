import { useState } from 'react';
import { coverFor } from '../lib/media';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { people } from '../data/people';
import type { EventData } from '../data/events';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const defaultEvent: EventData = {
  id: 1,
  name: 'Festa do Rock 2026',
  genre: 'Rock',
  emoji: '🎸',
  color: '#e8ff47',
  venue: 'Bar XV',
  time: 'Hoje 22h–05h',
  price: 40,
  confirmed: 47,
  rating: 4.6,
  distance: '3.2 km',
};

export function EventDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const event: EventData = location.state?.event ?? defaultEvent;

  const [scrolled, setScrolled] = useState(false);
  const isKpop = event.genre === 'K-pop';

  const aboutText = isKpop
    ? 'Uma festa imersiva no universo K-pop com os maiores hits, lightsticks, photocards e muito dance cover. Venha celebrar com a fandom mais apaixonada do Brasil.'
    : `Uma noite incrível de ${event.genre} com os melhores artistas de Curitiba. Venha se encontrar com quem curte o mesmo som que você.`;

  const ingresso = Math.floor(event.confirmed * 0.48);

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Sticky header on scroll */}
      {scrolled && (
        <div
          className="sticky top-0 z-20 border-b flex items-center gap-4"
          style={{ backgroundColor: '#080808', borderColor: '#242424', padding: '14px 18px' }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center"
            style={{ width: 32, height: 32 }}
          >
            <ArrowLeft size={18} className="text-[#f5f5f5]" />
          </button>
          <h2
            className="font-bold text-[#f5f5f5] flex-1 truncate"
            style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 16 }}
          >
            {event.name}
          </h2>
        </div>
      )}

      <div
        className="flex-1 overflow-y-auto"
        onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 120)}
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Hero image */}
        <div className="relative w-full overflow-hidden" style={{ height: 260 }}>
          <img src={coverFor(event.genre, event.name)} alt={event.name} referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          {/* BG tint */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: isKpop ? hexToRgba(event.color, 0.12) : hexToRgba(event.color, 0.06), backgroundColor2: '#1a1a1a' }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a' }} />
          <div className="absolute inset-0" style={{ backgroundColor: isKpop ? hexToRgba(event.color, 0.12) : hexToRgba(event.color, 0.06) }} />
          {/* X-lines placeholder */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.18 }}>
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#666" strokeWidth="1.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#666" strokeWidth="1.5" />
          </svg>

          {/* K-pop sparkles */}
          {isKpop && ['12%', '78%', '38%', '62%', '88%'].map((left, i) => (
            <span
              key={i}
              className="absolute"
              style={{
                top: ['15%', '35%', '55%', '20%', '65%'][i],
                left,
                fontSize: [14, 10, 12, 8, 16][i],
                opacity: 0.55,
              }}
            >
              ✨
            </span>
          ))}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)' }}
          />

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute flex items-center justify-center border"
            style={{
              top: 14, left: 14, width: 36, height: 36,
              backgroundColor: 'rgba(8,8,8,0.75)',
              backdropFilter: 'blur(8px)',
              borderColor: '#333',
              borderRadius: 10,
            }}
          >
            <span className="text-white text-base">←</span>
          </button>

          {/* Share button */}
          <button
            className="absolute flex items-center justify-center border"
            style={{
              top: 14, right: 14, width: 36, height: 36,
              backgroundColor: 'rgba(8,8,8,0.75)',
              backdropFilter: 'blur(8px)',
              borderColor: '#333',
              borderRadius: 10,
            }}
          >
            <span className="text-white text-base">↗</span>
          </button>

          {/* Bottom overlays */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            {/* Genre pill */}
            {isKpop ? (
              <div
                className="border flex items-center"
                style={{
                  padding: '5px 12px',
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${event.color}, #a78bfa)`,
                  borderColor: 'transparent',
                }}
              >
                <span className="font-bold text-white" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                  {event.emoji} {event.genre}
                </span>
              </div>
            ) : (
              <div
                className="flex items-center border"
                style={{
                  padding: '5px 12px',
                  borderRadius: 999,
                  backgroundColor: hexToRgba(event.color, 0.2),
                  borderColor: event.color,
                }}
              >
                <span className="font-bold" style={{ color: event.color, fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                  {event.emoji} {event.genre}
                </span>
              </div>
            )}
            {/* Rating */}
            <span
              className="font-bold text-white"
              style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
            >
              ★ {event.rating}
            </span>
          </div>
        </div>

        {/* Content body */}
        <div style={{ padding: '20px 20px 160px', display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Title */}
          <h1
            className="text-[#f5f5f5]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 26, fontWeight: 900, lineHeight: 1.15 }}
          >
            {event.name}
          </h1>

          {/* Info row */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div className="flex items-center gap-2 text-[#888]">
              <Clock size={15} />
              <span style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-[#888]">
              <MapPin size={15} />
              <span style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>{event.venue}, Curitiba</span>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-3 border"
            style={{ backgroundColor: '#161616', borderColor: '#242424', borderRadius: 14 }}
          >
            {[
              { value: event.confirmed, label: 'confirmados' },
              { value: ingresso, label: 'ingressos' },
              { value: `R$${event.price}`, label: 'desde' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  padding: '14px 0',
                  borderRight: i < 2 ? '1px solid #242424' : 'none',
                }}
              >
                <div
                  className="font-bold"
                  style={{
                    color: event.color,
                    fontSize: 18,
                    fontFamily: "'Clash Display', sans-serif",
                    textShadow: isKpop ? `0 0 12px ${hexToRgba(event.color, 0.5)}` : 'none',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="uppercase text-[#888]"
                  style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em', marginTop: 3 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* About */}
          <div>
            <h3
              className="uppercase text-[#888] mb-3"
              style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
            >
              SOBRE O EVENTO
            </h3>
            <p
              className="text-[#888]"
              style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", lineHeight: 1.7 }}
            >
              {aboutText}
            </p>
          </div>

          {/* Who's going */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-white" style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}>
                Quem vai estar lá?
              </span>
              <button
                style={{ color: event.color, fontSize: 12, fontFamily: "'DM Mono', monospace" }}
                onClick={() => navigate('/who-is-here')}
              >
                ver todos →
              </button>
            </div>
            <div className="flex items-center">
              {people.slice(0, 5).map((person, i) => (
                <div
                  key={i}
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: 36, height: 36,
                    backgroundColor: hexToRgba(person.color, 0.18),
                    border: `1.5px solid ${person.color}`,
                    marginLeft: i > 0 ? -10 : 0,
                    zIndex: 5 - i,
                    fontSize: 16,
                  }}
                >
                  <img src={person.photo} alt={person.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                </div>
              ))}
              <span className="text-[#888] ml-3" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                +42
              </span>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3
              className="uppercase text-[#888] mb-3"
              style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
            >
              LOCALIZAÇÃO
            </h3>
            <div
              className="w-full relative overflow-hidden"
              style={{
                height: 110, borderRadius: 14, backgroundColor: '#0f1a0f',
                backgroundImage: `
                  linear-gradient(to right, #1e2e1e 1px, transparent 1px),
                  linear-gradient(to bottom, #1e2e1e 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
              }}
            >
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.18 }}>
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#444" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="#444" strokeWidth="1" />
              </svg>
              <div
                className="absolute rounded-full border-2 border-white"
                style={{
                  width: 14, height: 14,
                  backgroundColor: event.color,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 12px ${hexToRgba(event.color, 0.6)}`,
                }}
              />
            </div>
            <p className="text-[#888] mt-2" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
              {event.venue} — Curitiba, PR
            </p>
          </div>
        </div>
      </div>

      {/* Fixed bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t"
        style={{ backgroundColor: '#080808', borderColor: '#242424', padding: '16px 20px' }}
      >
        {/* Price + buy button */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span
              className="font-bold"
              style={{ color: event.color, fontFamily: "'Clash Display', sans-serif", fontSize: 24 }}
            >
              R${event.price}
            </span>
            <span className="text-[#888] ml-1" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
              / pessoa
            </span>
          </div>
          <button
            className="font-bold"
            style={{
              backgroundColor: event.color,
              color: '#080808',
              borderRadius: 14,
              padding: '14px 22px',
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 14,
            }}
            onClick={() => navigate('/event/' + event.id + '/ticket', { state: { event } })}
          >
            Comprar ingresso
          </button>
        </div>
        {/* Secondary button */}
        <button
          className="w-full border font-bold"
          style={{
            borderColor: '#242424',
            backgroundColor: 'transparent',
            color: '#f5f5f5',
            borderRadius: 14,
            padding: '12px 0',
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
          }}
          onClick={() => navigate('/who-is-here')}
        >
          {event.emoji} Ver quem está aqui
        </button>
      </div>

      <HomeIndicator />
    </div>
  );
}
