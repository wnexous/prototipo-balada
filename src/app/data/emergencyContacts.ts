// Contatos de emergência (diferencial de segurança) — 100% dado mocado.
// Compartilhado por EmergencyContacts (CRUD visual) e SOS (lista notificada).

export interface EmergencyContact {
  id: number;
  emoji: string;
  name: string;
  phone: string;
  color: string;
}

export const emergencyContacts: EmergencyContact[] = [
  { id: 1, emoji: '👩', name: 'Mãe',     phone: '+55 41 99999-0001', color: '#f97316' },
  { id: 2, emoji: '🌿', name: 'Ana',     phone: '+55 41 99999-0002', color: '#4ade80' },
  { id: 3, emoji: '✨', name: 'Gabi',    phone: '+55 41 99999-0003', color: '#f472b6' },
  { id: 4, emoji: '🎸', name: 'Bruno',   phone: '+55 41 99999-0004', color: '#e8ff47' },
  { id: 5, emoji: '🚨', name: 'Polícia', phone: '190',               color: '#ff3b3b' },
];
