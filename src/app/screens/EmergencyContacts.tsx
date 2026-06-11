import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { ConfirmModal } from '../components/ConfirmModal';
import { emergencyContacts as initialContacts, type EmergencyContact as Contact } from '../data/emergencyContacts';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function EmergencyContacts() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [deleteTarget, setDeleteTarget] = useState<Contact | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
    setDeleteTarget(null);
  };

  const addContact = () => {
    if (!newName || !newPhone) return;
    const colors = ['#38bdf8', '#e879f9', '#facc15', '#fb923c'];
    setContacts((prev) => [
      ...prev,
      {
        id: Date.now(),
        emoji: '👤',
        name: newName,
        phone: newPhone,
        color: colors[prev.length % colors.length],
      },
    ]);
    setNewName('');
    setNewPhone('');
    setShowAddForm(false);
  };

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div
        className="flex items-center border-b"
        style={{ padding: '14px 18px', borderColor: '#1a1a1a', gap: 12 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center border"
          style={{ width: 36, height: 36, backgroundColor: '#161616', borderColor: '#242424', borderRadius: 10 }}
        >
          <ArrowLeft size={18} className="text-[#f5f5f5]" />
        </button>
        <h1
          className="font-bold text-[#f5f5f5] flex-1"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18 }}
        >
          Contatos de Emergência
        </h1>
        <button
          className="font-bold"
          onClick={() => navigate(-1)}
          style={{ color: '#e8ff47', fontSize: 13, fontFamily: "'DM Mono', monospace" }}
        >
          Salvar
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: 'none' }}>
        {/* Info banner */}
        <div
          className="border"
          style={{
            margin: 16,
            backgroundColor: hexToRgba('#ff3b3b', 0.06),
            borderColor: hexToRgba('#ff3b3b', 0.3),
            borderRadius: 12,
            padding: 14,
          }}
        >
          <p
            style={{
              color: hexToRgba('#ff3b3b', 0.8),
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              lineHeight: 1.6,
            }}
          >
            🛡 Estes contatos serão notificados automaticamente se você ativar o SOS.
          </p>
        </div>

        {/* Section label */}
        <div style={{ padding: '4px 18px 12px' }}>
          <p
            className="uppercase text-[#888]"
            style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
          >
            SEUS CONTATOS
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center border"
              style={{
                backgroundColor: '#161616',
                borderColor: '#242424',
                borderRadius: 14,
                padding: 14,
                gap: 12,
              }}
            >
              {/* Avatar */}
              <div
                className="flex items-center justify-center border rounded-full flex-shrink-0"
                style={{
                  width: 44, height: 44,
                  backgroundColor: hexToRgba(contact.color, 0.15),
                  borderColor: contact.color,
                  fontSize: 22,
                }}
              >
                {contact.emoji}
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-bold text-white"
                  style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}
                >
                  {contact.name}
                </p>
                <p className="text-[#555]" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                  {contact.phone}
                </p>
              </div>
              {/* Actions */}
              <div className="flex items-center" style={{ gap: 10 }}>
                <button className="text-[#555]" style={{ fontSize: 16 }}>✎</button>
                <button
                  onClick={() => setDeleteTarget(contact)}
                  style={{ color: hexToRgba('#ff3b3b', 0.6), fontSize: 16 }}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Add contact button */}
          {!showAddForm ? (
            <button
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setShowAddForm(true)}
              style={{
                border: '1.5px dashed #333',
                borderRadius: 14,
                padding: 16,
                backgroundColor: 'transparent',
              }}
            >
              <span className="text-[#555]" style={{ fontSize: 20 }}>+</span>
              <span className="text-[#555]" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                Adicionar contato
              </span>
            </button>
          ) : (
            /* Inline add form */
            <div
              className="border"
              style={{
                backgroundColor: '#161616',
                borderColor: '#e8ff47',
                borderRadius: 14,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nome do contato"
                className="w-full border outline-none"
                style={{
                  backgroundColor: '#0f0f0f',
                  borderColor: '#242424',
                  borderRadius: 10,
                  padding: '12px 14px',
                  color: '#f5f5f5',
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                }}
              />
              <input
                type="tel"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="Número de telefone"
                className="w-full border outline-none"
                style={{
                  backgroundColor: '#0f0f0f',
                  borderColor: '#242424',
                  borderRadius: 10,
                  padding: '12px 14px',
                  color: '#f5f5f5',
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                }}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => { setShowAddForm(false); setNewName(''); setNewPhone(''); }}
                  className="flex-1 border"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#242424',
                    color: '#888',
                    borderRadius: 10,
                    padding: '10px 0',
                    fontSize: 13,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={addContact}
                  className="flex-1 font-bold"
                  style={{
                    backgroundColor: '#e8ff47',
                    color: '#080808',
                    borderRadius: 10,
                    padding: '10px 0',
                    fontSize: 13,
                    fontFamily: "'DM Mono', monospace",
                    border: 'none',
                  }}
                >
                  Adicionar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed save button */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t"
        style={{ backgroundColor: '#080808', borderColor: '#242424', padding: '16px 20px' }}
      >
        <button
          className="w-full font-bold"
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#e8ff47',
            color: '#080808',
            borderRadius: 14,
            height: 52,
            fontSize: 14,
            fontFamily: "'Clash Display', sans-serif",
            border: 'none',
          }}
        >
          Salvar contatos
        </button>
      </div>

      {deleteTarget && (
        <ConfirmModal
          icon="🗑"
          title="Remover contato?"
          message={`Tem certeza que deseja remover ${deleteTarget.name} dos seus contatos de emergência?`}
          confirmLabel="Remover"
          confirmDanger
          onConfirm={() => deleteContact(deleteTarget.id)}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      <HomeIndicator />
    </div>
  );
}
