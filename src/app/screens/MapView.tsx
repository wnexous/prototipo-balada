import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Bell } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { BottomNav } from '../components/BottomNav';
import { mapEvents, genreFilters, MAP_CENTER, MAP_ZOOM, type MapEvent } from '../data/events';
import { coverFor } from '../lib/media';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function pinIcon(event: MapEvent, active: boolean) {
  const s = event.pinSize;
  const fontSize = s >= 52 ? 22 : s >= 44 ? 18 : 15;
  return L.divIcon({
    className: '',
    iconSize: [s, s],
    iconAnchor: [s / 2, s / 2],
    html: `<div style="width:${s}px;height:${s}px;border-radius:9999px;display:flex;align-items:center;justify-content:center;
      background:${hexToRgba(event.color, active ? 0.95 : 0.88)};border:2px solid #fff;
      box-shadow:0 4px 14px ${hexToRgba(event.color, 0.55)};font-size:${fontSize}px;line-height:1;
      transform:scale(${active ? 1.18 : 1});transition:transform .2s;">${event.emoji}</div>`,
  });
}

const userIcon = L.divIcon({
  className: '',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  html: `<div style="position:relative;width:18px;height:18px;">
    <div class="animate-ping" style="position:absolute;inset:-9px;border-radius:9999px;background:rgba(232,255,71,0.25);"></div>
    <div style="position:absolute;inset:0;border-radius:9999px;background:#e8ff47;border:2px solid #fff;box-shadow:0 0 10px rgba(232,255,71,0.7);"></div>
  </div>`,
});

