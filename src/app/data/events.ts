// Catálogo de eventos do LinkUp — 100% dado mocado.
// Fonte única usada por EventFeed, EventDetail, SearchExpanded e MapView.

export type EventData = {
  id: number;
  name: string;
  genre: string;
  emoji: string;
  color: string;
  venue: string;
  time: string;
  price: number;
  confirmed: number;
  rating: number;
  distance: string;
};

export const allEvents: EventData[] = [
  { id: 1,  name: 'Festa do Rock 2026',       genre: 'Rock',       emoji: '🎸', color: '#e8ff47', venue: 'Bar XV',        time: 'Hoje 22h–05h',  price: 40, confirmed: 47,  rating: 4.6, distance: '3.2 km' },
  { id: 2,  name: 'Techno Rave',               genre: 'Techno',     emoji: '⚡', color: '#38bdf8', venue: 'Wavehouse',     time: 'Hoje 23h–06h',  price: 30, confirmed: 123, rating: 4.9, distance: '2.1 km' },
  { id: 3,  name: 'Funk Night',                genre: 'Funk',       emoji: '🎵', color: '#f97316', venue: 'Clubão',        time: 'Hoje 23h30',    price: 20, confirmed: 89,  rating: 3.9, distance: '1.8 km' },
  { id: 4,  name: 'House Sessions',            genre: 'House',      emoji: '🏠', color: '#c084fc', venue: 'Void Club',     time: 'Hoje 00h–07h',  price: 50, confirmed: 201, rating: 4.8, distance: '0.8 km' },
  { id: 5,  name: 'Pagodão da Sexta',          genre: 'Pagode',     emoji: '🥁', color: '#4ade80', venue: 'Samba Hall',    time: 'Hoje 21h–04h',  price: 25, confirmed: 156, rating: 4.5, distance: '4.1 km' },
  { id: 6,  name: 'Sertanejo Premium',         genre: 'Sertanejo',  emoji: '🤠', color: '#facc15', venue: 'Arena Sul',     time: 'Hoje 21h30',    price: 60, confirmed: 312, rating: 4.3, distance: '5.6 km' },
  { id: 7,  name: 'Hip Hop Underground',       genre: 'Hip-Hop',    emoji: '🎤', color: '#f472b6', venue: 'Base Club',     time: 'Hoje 22h–05h',  price: 35, confirmed: 98,  rating: 4.7, distance: '2.9 km' },
  { id: 8,  name: 'Jazz & Bossa Lounge',       genre: 'Jazz',       emoji: '🎷', color: '#38bdf8', venue: 'Café Bossa',    time: 'Hoje 20h–02h',  price: 45, confirmed: 44,  rating: 4.9, distance: '1.5 km' },
  { id: 9,  name: 'Eletrônico ao Vivo',        genre: 'Eletrônico', emoji: '🎹', color: '#e879f9', venue: 'Hangar 522',    time: 'Hoje 23h–07h',  price: 55, confirmed: 178, rating: 4.6, distance: '3.7 km' },
  { id: 10, name: 'Axé Carnaval Antecipado',   genre: 'Axé',        emoji: '🪘', color: '#fb923c', venue: 'Bloco Central', time: 'Hoje 21h–05h',  price: 30, confirmed: 267, rating: 4.2, distance: '6.2 km' },
  { id: 11, name: 'Indie & Alternativo',       genre: 'Indie',      emoji: '🎸', color: '#a3e635', venue: 'The Roof',      time: 'Hoje 22h30',    price: 40, confirmed: 73,  rating: 4.8, distance: '4.4 km' },
  { id: 12, name: 'Reggae Roots Night',        genre: 'Reggae',     emoji: '🌿', color: '#4ade80', venue: 'Marley Bar',    time: 'Hoje 21h–03h',  price: 20, confirmed: 91,  rating: 4.4, distance: '3.1 km' },
  { id: 13, name: 'K-pop Universe Party',      genre: 'K-pop',      emoji: '🌸', color: '#ff6eb4', venue: 'Neon Hall',     time: 'Hoje 20h–04h',  price: 45, confirmed: 189, rating: 4.9, distance: '2.3 km' },
  { id: 14, name: 'BTS Night — Tribute',       genre: 'K-pop',      emoji: '💜', color: '#a78bfa', venue: 'Arena Neon',    time: 'Hoje 21h–05h',  price: 55, confirmed: 234, rating: 5.0, distance: '1.9 km' },
  { id: 15, name: 'K-pop Dance Battle',        genre: 'K-pop',      emoji: '🕺', color: '#22d3ee', venue: 'Studio K',      time: 'Hoje 22h–06h',  price: 35, confirmed: 142, rating: 4.7, distance: '3.4 km' },
  { id: 16, name: 'Seoul Vibes',               genre: 'K-pop',      emoji: '✨', color: '#f9a8d4', venue: 'Club Seul',     time: 'Hoje 23h–07h',  price: 50, confirmed: 98,  rating: 4.6, distance: '4.8 km' },
  { id: 17, name: 'Rock in Bar',               genre: 'Rock',       emoji: '🤘', color: '#e8ff47', venue: 'Garagem 70',    time: 'Hoje 22h–04h',  price: 35, confirmed: 64,  rating: 4.5, distance: '2.7 km' },
  { id: 18, name: 'Deep House Rooftop',        genre: 'House',      emoji: '🌇', color: '#c084fc', venue: 'Sky Lounge',    time: 'Hoje 23h–06h',  price: 45, confirmed: 132, rating: 4.7, distance: '1.4 km' },
  { id: 19, name: 'Baile Funk da Quebrada',    genre: 'Funk',       emoji: '🔊', color: '#f97316', venue: 'Quadra Central',time: 'Hoje 23h',      price: 15, confirmed: 210, rating: 4.4, distance: '5.0 km' },
  { id: 20, name: 'Techno Bunker',             genre: 'Techno',     emoji: '🛸', color: '#38bdf8', venue: 'Subsolo',       time: 'Hoje 00h–08h',  price: 40, confirmed: 175, rating: 4.8, distance: '3.6 km' },
  { id: 21, name: 'Samba de Raiz',             genre: 'Pagode',     emoji: '🪕', color: '#4ade80', venue: 'Boteco do Zé',  time: 'Hoje 20h–02h',  price: 20, confirmed: 98,  rating: 4.6, distance: '4.2 km' },
  { id: 22, name: 'Modão Universitário',       genre: 'Sertanejo',  emoji: '🐂', color: '#facc15', venue: 'Celeiro',       time: 'Hoje 22h',      price: 30, confirmed: 245, rating: 4.1, distance: '6.8 km' },
  { id: 23, name: 'Trap & Rap Session',        genre: 'Hip-Hop',    emoji: '🎧', color: '#f472b6', venue: 'Beco 9',        time: 'Hoje 23h–05h',  price: 30, confirmed: 110, rating: 4.6, distance: '2.4 km' },
  { id: 24, name: 'Bossa na Varanda',          genre: 'Jazz',       emoji: '🎺', color: '#22d3ee', venue: 'Café Lua',      time: 'Hoje 20h–01h',  price: 40, confirmed: 38,  rating: 4.9, distance: '1.1 km' },
  { id: 25, name: 'Rave na Floresta',          genre: 'Eletrônico', emoji: '🌲', color: '#e879f9', venue: 'Sítio Verde',   time: 'Amanhã 22h',    price: 70, confirmed: 320, rating: 4.7, distance: '12 km'  },
  { id: 26, name: 'Bloco Pré-Carnaval',        genre: 'Axé',        emoji: '🎊', color: '#fb923c', venue: 'Largo da Ordem',time: 'Sáb 16h',       price: 0,  confirmed: 540, rating: 4.3, distance: '3.9 km' },
  { id: 27, name: 'Indie Folk Night',          genre: 'Indie',      emoji: '🪗', color: '#a3e635', venue: 'Sótão',         time: 'Hoje 21h–02h',  price: 35, confirmed: 56,  rating: 4.8, distance: '2.0 km' },
  { id: 28, name: 'Reggae Sunset',             genre: 'Reggae',     emoji: '🌅', color: '#4ade80', venue: 'Praia Bar',     time: 'Hoje 18h–00h',  price: 25, confirmed: 87,  rating: 4.5, distance: '4.6 km' },
];

