// Ingressos e pagamento — 100% dado mocado.
export interface TicketLot {
  id: string;
  name: string;
  availability: string;
  price: number;
}

export const ticketLots: TicketLot[] = [
  { id: 'lote1', name: '1° Lote',  availability: 'Últimos 8 disponíveis', price: 40 },
  { id: 'lote2', name: '2° Lote',  availability: 'Mais popular',          price: 60 },
  { id: 'lote3', name: 'Pista VIP', availability: 'Acesso exclusivo',     price: 180 },
];

export const paymentMethods = [
  { id: 'pix',    icon: '⚡', label: 'PIX' },
  { id: 'card',   icon: '💳', label: 'Cartão' },
  { id: 'crypto', icon: '₿', label: 'Crypto' },
];
