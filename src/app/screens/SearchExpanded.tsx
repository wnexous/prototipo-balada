import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { allEvents, type EventData } from '../data/events';
import { recentSearches, trendingSearches as trending, searchCategories as categories } from '../data/search';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function SearchExpanded() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [recents, setRecents] = useState(recentSearches);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results: EventData[] = query.trim()
    ? allEvents.filter(
        (e) =>
          e.name.toLowerCase().includes(query.toLowerCase()) ||
          e.genre.toLowerCase().includes(query.toLowerCase()) ||
          e.venue.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const removeRecent = (term: string) => {
    setRecents((prev) => prev.filter((r) => r !== term));
  };

  const goToEvent = (event: EventData) => {
    navigate('/event/' + event.id, { state: { event } });
  };

  const goToCategory = (genre: string) => {
    navigate('/home', { state: { genre } });
  };

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] flex flex-col" style={{ animation: 'slideUp 0.25s ease' }}>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <StatusBar />

      {/* Search bar row */}
      <div
        className="flex items-center border-b"
        style={{ padding: '10px 16px', borderColor: '#1a1a1a', gap: 12 }}
      >
        <div
          className="flex items-center flex-1 border"
          style={{
            backgroundColor: '#161616',
            borderColor: '#e8ff47',
            borderWidth: 1.5,
            borderRadius: 12,
            padding: '10px 14px',
            gap: 8,
          }}
        >
          <Search size={16} style={{ color: '#555', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar eventos, artistas, venues..."
            className="flex-1 bg-transparent outline-none"
            style={{ color: '#f5f5f5', fontSize: 13, fontFamily: "'DM Mono', monospace" }}
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#555]" style={{ fontSize: 14, flexShrink: 0 }}>
              ✕
            </button>
          )}
        </div>
        <button
          onClick={() => navigate(-1)}
          style={{ color: '#e8ff47', fontSize: 13, fontFamily: "'DM Mono', monospace", flexShrink: 0 }}
        >
          Cancelar
        </button>
      </div>

      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        {query.trim() ? (
          /* Search results */
          <div>
            {results.length === 0 ? (
              <div className="flex flex-col items-center justify-center" style={{ padding: '60px 24px', gap: 12 }}>
                <span style={{ fontSize: 48 }}>🔍</span>
                <p className="text-[#555] text-center" style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}>
                  Nenhum resultado para "{query}"
                </p>
              </div>
            ) : (
              <>
                <div style={{ padding: '16px 18px 8px' }}>
                  <p className="uppercase text-[#888]" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}>
                    EVENTOS
                  </p>
                </div>
                {results.map((event) => (
                  <button
                    key={event.id}
                    className="w-full flex items-center border-b text-left"
                    style={{ padding: '14px 18px', borderColor: '#1a1a1a', gap: 12 }}
                    onClick={() => goToEvent(event)}
                  >
                    <div
                      className="flex items-center justify-center border rounded-full flex-shrink-0"
                      style={{
                        width: 40, height: 40,
                        backgroundColor: hexToRgba(event.color, 0.15),
                        borderColor: event.color,
                        fontSize: 20,
                      }}
                    >
                      {event.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white truncate" style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}>
                        {event.name}
                      </p>
                      <p className="text-[#555]" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                        {event.venue} • {event.time}
                      </p>
                    </div>
                    <span className="font-bold flex-shrink-0" style={{ color: event.color, fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                      R${event.price}
                    </span>
                  </button>
                ))}
              </>
            )}
          </div>
        ) : (
          /* Default: recent + trending + categories */
          <>
            {/* Buscas recentes */}
            {recents.length > 0 && (
              <div>
                <div style={{ padding: '16px 18px 10px' }}>
                  <div className="flex items-center justify-between">
                    <p className="uppercase text-[#888]" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}>
                      BUSCAS RECENTES
                    </p>
                    <button
                      onClick={() => setRecents([])}
                      className="underline text-[#555]"
                      style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}
                    >
                      Limpar histórico
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap" style={{ padding: '0 16px 16px', gap: 8 }}>
                  {recents.map((term) => (
                    <div
                      key={term}
                      className="flex items-center border"
                      style={{
                        backgroundColor: '#161616',
                        borderColor: '#242424',
                        borderRadius: 999,
                        padding: '7px 14px',
                        gap: 8,
                      }}
                    >
                      <span className="text-[#555]" style={{ fontSize: 12 }}>🕐</span>
                      <button
                        onClick={() => setQuery(term)}
                        className="text-[#888]"
                        style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
                      >
                        {term}
                      </button>
                      <button
                        onClick={() => removeRecent(term)}
                        className="text-[#444]"
                        style={{ fontSize: 10 }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Em Alta */}
            <div>
              <div style={{ padding: '4px 18px 10px' }}>
                <p className="uppercase text-[#888]" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}>
                  EM ALTA
                </p>
              </div>
              {trending.map((item, i) => (
                <button
                  key={item.name}
                  className="w-full flex items-center border-b text-left"
                  style={{ padding: '12px 18px', borderColor: '#1a1a1a', gap: 14 }}
                  onClick={() => setQuery(item.name)}
                >
                  <span
                    className="font-bold"
                    style={{ color: '#e8ff47', fontSize: 16, fontFamily: "'Clash Display', sans-serif", width: 24 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="flex-1 font-bold text-white"
                    style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.name}
                  </span>
                  <div
                    className="flex items-center border"
                    style={{
                      padding: '3px 10px',
                      borderRadius: 999,
                      backgroundColor: hexToRgba(item.color, 0.15),
                      borderColor: item.color,
                    }}
                  >
                    <span style={{ fontSize: 10, color: item.color, fontFamily: "'DM Mono', monospace" }}>
                      {item.emoji} {item.genre}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Categorias */}
            <div>
              <div style={{ padding: '16px 18px 10px' }}>
                <p className="uppercase text-[#888]" style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}>
                  CATEGORIAS
                </p>
              </div>
              <div className="grid grid-cols-2" style={{ padding: '0 16px 24px', gap: 10 }}>
                {categories.map((cat) => (
                  <button
                    key={cat.genre}
                    className="flex items-center border"
                    onClick={() => goToCategory(cat.genre)}
                    style={{
                      height: 72,
                      borderRadius: 14,
                      backgroundColor: hexToRgba(cat.color, 0.1),
                      borderColor: cat.color,
                      padding: '0 16px',
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{cat.emoji}</span>
                    <span
                      className="font-bold text-white"
                      style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 14 }}
                    >
                      {cat.genre}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <HomeIndicator />
    </div>
  );
}