export const featuredEvent = allEvents.find((e) => e.id === 14)!; // BTS Night — Tribute

export type Section = {
  id: string;
  label: string;
  emoji: string;
  color: string;
  events: EventData[];
};

// Ordem de exibição das seções no feed (gênero -> rótulo/emoji/cor).
const sectionOrder: { id: string; label: string; emoji: string; color: string }[] = [
  { id: 'K-pop',      label: 'K-pop',      emoji: '🌸', color: '#ff6eb4' },
  { id: 'Rock',       label: 'Rock',       emoji: '🎸', color: '#e8ff47' },
  { id: 'Techno',     label: 'Techno',     emoji: '⚡', color: '#38bdf8' },
  { id: 'House',      label: 'House',      emoji: '🏠', color: '#c084fc' },
  { id: 'Funk',       label: 'Funk',       emoji: '🎵', color: '#f97316' },
  { id: 'Hip-Hop',    label: 'Hip-Hop',    emoji: '🎤', color: '#f472b6' },
  { id: 'Eletrônico', label: 'Eletrônico', emoji: '🎹', color: '#e879f9' },
  { id: 'Jazz',       label: 'Jazz',       emoji: '🎷', color: '#38bdf8' },
  { id: 'Pagode',     label: 'Pagode',     emoji: '🥁', color: '#4ade80' },
  { id: 'Sertanejo',  label: 'Sertanejo',  emoji: '🤠', color: '#facc15' },
  { id: 'Indie',      label: 'Indie',      emoji: '🎸', color: '#a3e635' },
  { id: 'Axé',        label: 'Axé',        emoji: '🪘', color: '#fb923c' },
  { id: 'Reggae',     label: 'Reggae',     emoji: '🌿', color: '#4ade80' },
];

