// Elenco de pessoas do LinkUp — 100% dado mocado.
// Avatares são fotos reais embutidas localmente (src/assets/avatars) e inlinadas
// como base64 no build single-file, então funcionam offline / via file://.
import juliaPhoto from '../../assets/avatars/julia.jpg';
import mariaPhoto from '../../assets/avatars/maria.jpg';
import carolPhoto from '../../assets/avatars/carol.jpg';
import paulaPhoto from '../../assets/avatars/paula.jpg';
import anaPhoto from '../../assets/avatars/ana.jpg';
import biaPhoto from '../../assets/avatars/bia.jpg';
import leticiaPhoto from '../../assets/avatars/leticia.jpg';
import sofiaPhoto from '../../assets/avatars/sofia.jpg';
import marinaPhoto from '../../assets/avatars/marina.jpg';
import helenaPhoto from '../../assets/avatars/helena.jpg';
import renataPhoto from '../../assets/avatars/renata.jpg';
import camilaPhoto from '../../assets/avatars/camila.jpg';
import isaPhoto from '../../assets/avatars/isa.jpg';
import dudaPhoto from '../../assets/avatars/duda.jpg';
import ninaPhoto from '../../assets/avatars/nina.jpg';
import brunoPhoto from '../../assets/avatars/bruno.jpg';
import thiagoPhoto from '../../assets/avatars/thiago.jpg';
import gabrielPhoto from '../../assets/avatars/gabriel.jpg';
import rafaelPhoto from '../../assets/avatars/rafael.jpg';
import lucasPhoto from '../../assets/avatars/lucas.jpg';
import viniPhoto from '../../assets/avatars/vini.jpg';
import pedroPhoto from '../../assets/avatars/pedro.jpg';
import diegoPhoto from '../../assets/avatars/diego.jpg';
import theoPhoto from '../../assets/avatars/theo.jpg';

export type Intention = 'Paquera' | 'Amizade' | 'Network';

export interface Person {
  name: string;
  age: number;
  emoji: string;
  color: string;
  bio: string;
  photo: string;
  interests: string[];
  intentions: Intention[];
  distance: string;
  online: boolean;
  verified: boolean;
  stats: { events: number; matches: number; atParty: string };
}

