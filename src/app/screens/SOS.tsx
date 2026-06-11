import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { BottomNav } from '../components/BottomNav';
import { Card } from '../components/Card';
import { emergencyContacts as contacts } from '../data/emergencyContacts';

export function SOS() {
  const navigate = useNavigate();
  const [sosActive, setSosActive] = useState(false);

  const alertCards = [
    {
      icon: '📍',
      text: 'Localização atual enviada',
      status: sosActive ? 'Ativo' : 'Inativo'
    },
    {
      icon: '👥',
      text: 'Contatos notificados',
      detail: contacts.slice(0, 3).map((c) => c.name).join(', ')
    },
    {
      icon: '🛡',
      text: 'Equipe de moderação alertada',
      detail: sosActive ? 'Respondendo em 2min' : 'Aguardando'
    },
    {
      icon: '⏱',
      text: 'Rastreamento ativo por',
      detail: sosActive ? '23h 47min' : '—'
    }
  ];

  const handleSOSToggle = () => {
    setSosActive(!sosActive);
  };

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      {/* Red stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--danger)]" />

      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate(-1)} />
        </Card>
        <h2 className="text-lg text-[var(--danger)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          EMERGÊNCIA
        </h2>
        {sosActive && (
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-[var(--danger)]">🔔 Alerta ativo</span>
          </div>
        )}
        {!sosActive && <div className="w-9" />}
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 pb-28">
        {/* Alert info cards */}
        <div className="space-y-3">
          {alertCards.map((card, index) => (
            <div
              key={index}
              className="bg-[var(--card)] border border-[var(--border-subtle)] rounded-[14px] p-[14px] flex items-center gap-3"
            >
              <span className="text-xl">{card.icon}</span>
              <div className="flex-1">
                <div className="text-sm text-[var(--text-primary)]">{card.text}</div>
                {card.detail && (
                  <div className="text-[11px] text-[var(--text-secondary)] mt-1">{card.detail}</div>
                )}
              </div>
              {card.status && (
                <div className={`px-3 py-1 rounded-full text-[11px] ${
                  sosActive
                    ? 'bg-[#3bff8a15] text-[var(--success)]'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)]'
                }`}>
                  {card.status}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SOS Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleSOSToggle}
            className={`w-[130px] h-[130px] rounded-full flex items-center justify-center transition-all ${
              sosActive
                ? 'bg-[var(--danger)] border-none'
                : 'bg-[#ff3b3b12] border-[3px] border-[var(--danger)]'
            }`}
            style={sosActive ? {
              boxShadow: '0 0 0 16px rgba(255,59,59,0.15), 0 0 0 32px rgba(255,59,59,0.07)'
            } : {}}
          >
            <span
              className={`text-[32px] ${sosActive ? 'text-white' : 'text-[var(--danger)]'}`}
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
            >
              {sosActive ? 'ATIVO' : 'SOS'}
            </span>
          </button>

          {/* Alert banner */}
          {sosActive && (
            <div className="bg-[#ff3b3b15] border border-[var(--danger)] rounded-[14px] p-[14px] mx-4">
              <p className="text-[13px] text-[var(--danger)] text-center">
                🔴 SOS ativado! Equipe notificada. Ajuda a caminho.
              </p>
            </div>
          )}
        </div>

        {/* Contacts section */}
        <div className="space-y-3">
          <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] text-center">
            CONTATOS DE EMERGÊNCIA
          </h3>
          <div className="flex justify-center gap-2">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className="px-3 py-2 rounded-full border flex items-center gap-2"
                style={{
                  borderColor: contact.color,
                  backgroundColor: `${contact.color}15`
                }}
              >
                <span>{contact.emoji}</span>
                <span className="text-xs" style={{ color: contact.color }}>
                  {contact.name}
                </span>
              </div>
            ))}
          </div>
          <button className="text-[13px] text-[var(--accent)] underline text-center w-full">
            + Editar contatos
          </button>
        </div>
      </div>

      <BottomNav />
      <HomeIndicator />
    </div>
  );
}