export const sections: Section[] = sectionOrder.map((s) => ({
  ...s,
  events: allEvents.filter((e) => e.genre === s.id),
}));

export const filterTabs: { id: string; label: string; color: string }[] = [
  { id: 'Todos', label: 'Todos', color: '#e8ff47' },
  ...sectionOrder.map((s) => ({ id: s.id, label: `${s.emoji} ${s.label}`, color: s.color })),
];

// Cada filtro mapeia para as seções visíveis. 'Todos' mostra tudo; gênero -> sua própria seção.
export const filterToSections: Record<string, string[]> = {
  Todos: sectionOrder.map((s) => s.id),
  ...Object.fromEntries(sectionOrder.map((s) => [s.id, [s.id]])),
};

// --- Mapa (MapView) ----------------------------------------------------------
// Coordenadas reais em Curitiba/PR — usadas pelo mapa Leaflet (tiles do CartoDB).
export const MAP_CENTER: [number, number] = [-25.429, -49.271];
export const MAP_ZOOM = 14;

export type MapEvent = EventData & {
  lat: number;
  lng: number;
  pinSize: number;
};

const mapCoords: Record<number, { lat: number; lng: number; pinSize: number }> = {
  1:  { lat: -25.4290, lng: -49.2670, pinSize: 38 }, // Bar XV — Centro
  2:  { lat: -25.4180, lng: -49.2720, pinSize: 46 }, // Wavehouse — Juvevê
  3:  { lat: -25.4400, lng: -49.2600, pinSize: 46 }, // Clubão — Cristo Rei
  4:  { lat: -25.4420, lng: -49.2880, pinSize: 54 }, // Void Club — Batel
  5:  { lat: -25.4350, lng: -49.2500, pinSize: 46 }, // Samba Hall — Cristo Rei
  6:  { lat: -25.4600, lng: -49.2900, pinSize: 54 }, // Arena Sul — Água Verde
  7:  { lat: -25.4480, lng: -49.2650, pinSize: 46 }, // Base Club — Rebouças
  8:  { lat: -25.4250, lng: -49.2780, pinSize: 38 }, // Café Bossa — Mercês
  9:  { lat: -25.4150, lng: -49.2550, pinSize: 46 }, // Hangar 522 — Cabral
  10: { lat: -25.4330, lng: -49.2720, pinSize: 54 }, // Bloco Central — Centro
  11: { lat: -25.4100, lng: -49.2800, pinSize: 38 }, // The Roof — Bigorrilho
  12: { lat: -25.4550, lng: -49.2550, pinSize: 46 }, // Marley Bar — Prado Velho
  13: { lat: -25.4220, lng: -49.2620, pinSize: 46 }, // Neon Hall — Alto da XV
  17: { lat: -25.4470, lng: -49.2780, pinSize: 38 }, // Garagem 70 — Água Verde
  18: { lat: -25.4380, lng: -49.2950, pinSize: 46 }, // Sky Lounge — Bigorrilho
  23: { lat: -25.4500, lng: -49.2700, pinSize: 38 }, // Beco 9 — Rebouças
};

export const mapEvents: MapEvent[] = allEvents
  .filter((e) => mapCoords[e.id])
  .map((e) => ({ ...e, ...mapCoords[e.id] }));

export const genreFilters: { id: string; label: string; emoji: string | null; color: string }[] = [
  { id: 'Todos', label: 'Todos', emoji: null, color: '#e8ff47' },
  ...sectionOrder
    .filter((s) => s.id !== 'K-pop')
    .map((s) => ({ id: s.id, label: s.emoji, emoji: s.emoji, color: s.color })),
];
