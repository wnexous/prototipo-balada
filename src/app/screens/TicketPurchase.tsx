import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ticketLots as lotes, paymentMethods as payments } from '../data/tickets';

export function TicketPurchase() {
  const navigate = useNavigate();
  const [selectedLote, setSelectedLote] = useState('lote2');
  const [selectedPayment, setSelectedPayment] = useState('pix');

  const selectedLoteData = lotes.find(l => l.id === selectedLote);
  const serviceFee = selectedLoteData ? selectedLoteData.price * 0.1 : 0;
  const total = selectedLoteData ? selectedLoteData.price + serviceFee : 0;

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="border-b border-[var(--border-subtle)] px-6 py-4">
        <div className="flex items-center gap-4 mb-2">
          <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
            <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate('/event/1')} />
          </Card>
          <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Comprar Ingresso
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)] ml-[52px]">Festa do Rock 2026</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 pb-32">
        {/* Event recap card */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-[14px] flex gap-3">
          <div className="w-[60px] h-[60px] bg-[var(--elevated)] rounded-[10px] flex items-center justify-center flex-shrink-0">
            <span className="text-[var(--text-tertiary)] text-xl">✕</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-1">
            <div className="text-sm font-bold text-[var(--text-primary)]">Festa do Rock 2026</div>
            <div className="text-xs text-[var(--text-secondary)]">Hoje, 22h</div>
            <div className="text-xs text-[var(--text-secondary)]">Bar XV, Curitiba</div>
          </div>
        </div>

        {/* Choose lote section */}
        <div className="space-y-3">
          <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
            ESCOLHA SEU LOTE
          </h3>

          <div className="space-y-3">
            {lotes.map((lote) => {
              const isSelected = selectedLote === lote.id;
              return (
                <button
                  key={lote.id}
                  onClick={() => setSelectedLote(lote.id)}
                  className={`w-full border rounded-[14px] p-4 flex items-center gap-4 transition-colors ${
                    isSelected
                      ? 'border-[var(--accent)] bg-[#e8ff4708]'
                      : 'border-[var(--border)] bg-[var(--card)]'
                  }`}
                >
                  {/* Radio button */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-[var(--accent)]' : 'border-[var(--border)]'
                  }`}>
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold text-[var(--text-primary)]">{lote.name}</div>
                    <div className="text-[11px] text-[var(--text-secondary)]">{lote.availability}</div>
                  </div>

                  {/* Price */}
                  <div className={`text-lg font-bold ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
                    R${lote.price}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment method section */}
        <div className="space-y-3">
          <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
            FORMA DE PAGAMENTO
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {payments.map((payment) => {
              const isSelected = selectedPayment === payment.id;
              return (
                <button
                  key={payment.id}
                  onClick={() => setSelectedPayment(payment.id)}
                  className={`h-[110px] border rounded-[14px] flex flex-col items-center justify-center gap-3 transition-colors ${
                    isSelected
                      ? 'border-[var(--accent)] bg-[#e8ff4705]'
                      : 'border-[var(--border)] bg-[var(--card)]'
                  }`}
                >
                  <span className="text-3xl">{payment.icon}</span>
                  <span className="text-[11px] text-[var(--text-secondary)]">{payment.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--text-secondary)]">
              {selectedLoteData?.name}
            </span>
            <span className="text-sm text-[var(--text-primary)]">
              R${selectedLoteData?.price}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--text-secondary)]">Taxa de serviço</span>
            <span className="text-sm text-[var(--text-secondary)]">R${serviceFee.toFixed(0)}</span>
          </div>
          <div className="h-[1px] bg-[var(--border)]" />
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-[var(--text-primary)]">Total</span>
            <span className="text-lg font-bold text-[var(--accent)]">R${total.toFixed(0)}</span>
          </div>
        </div>
      </div>

      {/* Fixed bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--background)] border-t border-[var(--border)] px-6 py-4 space-y-3">
        <Button fullWidth onClick={() => navigate('/my-ticket')}>Finalizar compra</Button>
        <p className="text-[11px] text-[#555555] text-center">Pagamento 100% seguro 🔒</p>
      </div>

      <HomeIndicator />
    </div>
  );
}