export const people: Person[] = [
  { name: 'Julia',   age: 24, emoji: '🌙', color: '#c084fc', bio: 'Ama rock e festivais',              photo: juliaPhoto,   interests: ['Rock', 'Festivais', 'Fotografia', 'Dança'],   intentions: ['Paquera', 'Amizade'], distance: '1.2 km', online: true,  verified: true,  stats: { events: 12, matches: 8,  atParty: '3h'  } },
  { name: 'Maria',   age: 22, emoji: '🔥', color: '#f97316', bio: 'DJ nos fins de semana',             photo: mariaPhoto,   interests: ['DJ', 'Eletrônico', 'Techno', 'Estúdio'],      intentions: ['Paquera', 'Network'], distance: '2.1 km', online: true,  verified: true,  stats: { events: 28, matches: 14, atParty: '1h'  } },
  { name: 'Carol',   age: 23, emoji: '⚡', color: '#facc15', bio: 'Fotógrafa e dançarina',             photo: carolPhoto,   interests: ['Fotografia', 'Dança', 'Arte', 'Indie'],       intentions: ['Amizade', 'Paquera'], distance: '0.8 km', online: true,  verified: true,  stats: { events: 19, matches: 11, atParty: '2h'  } },
  { name: 'Paula',   age: 21, emoji: '🌊', color: '#38bdf8', bio: 'Surfa de manhã, balada à noite',    photo: paulaPhoto,   interests: ['Surf', 'Reggae', 'Natureza', 'Praia'],        intentions: ['Amizade'],            distance: '3.4 km', online: false, verified: true,  stats: { events: 9,  matches: 5,  atParty: '—'   } },
  { name: 'Ana',     age: 22, emoji: '🌿', color: '#4ade80', bio: 'Ativista e amante de música',       photo: anaPhoto,     interests: ['Ativismo', 'Música', 'Jazz', 'Vegano'],       intentions: ['Amizade', 'Network'], distance: '1.5 km', online: true,  verified: true,  stats: { events: 22, matches: 7,  atParty: '4h'  } },
  { name: 'Bia',     age: 20, emoji: '✨', color: '#f472b6', bio: 'Artista plástica e performer',      photo: biaPhoto,     interests: ['Arte', 'Performance', 'K-pop', 'Design'],     intentions: ['Paquera', 'Amizade'], distance: '2.3 km', online: true,  verified: true,  stats: { events: 16, matches: 13, atParty: '2h'  } },
  { name: 'Letícia', age: 25, emoji: '💫', color: '#a78bfa', bio: 'Publicitária que vive de house',    photo: leticiaPhoto, interests: ['House', 'Viagem', 'Vinho', 'Moda'],           intentions: ['Paquera'],            distance: '4.0 km', online: false, verified: true,  stats: { events: 24, matches: 18, atParty: '—'   } },
  { name: 'Sofia',   age: 23, emoji: '🎤', color: '#22d3ee', bio: 'Canta jazz em bar todo sábado',     photo: sofiaPhoto,   interests: ['Jazz', 'Bossa', 'MPB', 'Voz'],                intentions: ['Amizade', 'Network'], distance: '1.9 km', online: true,  verified: true,  stats: { events: 31, matches: 9,  atParty: '1h'  } },
  { name: 'Marina',  age: 26, emoji: '🌺', color: '#fb7185', bio: 'Bailarina e instrutora de pilates', photo: marinaPhoto,  interests: ['Dança', 'Axé', 'Pop', 'Pilates'],             intentions: ['Paquera', 'Amizade'], distance: '5.1 km', online: false, verified: true,  stats: { events: 14, matches: 6,  atParty: '—'   } },
  { name: 'Helena',  age: 24, emoji: '🖤', color: '#e879f9', bio: 'Designer apaixonada por techno',    photo: helenaPhoto,  interests: ['Techno', 'Design', 'Arte', 'Berlin'],         intentions: ['Network', 'Paquera'], distance: '2.7 km', online: true,  verified: true,  stats: { events: 27, matches: 15, atParty: '3h'  } },
  { name: 'Renata',  age: 27, emoji: '🍷', color: '#f43f5e', bio: 'Sommelier e amante de jazz',        photo: renataPhoto,  interests: ['Vinho', 'Jazz', 'Gastronomia', 'Viagem'],     intentions: ['Network'],            distance: '3.3 km', online: false, verified: true,  stats: { events: 18, matches: 4,  atParty: '—'   } },
  { name: 'Camila',  age: 21, emoji: '🌻', color: '#fbbf24', bio: 'Universitária que ama um arraial',  photo: camilaPhoto,  interests: ['Sertanejo', 'Pagode', 'Festa', 'Praia'],      intentions: ['Paquera', 'Amizade'], distance: '6.2 km', online: true,  verified: true,  stats: { events: 11, matches: 10, atParty: '1h'  } },
  { name: 'Isa',     age: 22, emoji: '🎨', color: '#c084fc', bio: 'Ilustradora e nerd de K-pop',       photo: isaPhoto,     interests: ['Arte', 'Indie', 'K-pop', 'Café'],             intentions: ['Amizade'],            distance: '1.1 km', online: true,  verified: true,  stats: { events: 13, matches: 12, atParty: '2h'  } },
  { name: 'Duda',    age: 23, emoji: '🪩', color: '#ff6eb4', bio: 'Promoter dos melhores rolês',       photo: dudaPhoto,    interests: ['Funk', 'House', 'Eventos', 'Moda'],           intentions: ['Network', 'Paquera'], distance: '0.6 km', online: true,  verified: true,  stats: { events: 41, matches: 22, atParty: '5h'  } },
  { name: 'Nina',    age: 25, emoji: '🌹', color: '#fb7185', bio: 'Fotógrafa de viagem e surf',        photo: ninaPhoto,    interests: ['Fotografia', 'Reggae', 'Viagem', 'Surf'],     intentions: ['Amizade', 'Paquera'], distance: '4.4 km', online: false, verified: true,  stats: { events: 17, matches: 8,  atParty: '—'   } },
  { name: 'Bruno',   age: 28, emoji: '🎸', color: '#e8ff47', bio: 'Guitarrista e colecionador de vinil', photo: brunoPhoto, interests: ['Rock', 'Indie', 'Vinil', 'Bar'],            intentions: ['Amizade', 'Network'], distance: '2.9 km', online: true,  verified: true,  stats: { events: 33, matches: 9,  atParty: '2h'  } },
  { name: 'Thiago',  age: 24, emoji: '🕺', color: '#38bdf8', bio: 'Dançarino de funk e house',         photo: thiagoPhoto,  interests: ['Funk', 'House', 'Dança', 'Academia'],         intentions: ['Paquera', 'Amizade'], distance: '1.7 km', online: true,  verified: true,  stats: { events: 21, matches: 16, atParty: '3h'  } },
  { name: 'Gabriel', age: 27, emoji: '🎧', color: '#a3e635', bio: 'Produtor musical e DJ residente',   photo: gabrielPhoto, interests: ['Eletrônico', 'Techno', 'Estúdio', 'Vinil'],   intentions: ['Network'],            distance: '3.8 km', online: false, verified: true,  stats: { events: 38, matches: 11, atParty: '—'   } },
  { name: 'Rafael',  age: 26, emoji: '😎', color: '#fb923c', bio: 'Desenrolado, conhece todo mundo',   photo: rafaelPhoto,  interests: ['Sertanejo', 'Pagode', 'Bar', 'Futebol'],      intentions: ['Paquera'],            distance: '2.2 km', online: true,  verified: true,  stats: { events: 29, matches: 24, atParty: '4h'  } },
  { name: 'Lucas',   age: 23, emoji: '🎮', color: '#facc15', bio: 'O observador, chega na dele',       photo: lucasPhoto,   interests: ['Rock', 'Games', 'Indie', 'Cinema'],           intentions: ['Amizade'],            distance: '3.0 km', online: true,  verified: true,  stats: { events: 8,  matches: 3,  atParty: '1h'  } },
  { name: 'Vini',    age: 29, emoji: '🎺', color: '#f59e0b', bio: 'Saxofonista de jazz e bossa',       photo: viniPhoto,    interests: ['Jazz', 'Bossa', 'Sax', 'Vinho'],              intentions: ['Network', 'Amizade'], distance: '1.5 km', online: false, verified: true,  stats: { events: 26, matches: 5,  atParty: '—'   } },
  { name: 'Pedro',   age: 25, emoji: '🧢', color: '#4ade80', bio: 'Skatista e grafiteiro',             photo: pedroPhoto,   interests: ['Hip-Hop', 'Reggae', 'Skate', 'Arte'],         intentions: ['Amizade', 'Paquera'], distance: '2.6 km', online: true,  verified: true,  stats: { events: 15, matches: 7,  atParty: '2h'  } },
  { name: 'Diego',   age: 26, emoji: '🎙️', color: '#f472b6', bio: 'MC de batalha e freestyle',         photo: diegoPhoto,   interests: ['Hip-Hop', 'Funk', 'Rima', 'Street'],          intentions: ['Network', 'Paquera'], distance: '4.7 km', online: false, verified: true,  stats: { events: 20, matches: 13, atParty: '—'   } },
  { name: 'Theo',    age: 24, emoji: '📷', color: '#38bdf8', bio: 'Fotógrafo oficial dos eventos',     photo: theoPhoto,    interests: ['Fotografia', 'Indie', 'Café', 'Viagem'],      intentions: ['Amizade', 'Network'], distance: '1.3 km', online: true,  verified: true,  stats: { events: 35, matches: 6,  atParty: '3h'  } },
];

/** Busca rápida por nome (case-insensitive), usada nas rotas /chat/:name, /profile/:name, /match/:name. */
export function findPerson(name?: string): Person | undefined {
  if (!name) return undefined;
  return people.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
