import { useNavigate, useParams } from 'react-router-dom';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { ConfirmModal } from '../components/ConfirmModal';
import { people } from '../data/people';
import { useState } from 'react';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const intentionLabels: Record<string, string> = {
  Paquera: '💘 Paquera',
  Amizade: '🤝 Amizade',
  Network: '💼 Network',
};

export function PersonProfile() {
  const navigate = useNavigate();
  const { personName } = useParams<{ personName: string }>();
  const person = people.find((p) => p.name.toLowerCase() === personName?.toLowerCase());
  const [showBlockModal, setShowBlockModal] = useState(false);

  if (!person) {
    navigate('/who-is-here');
    return null;
  }

  const interests = person.interests;

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Scrollable */}
      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: 'none' }}>

        {/* Hero area */}
        <div className="relative overflow-hidden" style={{ height: 220 }}>
          {/* BG color tint */}
          <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a' }} />
          <div className="absolute inset-0" style={{ backgroundColor: hexToRgba(person.color, 0.08) }} />
          {/* Decorative circles */}
          <div
            className="absolute rounded-full"
            style={{
              width: 220, height: 220,
              backgroundColor: hexToRgba(person.color, 0.05),
              top: -60, left: -60,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 160, height: 160,
              backgroundColor: hexToRgba(person.color, 0.05),
              top: 40, right: -40,
            }}
          />

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute flex items-center justify-center border"
            style={{
              top: 14, left: 14, width: 36, height: 36,
              backgroundColor: 'rgba(8,8,8,0.75)',
              backdropFilter: 'blur(8px)',
              borderColor: '#333',
              borderRadius: 10,
            }}
          >
            <span className="text-white" style={{ fontSize: 16 }}>←</span>
          </button>

          {/* Report button */}
          <button
            className="absolute"
            style={{
              top: 14, right: 14,
              backgroundColor: 'rgba(8,8,8,0.7)',
              border: `1px solid ${hexToRgba('#ff3b3b', 0.3)}`,
              borderRadius: 999,
              padding: '6px 12px',
              color: hexToRgba('#ff3b3b', 0.6),
              fontSize: 11,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            ⊙ Denunciar
          </button>

          {/* Avatar at bottom center */}
          <div
            className="absolute left-1/2"
            style={{ bottom: -36, transform: 'translateX(-50%)' }}
          >
            <div
              className="flex items-center justify-center rounded-full relative"
              style={{
                width: 96, height: 96,
                backgroundColor: hexToRgba(person.color, 0.15),
                border: `3px solid ${person.color}`,
                boxShadow: `0 0 0 6px ${hexToRgba(person.color, 0.08)}`,
                fontSize: 42,
              }}
            >
              <img src={person.photo} alt={person.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              {/* Verified badge */}
              <div
                className="absolute flex items-center justify-center rounded-full border-2 border-[#080808]"
                style={{
                  width: 22, height: 22,
                  bottom: 0, right: 0,
                  backgroundColor: '#e8ff47',
                  color: '#080808',
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                ✓
              </div>
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div
          className="flex flex-col items-center text-center"
          style={{ padding: '52px 20px 0', gap: 8 }}
        >
          <h1
            className="font-bold text-[#f5f5f5]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 24, fontWeight: 800 }}
          >
            {person.name}, {person.age}
          </h1>
          <p style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
            ✓ Verificado
          </p>
          <p
            className="text-[#888] text-center"
            style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", lineHeight: 1.7, maxWidth: 260 }}
          >
            {person.bio}
          </p>

          {/* Intention pills */}
          <div className="flex" style={{ gap: 8, marginTop: 4 }}>
            {person.intentions.map((it) => intentionLabels[it]).map((label) => (
              <div
                key={label}
                className="border font-bold"
                style={{
                  backgroundColor: hexToRgba(person.color, 0.12),
                  borderColor: person.color,
                  color: person.color,
                  fontSize: 12,
                  fontFamily: "'DM Mono', monospace",
                  borderRadius: 999,
                  padding: '6px 14px',
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Interests */}
          <div className="flex flex-wrap justify-center" style={{ gap: 6, marginTop: 4 }}>
            {interests.map((interest) => (
              <div
                key={interest}
                className="border"
                style={{
                  backgroundColor: '#161616',
                  borderColor: '#242424',
                  color: '#888',
                  fontSize: 12,
                  fontFamily: "'DM Mono', monospace",
                  borderRadius: 999,
                  padding: '5px 12px',
                }}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 border"
          style={{
            margin: '20px 16px 0',
            backgroundColor: '#161616',
            borderColor: '#242424',
            borderRadius: 14,
          }}
        >
          {[
            { value: person.stats.events, label: 'Eventos' },
            { value: person.stats.matches, label: 'Matches' },
            { value: person.stats.atParty, label: 'Na balada' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{ padding: '14px 0', borderRight: i < 2 ? '1px solid #242424' : 'none' }}
            >
              <div
                className="font-bold"
                style={{ color: person.color, fontSize: 18, fontFamily: "'Clash Display', sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="uppercase text-[#888]"
                style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em', marginTop: 3 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mutual section */}
        <div style={{ padding: '20px 16px 0' }}>
          <p className="text-[#888] mb-3" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
            Também vão estar lá
          </p>
          <div className="flex items-center">
            {people.filter((p) => p.name !== person.name).slice(0, 3).map((p, i) => (
              <div
                key={p.name}
                className="rounded-full flex items-center justify-center border-2"
                style={{
                  width: 32, height: 32,
                  backgroundColor: hexToRgba(p.color, 0.2),
                  borderColor: '#080808',
                  marginLeft: i > 0 ? -8 : 0,
                  fontSize: 16, zIndex: 3 - i,
                }}
              >
                <img src={p.photo} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
            <span className="text-[#888] ml-2" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
              + 2 em comum
            </span>
          </div>
        </div>
      </div>

      {/* Fixed action buttons */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t"
        style={{ backgroundColor: '#080808', borderColor: '#242424', padding: '16px 16px 20px' }}
      >
        <div className="flex" style={{ gap: 12 }}>
          <button
            className="flex-1 font-bold"
            onClick={() => navigate(`/match/${person.name.toLowerCase()}`)}
            style={{
              backgroundColor: person.color,
              color: '#080808',
              borderRadius: 14,
              height: 50,
              fontSize: 14,
              fontFamily: "'Clash Display', sans-serif",
              border: 'none',
            }}
          >
            ♡ Curtir
          </button>
          <button
            className="flex-1 border font-bold"
            onClick={() => setShowBlockModal(true)}
            style={{
              backgroundColor: hexToRgba('#ff3b3b', 0.08),
              borderColor: hexToRgba('#ff3b3b', 0.3),
              color: '#ff3b3b',
              borderRadius: 14,
              height: 50,
              fontSize: 14,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            🚫 Bloquear
          </button>
        </div>
      </div>

      {showBlockModal && (
        <ConfirmModal
          icon="🚫"
          title={`Bloquear ${person.name}?`}
          message={`${person.name} não poderá mais ver seu perfil ou enviar mensagens.`}
          confirmLabel="Bloquear"
          confirmDanger
          onConfirm={() => { setShowBlockModal(false); navigate(-1); }}
          onCancel={() => setShowBlockModal(false)}
        />
      )}

      <HomeIndicator />
    </div>
  );
}
