// Notificações — 100% dado mocado.
export type NotifType = 'match' | 'event' | 'system';

export interface NotificationItem {
  id: number;
  type: NotifType;
  icon: string;
  iconColor: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  route?: string;
}

export const allNotifications: NotificationItem[] = [
  { id: 1,  type: 'match',  icon: '🌙', iconColor: '#c084fc', title: 'Julia deu match com você! ⭐',       body: 'Vocês podem conversar agora antes de se encontrar na balada.',         time: 'agora',       unread: true,  route: '/match/julia' },
  { id: 2,  type: 'match',  icon: '⚡', iconColor: '#facc15', title: 'Carol também curtiu você!',          body: 'Você tem um novo match. Diz oi!',                                      time: '2 min atrás', unread: true,  route: '/match/carol' },
  { id: 3,  type: 'match',  icon: '🪩', iconColor: '#ff6eb4', title: 'Duda quer te ver no rolê',           body: 'Ela te marcou na lista do Deep House Rooftop. Bora?',                  time: '12 min atrás',unread: true,  route: '/chat/duda' },
  { id: 4,  type: 'event',  icon: '🎸', iconColor: '#e8ff47', title: 'Festa do Rock começa em 1 hora',     body: 'Bar XV abre às 22h. Seu ingresso está válido e pronto para uso.',      time: '58 min atrás',unread: false, route: '/my-ticket' },
  { id: 5,  type: 'event',  icon: '🌸', iconColor: '#ff6eb4', title: 'K-pop Universe está quase esgotado', body: 'Restam apenas 12 ingressos. Garanta o seu agora!',                     time: '1h atrás',    unread: false, route: '/event/13' },
  { id: 6,  type: 'event',  icon: '💜', iconColor: '#a78bfa', title: 'BTS Night — Tribute confirmado',     body: '234 pessoas já confirmaram presença na Arena Neon hoje.',              time: '1h atrás',    unread: false, route: '/event/14' },
  { id: 7,  type: 'match',  icon: '🌿', iconColor: '#4ade80', title: 'Ana está online no evento',          body: 'Ela confirmou presença na Festa do Rock. Que tal dizer oi?',           time: '2h atrás',    unread: false, route: '/chat/ana' },
  { id: 8,  type: 'match',  icon: '🕺', iconColor: '#38bdf8', title: 'Thiago curtiu seu perfil',           body: 'Curta de volta para liberar a conversa.',                              time: '2h atrás',    unread: false, route: '/who-is-here' },
  { id: 9,  type: 'event',  icon: '🎷', iconColor: '#22d3ee', title: 'Bossa na Varanda perto de você',     body: 'Café Lua, a 1.1 km. Começa às 20h.',                                   time: '4h atrás',    unread: false, route: '/event/24' },
  { id: 10, type: 'system', icon: '✓',  iconColor: '#3bff8a', title: 'Seu perfil foi verificado ✓',        body: 'Agora você pode interagir com todos os usuários da plataforma.',       time: '3h atrás',    unread: false },
  { id: 11, type: 'system', icon: '🔒', iconColor: '#38bdf8', title: 'Novo login detectado',               body: 'Acesso realizado em Curitiba, PR. Se não foi você, altere a senha.',   time: 'Ontem',       unread: false, route: '/settings' },
  { id: 12, type: 'system', icon: '🛡', iconColor: '#e8ff47', title: 'Contatos de emergência atualizados', body: 'Seus contatos de SOS foram salvos com sucesso.',                       time: 'Ontem',       unread: false, route: '/emergency-contacts' },
];

export const notificationFilters = ['Todas', 'Matches', 'Eventos', 'Sistema'] as const;

export const notificationFilterMap: Record<string, NotifType[]> = {
  Todas: ['match', 'event', 'system'],
  Matches: ['match'],
  Eventos: ['event'],
  Sistema: ['system'],
};
