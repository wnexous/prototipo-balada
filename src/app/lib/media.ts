// Capas temáticas de evento — fotos reais embutidas localmente (src/assets/covers),
// inlinadas como base64 no build single-file. Funciona 100% offline / via file://.
// Cada gênero tem 2 variantes; coverFor() escolhe de forma estável pelo seed.
import rock1 from '../../assets/covers/rock-1.jpg';
import rock2 from '../../assets/covers/rock-2.jpg';
import techno1 from '../../assets/covers/techno-1.jpg';
import techno2 from '../../assets/covers/techno-2.jpg';
import funk1 from '../../assets/covers/funk-1.jpg';
import funk2 from '../../assets/covers/funk-2.jpg';
import house1 from '../../assets/covers/house-1.jpg';
import house2 from '../../assets/covers/house-2.jpg';
import pagode1 from '../../assets/covers/pagode-1.jpg';
import pagode2 from '../../assets/covers/pagode-2.jpg';
import sertanejo1 from '../../assets/covers/sertanejo-1.jpg';
import sertanejo2 from '../../assets/covers/sertanejo-2.jpg';
import hiphop1 from '../../assets/covers/hip-hop-1.jpg';
import hiphop2 from '../../assets/covers/hip-hop-2.jpg';
import jazz1 from '../../assets/covers/jazz-1.jpg';
import jazz2 from '../../assets/covers/jazz-2.jpg';
import eletronico1 from '../../assets/covers/eletronico-1.jpg';
import eletronico2 from '../../assets/covers/eletronico-2.jpg';
import axe1 from '../../assets/covers/axe-1.jpg';
import axe2 from '../../assets/covers/axe-2.jpg';
import indie1 from '../../assets/covers/indie-1.jpg';
import indie2 from '../../assets/covers/indie-2.jpg';
import reggae1 from '../../assets/covers/reggae-1.jpg';
import reggae2 from '../../assets/covers/reggae-2.jpg';
import kpop1 from '../../assets/covers/k-pop-1.jpg';
import kpop2 from '../../assets/covers/k-pop-2.jpg';

const coversByGenre: Record<string, [string, string]> = {
  Rock: [rock1, rock2],
  Techno: [techno1, techno2],
  Funk: [funk1, funk2],
  House: [house1, house2],
  Pagode: [pagode1, pagode2],
  Sertanejo: [sertanejo1, sertanejo2],
  'Hip-Hop': [hiphop1, hiphop2],
  Jazz: [jazz1, jazz2],
  'Eletrônico': [eletronico1, eletronico2],
  'Axé': [axe1, axe2],
  Indie: [indie1, indie2],
  Reggae: [reggae1, reggae2],
  'K-pop': [kpop1, kpop2],
};

export function coverFor(genre: string, seed: string | number): string {
  const variants = coversByGenre[genre] ?? coversByGenre.House;
  const lock = typeof seed === 'number' ? seed : hashSeed(seed);
  return variants[lock % variants.length];
}

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000;
  return h;
}
