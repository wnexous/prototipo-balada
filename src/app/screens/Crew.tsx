import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { BottomNav } from '../components/BottomNav';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { findPerson } from '../data/people';
import { crewMembers, crewMapMarkers } from '../data/crew';

export function Crew() {
  const navigate = useNavigate();

  const members = crewMembers.map((m) => ({
    ...m,
    name: m.personName,
    person: findPerson(m.personName)!,
  }));
  const activeCount = members.filter((m) => m.active).length;

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate('/home')} />
        </Card>
        <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Galera do Sextou
        </h2>
        <Settings size={20} className="text-[#555555]" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 pb-28">
        {/* Live map panel */}
        <div className="bg-[#0f1a0f] rounded-[18px] overflow-hidden h-[150px] relative">
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #1a2a1a 1px, transparent 1px),
              linear-gradient(to bottom, #1a2a1a 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />

          {/* Position markers */}
          {crewMapMarkers.map((marker) => (
            <div
              key={marker.label}
              className="absolute flex flex-col items-center gap-1"
              style={{ top: marker.top, left: marker.left, transform: 'translate(-50%, -50%)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: marker.color,
                  boxShadow: marker.isYou ? `0 0 20px ${marker.color}99` : 'none',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-[#0f1a0f]" />
              </div>
              <span className="text-[9px] text-[var(--text-secondary)]">{marker.label}</span>
            </div>
          ))}

          {/* Updated label */}
          <div className="absolute bottom-3 right-3">
            <span className="text-[10px] text-[#555555]">Atualizado agora</span>
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
              MEMBROS
            </h3>
            <span className="text-[10px] text-[var(--accent)]">{activeCount} ativos</span>
          </div>

          {/* Member list */}
          <div className="space-y-0">
            {members.map((member, index) => (
              <div
                key={member.name}
                className="py-[14px] border-b border-[var(--border-subtle)] flex items-center gap-[14px]"
              >
                {/* Avatar */}
                <div className={member.active ? 'relative' : ''}>
                  {member.person ? (
                    <Avatar
                      emoji={member.person.emoji}
                      color={member.person.color}
                      photo={member.person.photo}
                      name={member.person.name}
                      size="md"
                    />
                  ) : (
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: member.active ? member.color : '#242424',
                        backgroundColor: member.active ? `${member.color}1f` : 'transparent',
                        boxShadow: member.active ? `0 0 12px ${member.color}40` : 'none'
                      }}
                    >
                      <span className="text-lg">{member.emoji}</span>
                    </div>
                  )}
                  {member.active && member.person && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: `0 0 12px ${member.person.color}40` }}
                    />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="text-sm font-bold text-[var(--text-primary)] mb-1">
                    {member.name}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${member.active ? 'bg-[var(--success)]' : 'bg-[var(--text-secondary)]'}`} />
                    <span className={`text-xs ${member.active ? 'text-[var(--success)]' : 'text-[var(--text-secondary)]'}`}>
                      {member.status}
                    </span>
                  </div>
                </div>

                {/* Chat button */}
                <button
                  onClick={() => {
                    if (member.person) {
                      navigate(`/chat/${member.person.name.toLowerCase()}`);
                    } else {
                      navigate('/messages');
                    }
                  }}
                  className="px-4 py-2 rounded-[10px] bg-[var(--card)] border border-[var(--border)] text-xs text-[var(--text-primary)] font-bold hover:border-[var(--accent)] transition-colors"
                >
                  Chat
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 pt-2">
          <Button fullWidth onClick={() => navigate('/messages')}>
            Conversar no grupo
          </Button>
          <Button variant="secondary" fullWidth onClick={() => navigate('/map')}>
            Ver no mapa
          </Button>
        </div>
      </div>

      <BottomNav />
      <HomeIndicator />
    </div>
  );
}
