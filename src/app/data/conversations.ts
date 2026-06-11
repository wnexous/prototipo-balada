// Conversas/mensagens — 100% dado mocado.
// Usado por Matches (lista de conversas) e Chat (respostas automáticas da simulação).

export interface ConversationSeed {
  personName: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
  typing?: boolean;
  noMessages?: boolean;
}

export const conversations: ConversationSeed[] = [
  { personName: 'Julia',  lastMessage: 'Diga oi! 👋',                          timestamp: 'agora',     unread: true, noMessages: true },
  { personName: 'Carol',  lastMessage: 'Diga oi! 👋',                          timestamp: 'agora',     unread: true, noMessages: true },
  { personName: 'Ana',    lastMessage: 'digitando...',                         timestamp: 'agora',     typing: true },
  { personName: 'Bia',    lastMessage: 'vem dançar comigo!! 🪩',               timestamp: '2 min',     unread: true },
  { personName: 'Helena', lastMessage: 'tô perto da pista principal',          timestamp: '8 min' },
  { personName: 'Duda',   lastMessage: 'coloquei seu nome na lista 😉',        timestamp: '21 min',    unread: true },
  { personName: 'Sofia',  lastMessage: 'amei te conhecer ontem!',              timestamp: '1h' },
  { personName: 'Thiago', lastMessage: 'bora marcar o próximo rolê?',          timestamp: '3h' },
  { personName: 'Pedro',  lastMessage: 'valeu pela indicação do som 🎧',       timestamp: 'Ontem' },
  { personName: 'Isa',    lastMessage: 'foto ficou linda, obrigada ✨',        timestamp: 'Ontem' },
];

export const autoReplies = [
  'Oi!! Que bom que você falou 😊',
  'Tô adorando essa festa hein',
  'Você tá em qual parte do evento?',
  'Que música tá tocando aí onde você tá?',
  'Rs que coincidência a gente dar match aqui',
  'Você veio com amigos?',
  'Haha sim, essa festa tá boa demais',
  'Vem me achar perto do bar 😄',
  'Combinado! Te vejo em breve ✨',
  'Que legal! Eu também curto muito esse estilo',
  'Sério?? Que mundo pequeno haha',
  'Tô passando um perrengue aqui achando você',
  'Manda uma foto do seu look pra eu te achar',
  'Já tô indo aí!',
  'Você é daqui de Curitiba?',
];

export const quickReplies = [
  '👋 Oi, tudo bem?',
  '🎵 Que música você tá curtindo?',
  '📍 Você tá onde no evento?',
  '☕ Quer se encontrar?',
];
