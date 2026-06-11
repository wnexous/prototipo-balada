import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Bell } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { BottomNav } from '../components/BottomNav';
import { mapEvents, genreFilters, type MapEvent } from '../data/events';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function MapView() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState('Todos');
  const [selectedEvent, setSelectedEvent] = useState<MapEvent | null>(null);

  const isPinVisible = (event: MapEvent) => {
    if (activeGenre === 'Todos') return true;
    return event.genre === activeGenre;
  };

  const activeGenreColor = genreFilters.find((g) => g.id === activeGenre)?.color ?? '#e8ff47';

  return (
    <div className="w-[390px] h-[844px] bg-[#0a1a0a] relative overflow-hidden flex flex-col">
      <StatusBar />

      {/* Full-screen map */}
      <div className="absolute inset-0 top-0">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e2e1e 1px, transparent 1px),
              linear-gradient(to bottom, #1e2e1e 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
          }}
        />
        {/* Street labels */}
        <div className="absolute top-[28%] left-[6%] text-[10px] text-[#253525] rotate-[-4deg]" style={{ fontFamily: "'DM Mono', monospace" }}>Rua das Flores</div>
        <div className="absolute top-[18%] left-[32%] text-[10px] text-[#253525] rotate-[2deg]" style={{ fontFamily: "'DM Mono', monospace" }}>Av. Batel</div>
        <div className="absolute top-[55%] left-[55%] text-[10px] text-[#253525] rotate-[-2deg]" style={{ fontFamily: "'DM Mono', monospace" }}>Rua XV de Nov.</div>
        <div className="absolute top-[72%] left-[25%] text-[10px] text-[#253525] rotate-[3deg]" style={{ fontFamily: "'DM Mono', monospace" }}>Av. Iguaçu</div>

        {/* Event pins */}
        {mapEvents.map((event) => {
          const visible = isPinVisible(event);
          return (
            <button
              key={event.id}
              className="absolute flex items-center justify-center border-2 border-white rounded-full transition-all duration-300"
              style={{
                top: event.top,
                left: event.left,
                width: event.pinSize,
                height: event.pinSize,
                backgroundColor: hexToRgba(event.color, visible ? 0.9 : 0.15),
                borderColor: visible ? 'white' : 'transparent',
                boxShadow: visible ? `0 4px 12px ${hexToRgba(event.color, 0.5)}` : 'none',
                opacity: visible ? 1 : 0.2,
                fontSize: event.pinSize >= 52 ? 22 : event.pinSize >= 44 ? 18 : 14,
                transform: selectedEvent?.id === event.id ? 'scale(1.2)' : 'scale(1)',
                zIndex: selectedEvent?.id === event.id ? 20 : 10,
              }}
              onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
            >
              {event.emoji}
            </button>
          );
        })}

        {/* User location */}
        <div
          className="absolute flex items-center justify-center"
          style={{ top: '58%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div
            className="absolute rounded-full animate-ping"
            style={{ width: 48, height: 48, backgroundColor: 'rgba(232,255,71,0.08)' }}
          />
          <div
            className="absolute rounded-full"
            style={{ width: 32, height: 32, backgroundColor: 'rgba(232,255,71,0.2)' }}
          />
          <div
            className="relative rounded-full border-2 border-white"
            style={{ width: 16, height: 16, backgroundColor: '#e8ff47', zIndex: 15 }}
          />
        </div>
      </div>

      {/* Floating header */}
      <div
        className="absolute left-0 right-0 border-b z-30"
        style={{
          top: 44,
          backgroundColor: 'rgba(8,8,8,0.9)',
          backdropFilter: 'blur(16px)',
          borderColor: '#1a1a1a',
          padding: '14px 18px',
        }}
      >
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center border rounded-lg"
            style={{
              width: 32,
              height: 32,
              backgroundColor: '#161616',
              borderColor: '#242424',
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="text-[#f5f5f5]" />
          </button>
          <h2
            className="font-bold text-[#f5f5f5]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 16 }}
          >
            Eventos Próximos
          </h2>
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={18} className="text-[#888]" />
            <Bell size={18} className="text-[#888]" />
          </div>
        </div>
      </div>

      {/* Floating search */}
      <div
        className="absolute left-0 right-0 z-30"
        style={{ top: 44 + 56, paddingLeft: 16, paddingRight: 16 }}
      >
        <div
          className="flex items-center gap-3 border"
          style={{
            backgroundColor: 'rgba(22,22,22,0.9)',
            backdropFilter: 'blur(8px)',
            borderColor: '#242424',
            borderRadius: 12,
            padding: '12px 16px',
          }}
        >
          <span className="text-[#555]">🔍</span>
          <span
            className="text-[#555]"
            style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
          >
            Buscar no mapa...
          </span>
        </div>
      </div>

      {/* Genre filter chips */}
      <div
        className="absolute left-0 right-0 z-30 flex gap-2 overflow-x-auto"
        style={{
          top: 44 + 56 + 56,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 4,
          scrollbarWidth: 'none',
        }}
      >
        {genreFilters.map((gf) => {
          const isActive = activeGenre === gf.id;
          return (
            <button
              key={gf.id}
              className="border font-bold transition-all whitespace-nowrap"
              style={{
                padding: '6px 12px',
                borderRadius: 999,
                fontSize: 12,
                fontFamily: "'DM Mono', monospace",
                flexShrink: 0,
                backgroundColor: isActive ? hexToRgba(gf.color, 0.2) : 'rgba(8,8,8,0.8)',
                borderColor: isActive ? gf.color : '#333',
                color: isActive ? gf.color : '#666',
              }}
              onClick={() => setActiveGenre(gf.id)}
            >
              {gf.label}
            </button>
          );
        })}
      </div>

      {/* Bottom sheet */}
      <div
        className="absolute left-0 right-0 z-30 border-t"
        style={{
          bottom: 80,
          backgroundColor: '#0f0f0f',
          borderRadius: '24px 24px 0 0',
          borderColor: '#242424',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.6)',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 12, paddingBottom: 8 }}>
          <div className="rounded-full" style={{ width: 32, height: 4, backgroundColor: '#333' }} />
        </div>

        {selectedEvent ? (
          /* Expanded: selected event card */
          <div style={{ padding: '8px 16px 20px' }}>
            <div
              className="w-full border overflow-hidden relative"
              style={{ height: 100, borderRadius: 14, backgroundColor: '#1a1a1a', borderColor: '#242424', marginBottom: 12 }}
            >
              {/* X placeholder */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#666" strokeWidth="1.5" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="#666" strokeWidth="1.5" />
              </svg>
              <div
                className="absolute top-3 left-3 flex items-center border"
                style={{
                  padding: '3px 10px',
                  borderRadius: 999,
                  backgroundColor: hexToRgba(selectedEvent.color, 0.2),
                  borderColor: selectedEvent.color,
                }}
              >
                <span style={{ color: selectedEvent.color, fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
                  {selectedEvent.emoji} {selectedEvent.genre}
                </span>
              </div>
            </div>
            <h3
              className="font-bold text-white mb-1"
              style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18 }}
            >
              {selectedEvent.name}
            </h3>
            <p className="text-[#888] mb-1" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
              {selectedEvent.venue} • {selectedEvent.time}
            </p>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                ★ {selectedEvent.rating}
              </span>
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                {selectedEvent.confirmed} confirmados
              </span>
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                📍 {selectedEvent.distance}
              </span>
            </div>
            <button
              className="w-full font-bold border"
              style={{
                backgroundColor: '#e8ff47',
                color: '#080808',
                borderColor: '#e8ff47',
                borderRadius: 12,
                padding: '14px 0',
                fontSize: 14,
                fontFamily: "'Clash Display', sans-serif",
              }}
              onClick={() => navigate('/event/1')}
            >
              Ver evento
            </button>
          </div>
        ) : (
          /* Default: list preview */
          <div style={{ paddingBottom: 16 }}>
            <div
              className="flex items-center justify-between"
              style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 8 }}
            >
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                {mapEvents.length} eventos próximos
              </span>
              <button
                className="font-bold"
                style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}
              >
                ordenar ▾
              </button>
            </div>

            {/* 3 preview rows */}
            {[mapEvents[3], mapEvents[0], mapEvents[1]].map((event, i) => (
              <div
                key={event.id}
                className="flex items-center border-b cursor-pointer"
                style={{
                  height: 64,
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderColor: '#1a1a1a',
                }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Pin circle */}
                <div
                  className="flex items-center justify-center rounded-full border-2 border-white flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: hexToRgba(event.color, 0.85),
                    boxShadow: `0 2px 8px ${hexToRgba(event.color, 0.4)}`,
                    fontSize: 16,
                    marginRight: 12,
                  }}
                >
                  {event.emoji}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-bold text-white truncate"
                    style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
                  >
                    {event.name}
                  </p>
                  <p className="text-[#888] truncate" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                    {event.venue} • {event.distance}
                  </p>
                </div>
                {/* Price + button */}
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  <span
                    className="font-bold"
                    style={{ color: event.color, fontSize: 13, fontFamily: "'DM Mono', monospace" }}
                  >
                    R${event.price}
                  </span>
                  <button
                    className="border font-bold"
                    style={{
                      backgroundColor: hexToRgba(event.color, 0.15),
                      borderColor: event.color,
                      color: event.color,
                      fontSize: 10,
                      borderRadius: 8,
                      padding: '4px 8px',
                      fontFamily: "'DM Mono', monospace",
                    }}
                    onClick={(e) => { e.stopPropagation(); navigate('/event/1'); }}
                  >
                    Ver
                  </button>
                </div>
              </div>
            ))}

            <p
              className="text-center text-[#555] mt-2"
              style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}
            >
              ... e mais {mapEvents.length - 3} eventos
            </p>
          </div>
        )}
      </div>

      <BottomNav />
      <HomeIndicator />
    </div>
  );
}
