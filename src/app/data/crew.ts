// Galera do Sextou (Crew) — 100% dado mocado.
// Os membros referenciam pessoas reais de people.ts (resolvidos por nome na tela).

export interface CrewMember {
  personName: string;
  status: string;
  active: boolean;
}

export const crewMembers: CrewMember[] = [
  { personName: 'Ana',    status: 'No bar',            active: true  },
  { personName: 'Pedro',  status: 'Pista principal',   active: true  },
  { personName: 'Thiago', status: 'Acabou de chegar',  active: true  },
  { personName: 'Carol',  status: 'Tirando fotos',     active: true  },
  { personName: 'Duda',   status: 'No camarote',       active: true  },
  { personName: 'Bruno',  status: 'A caminho',         active: false },
];

// Marcadores do mini-mapa "ao vivo" (posição em % da área).
export interface CrewMapMarker {
  label: string;
  top: string;
  left: string;
  color: string;
  isYou?: boolean;
}

export const crewMapMarkers: CrewMapMarker[] = [
  { label: 'Você',  top: '52%', left: '50%', color: '#e8ff47', isYou: true },
  { label: 'Pedro', top: '22%', left: '28%', color: '#4ade80' },
  { label: 'Ana',   top: '34%', left: '74%', color: '#4ade80' },
  { label: 'Carol', top: '70%', left: '34%', color: '#facc15' },
  { label: 'Duda',  top: '64%', left: '78%', color: '#ff6eb4' },
];