export function MapView() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState('Todos');
  const [selectedEvent, setSelectedEvent] = useState<MapEvent | null>(null);

  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  // selectedEvent dentro de um ref p/ os handlers de clique dos markers lerem o valor atual
  const selectedRef = useRef<MapEvent | null>(null);
  selectedRef.current = selectedEvent;

  const activeGenreColor = genreFilters.find((g) => g.id === activeGenre)?.color ?? '#e8ff47';

  // Inicializa o mapa Leaflet uma única vez
  useEffect(() => {
    if (!mapElRef.current || mapRef.current) return;
    const map = L.map(mapElRef.current, {
      zoomControl: false,
      attributionControl: false, // usamos um selo próprio sempre visível (abaixo)
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);
    L.marker(MAP_CENTER, { icon: userIcon, interactive: false }).addTo(map);
    mapRef.current = map;
    setTimeout(() => map.invalidateSize(), 0);
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // (Re)desenha os pins conforme filtro de gênero / seleção
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = mapEvents
      .filter((e) => activeGenre === 'Todos' || e.genre === activeGenre)
      .map((e) => {
        const marker = L.marker([e.lat, e.lng], {
          icon: pinIcon(e, selectedRef.current?.id === e.id),
          riseOnHover: true,
        }).addTo(map);
        marker.on('click', () =>
          setSelectedEvent((prev) => (prev?.id === e.id ? null : e)),
        );
        return marker;
      });
  }, [activeGenre, selectedEvent]);

  // Centraliza no evento selecionado
  useEffect(() => {
    if (selectedEvent && mapRef.current) {
      mapRef.current.flyTo([selectedEvent.lat, selectedEvent.lng], 15, { duration: 0.6 });
    }
  }, [selectedEvent]);

  const openEvent = (event: MapEvent) => navigate('/event/' + event.id, { state: { event } });

  return (
    <div className="w-[390px] h-[844px] bg-[#0a0a0a] relative overflow-hidden flex flex-col">
      {/* StatusBar acima do mapa (tiles são opacos) */}
      <div className="relative z-30" style={{ backgroundColor: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(16px)' }}>
        <StatusBar />
      </div>

      {/* Mapa real (Leaflet + tiles CartoDB dark). zIndex 0 => fica atrás dos overlays. */}
      <div ref={mapElRef} className="absolute inset-0" style={{ zIndex: 0, backgroundColor: '#0a0a0a' }} />

      {/* Atribuição (OSM/CARTO) — sempre visível */}
      <span
        className="absolute z-30"
        style={{
          left: 16,
          top: 232,
          fontSize: 9,
          color: 'rgba(245,245,245,0.55)',
          backgroundColor: 'rgba(8,8,8,0.6)',
          padding: '2px 6px',
          borderRadius: 6,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        © OpenStreetMap · © CARTO
      </span>

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
            style={{ width: 32, height: 32, backgroundColor: '#161616', borderColor: '#242424' }}
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
      <div className="absolute left-0 right-0 z-30" style={{ top: 44 + 56, paddingLeft: 16, paddingRight: 16 }}>
        <div
          className="flex items-center gap-3 border"
          style={{
            backgroundColor: 'rgba(22,22,22,0.92)',
            backdropFilter: 'blur(8px)',
            borderColor: '#242424',
            borderRadius: 12,
            padding: '12px 16px',
          }}
          onClick={() => navigate('/search')}
        >
          <span className="text-[#555]">🔍</span>
          <span className="text-[#555]" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
            Buscar no mapa...
          </span>
        </div>
      </div>

      {/* Genre filter chips */}
      <div
        className="absolute left-0 right-0 z-30 flex gap-2 overflow-x-auto"
        style={{ top: 44 + 56 + 56, paddingLeft: 16, paddingRight: 16, paddingBottom: 4, scrollbarWidth: 'none' }}
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
                backgroundColor: isActive ? hexToRgba(gf.color, 0.2) : 'rgba(8,8,8,0.85)',
                borderColor: isActive ? gf.color : '#333',
                color: isActive ? gf.color : '#888',
              }}
              onClick={() => setActiveGenre(gf.id)}
            >
              {gf.label}
            </button>
          );
        })}
      </div>

      {/* Recenter button */}
      <button
        className="absolute z-30 flex items-center justify-center border rounded-full"
        style={{
          right: 16,
          bottom: 320,
          width: 42,
          height: 42,
          backgroundColor: 'rgba(8,8,8,0.9)',
          borderColor: activeGenreColor,
          color: activeGenreColor,
          fontSize: 18,
        }}
        onClick={() => {
          setSelectedEvent(null);
          mapRef.current?.flyTo(MAP_CENTER, MAP_ZOOM, { duration: 0.6 });
        }}
      >
        ◎
      </button>

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
              {/* Capa real do evento */}
              <img src={coverFor(selectedEvent.genre, selectedEvent.id)} alt={selectedEvent.name} referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 70%)' }} />
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
            <h3 className="font-bold text-white mb-1" style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18 }}>
              {selectedEvent.name}
            </h3>
            <p className="text-[#888] mb-1" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
              {selectedEvent.venue} • {selectedEvent.time}
            </p>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>★ {selectedEvent.rating}</span>
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>{selectedEvent.confirmed} confirmados</span>
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>📍 {selectedEvent.distance}</span>
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
              onClick={() => openEvent(selectedEvent)}
            >
              Ver evento
            </button>
          </div>
        ) : (
          /* Default: list preview */
          <div style={{ paddingBottom: 16 }}>
            <div className="flex items-center justify-between" style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 8 }}>
              <span className="text-[#888]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                {mapEvents.length} eventos próximos
              </span>
              <button className="font-bold" style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                ordenar ▾
              </button>
            </div>

            {[mapEvents[3], mapEvents[0], mapEvents[1]].map((event) => (
              <div
                key={event.id}
                className="flex items-center border-b cursor-pointer"
                style={{ height: 64, paddingLeft: 16, paddingRight: 16, borderColor: '#1a1a1a' }}
                onClick={() => setSelectedEvent(event)}
              >
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
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white truncate" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                    {event.name}
                  </p>
                  <p className="text-[#888] truncate" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                    {event.venue} • {event.distance}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  <span className="font-bold" style={{ color: event.color, fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
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
                    onClick={(e) => { e.stopPropagation(); openEvent(event); }}
                  >
                    Ver
                  </button>
                </div>
              </div>
            ))}

            <p className="text-center text-[#555] mt-2" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
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
