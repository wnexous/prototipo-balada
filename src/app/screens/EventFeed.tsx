import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, SlidersHorizontal } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { BottomNav } from '../components/BottomNav';
import { people } from '../data/people';
import { coverFor } from '../lib/media';
import { sections, filterTabs, filterToSections, featuredEvent, type EventData } from '../data/events';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function ImagePlaceholder({ color, genre, seed }: { color: string; genre?: string; seed?: string | number }) {
  return (
    <div className="w-full h-full relative" style={{ backgroundColor: '#1a1a1a' }}>
      {genre && (
        <img src={coverFor(genre, seed ?? genre)} alt="" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
      )}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.22 }}>
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#666" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#666" strokeWidth="1.5" />
      </svg>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${hexToRgba(color, 0.08)} 0%, transparent 55%)` }}
      />
    </div>
  );
}

function EventCard({ event, onPress }: { event: EventData; onPress: () => void }) {
  return (
    <div
      className="flex-shrink-0 overflow-hidden cursor-pointer border"
      style={{ width: 200, height: 280, borderRadius: 18, backgroundColor: '#161616', borderColor: '#242424' }}
      onClick={onPress}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: 130 }}>
        <ImagePlaceholder color={event.color} genre={event.genre} seed={event.id} />
        <div
          className="absolute top-3 left-3 flex items-center border"
          style={{ padding: '4px 10px', borderRadius: 999, backgroundColor: hexToRgba(event.color, 0.2), borderColor: event.color }}
        >
          <span className="font-bold" style={{ color: event.color, fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
            {event.genre}
          </span>
        </div>
        <div
          className="absolute top-3 right-3"
          style={{ padding: '4px 10px', borderRadius: 999, backgroundColor: 'rgba(0,0,0,0.65)' }}
        >
          <span className="text-[#f5f5f5]" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
            {event.distance}
          </span>
        </div>
        <div
          className="absolute bottom-3 left-3"
          style={{ padding: '4px 10px', borderRadius: 999, backgroundColor: 'rgba(0,0,0,0.65)' }}
        >
          <span className="font-bold" style={{ color: '#e8ff47', fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
            ★ {event.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between" style={{ padding: 12, height: 150 }}>
        <div>
          <h4
            className="font-bold leading-tight mb-[5px]"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 14,
              color: '#f5f5f5',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.name}
          </h4>
          <p className="text-[#888]" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
            {event.time} • {event.venue}
          </p>
        </div>
        <div className="flex items-center">
          {people.slice(0, 3).map((person, i) => (
            <div
              key={i}
              className="rounded-full flex items-center justify-center border"
              style={{
                width: 20, height: 20,
                backgroundColor: hexToRgba(person.color, 0.3),
                borderColor: '#080808',
                marginLeft: i > 0 ? -6 : 0,
                zIndex: 3 - i,
                fontSize: 10, flexShrink: 0,
              }}
            >
              <img src={person.photo} alt={person.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
            </div>
          ))}
          <span className="ml-[7px] text-[#888]" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
            {event.confirmed} conf
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold" style={{ color: event.color, fontSize: 14, fontFamily: "'DM Mono', monospace" }}>
            R${event.price}
          </span>
          <button
            className="border font-bold"
            style={{
              backgroundColor: hexToRgba(event.color, 0.15),
              borderColor: event.color,
              color: event.color,
              fontSize: 11,
              borderRadius: 8,
              padding: '5px 10px',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Ver →
          </button>
        </div>
      </div>
    </div>
  );
}

export function EventFeed() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const visibleSectionIds = filterToSections[activeFilter] ?? sections.map((s) => s.id);
  const showFeatured = activeFilter === 'Todos';
  const showNoResultsHint = activeFilter !== 'Todos';

  const goToEvent = (event: EventData) => {
    navigate('/event/' + event.id, { state: { event } });
  };

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Top bar */}
      <div className="flex items-center justify-between px-[18px] pt-4 pb-3">
        <div>
          <p
            className="uppercase tracking-[1.5px] text-[#888]"
            style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}
          >
            Boa noite 🌙
          </p>
          <h1
            className="font-bold text-[#f5f5f5]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 24, fontWeight: 800 }}
          >
            O que rola hoje
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative" onClick={() => navigate('/notifications')}>
            <Bell size={22} className="text-[#888]" />
            <div className="absolute -top-1 -right-1 w-[6px] h-[6px] bg-[#e8ff47] rounded-full" />
          </button>
          <button
            className="flex items-center justify-center border-2 border-[#e8ff47] rounded-full"
            style={{ width: 36, height: 36, backgroundColor: hexToRgba('#e8ff47', 0.1), fontSize: 18 }}
            onClick={() => navigate('/settings')}
          >
            😊
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ margin: '0 16px 10px' }}>
        <button
          className="w-full flex items-center gap-3 border text-left"
          onClick={() => navigate('/search')}
          style={{
            backgroundColor: '#161616',
            borderColor: '#242424',
            borderRadius: 12,
            padding: '12px 16px',
            borderWidth: 1.5,
          }}
        >
          <Search size={16} style={{ color: '#555', flexShrink: 0 }} />
          <span
            className="flex-1"
            style={{ color: '#444', fontSize: 13, fontFamily: "'DM Mono', monospace" }}
          >
            Buscar eventos, artistas, venues...
          </span>
          <SlidersHorizontal size={16} style={{ color: '#555', flexShrink: 0 }} />
        </button>
      </div>

      {/* Genre filter tabs */}
      <div
        className="flex gap-2 overflow-x-auto"
        style={{ padding: '0 16px 10px', scrollbarWidth: 'none' }}
      >
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className="border whitespace-nowrap font-bold"
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 11,
                fontFamily: "'DM Mono', monospace",
                flexShrink: 0,
                backgroundColor: isActive ? hexToRgba(tab.color, 0.15) : '#161616',
                borderColor: isActive ? tab.color : '#242424',
                color: isActive ? tab.color : '#555',
                transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none' }}>

        {/* Featured strip */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: showFeatured ? 280 : 0,
            opacity: showFeatured ? 1 : 0,
            transition: 'max-height 0.3s ease, opacity 0.2s ease',
            padding: showFeatured ? '0 16px' : '0 16px',
            marginBottom: showFeatured ? 24 : 0,
          }}
        >
          {/* Label row */}
          <div className="flex items-center gap-2 mb-3">
            <h2
              className="font-bold text-[#f5f5f5]"
              style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 16 }}
            >
              🔥 Em Alta Agora
            </h2>
            <div className="px-2 py-[2px] rounded-full bg-[#ff3b3b]">
              <span className="text-white font-bold uppercase" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
                ao vivo
              </span>
            </div>
          </div>
          {/* Featured card */}
          <div
            className="w-full overflow-hidden cursor-pointer border relative"
            style={{ height: 190, borderRadius: 18, backgroundColor: '#1a1a1a', borderColor: '#242424' }}
            onClick={() => goToEvent(featuredEvent)}
          >
            <img src={coverFor(featuredEvent.genre, featuredEvent.id)} alt="" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
      
            {/* BG tint for K-pop */}
            <div className="absolute inset-0" style={{ backgroundColor: hexToRgba(featuredEvent.color, 0.12) }} />
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.18 }}>
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="#888" strokeWidth="1.5" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="#888" strokeWidth="1.5" />
            </svg>
            {/* Sparkles for K-pop */}
            {['16%', '72%', '44%', '85%'].map((left, i) => (
              <span
                key={i}
                className="absolute text-white"
                style={{ top: ['18%', '42%', '8%', '28%'][i], left, fontSize: [12, 8, 10, 14][i], opacity: 0.5 }}
              >
                ✨
              </span>
            ))}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />
            {/* EM ALTA pill */}
            <div
              className="absolute top-3 left-3 bg-[#ff3b3b]"
              style={{ padding: '4px 10px', borderRadius: 999 }}
            >
              <span className="text-white font-bold" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
                EM ALTA
              </span>
            </div>
            {/* Online count */}
            <div
              className="absolute top-3 right-3"
              style={{ padding: '4px 10px', borderRadius: 999, backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
              <span className="font-bold" style={{ color: '#e8ff47', fontSize: 10, fontFamily: "'DM Mono', monospace" }}>
                💜 234 online agora
              </span>
            </div>
            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="font-bold text-white mb-[2px]" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 20 }}>
                BTS Night — Tribute
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-[#888]" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                  Arena Neon • Hoje 21h
                </p>
                <span className="font-bold" style={{ color: '#e8ff47', fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                  R$55 • ★5.0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Genre sections */}
        {sections.map((section) => {
          const isVisible = visibleSectionIds.includes(section.id);
          return (
            <div
              key={section.id}
              style={{
                overflow: 'hidden',
                maxHeight: isVisible ? 420 : 0,
                opacity: isVisible ? 1 : 0,
                marginBottom: isVisible ? 24 : 0,
                transition: 'max-height 0.3s ease, opacity 0.2s ease, margin-bottom 0.3s ease',
              }}
            >
              <div className="flex items-center justify-between mb-3" style={{ padding: '0 18px 0 18px' }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: 18 }}>{section.emoji}</span>
                  <h2 className="font-bold text-white" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 16 }}>
                    {section.label}
                    {!showFeatured && (
                      <span className="text-[#888] font-normal" style={{ fontSize: 13 }}>
                        {' '}— {section.events.length} evento{section.events.length !== 1 ? 's' : ''}
                      </span>
                    )}
                  </h2>
                </div>
                <button style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                  ver todos →
                </button>
              </div>
              <div
                className="flex gap-3 overflow-x-auto"
                style={{ padding: '0 16px', scrollbarWidth: 'none' }}
              >
                {section.events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onPress={() => goToEvent(event)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* No results hint */}
        {showNoResultsHint && (
          <div className="text-center mt-4 pb-4" style={{ padding: '0 24px' }}>
            <p className="text-[#555]" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
              Não encontrou o que queria?
            </p>
            <button
              className="underline mt-1"
              style={{ color: '#e8ff47', fontSize: 13, fontFamily: "'DM Mono', monospace" }}
              onClick={() => setActiveFilter('Todos')}
            >
              Ver todos os eventos →
            </button>
          </div>
        )}
      </div>

      <BottomNav />
      <HomeIndicator />
    </div>
  );
}
