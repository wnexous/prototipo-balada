import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Card } from '../components/Card';
import { people, Person, Intention } from '../data/people';
import { useBack } from '../lib/nav';

export function WhoIsHere() {
  const navigate = useNavigate();
  const goBack = useBack('/home');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [likedPeople, setLikedPeople] = useState<Set<string>>(new Set());

  const filters = ['Todos', 'Paquera', 'Amizade', 'Network'];

  const visiblePeople =
    activeFilter === 'Todos'
      ? people
      : people.filter((p) => p.intentions.includes(activeFilter as Intention));

  const handleLike = (person: Person) => {
    setLikedPeople(prev => new Set(prev).add(person.name));
    // Navigate to match screen after brief animation delay
    setTimeout(() => {
      navigate(`/match/${person.name.toLowerCase()}`);
    }, 500);
  };

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={goBack} />
        </Card>
        <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Quem está aqui
        </h2>
        <div className="px-[9px] py-[2px] bg-[var(--accent)] text-[var(--accent-foreground)] rounded-full text-xs font-bold">
          {visiblePeople.length}
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 px-6 py-4 overflow-x-auto border-b border-[var(--border-subtle)]">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs whitespace-nowrap border transition-colors ${
                isActive
                  ? 'bg-[rgba(232,255,71,0.15)] border-[var(--accent)] text-[var(--accent)]'
                  : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)]'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* People grid */}
      <div className="flex-1 overflow-y-auto p-[14px] pb-6">
        <div className="grid grid-cols-2 gap-3">
          {visiblePeople.map((person) => {
            const isLiked = likedPeople.has(person.name);
            return (
              <div
                key={person.name}
                className={`bg-[var(--card)] border rounded-[18px] overflow-hidden transition-all ${
                  isLiked ? `border-[${person.color}] shadow-lg` : 'border-[var(--border)]'
                }`}
                style={isLiked ? {
                  borderColor: person.color,
                  boxShadow: `0 0 20px ${person.color}40`
                } : {}}
              >
                {/* Top area with avatar */}
                <div
                  className="relative h-[130px] flex items-center justify-center"
                  style={{
                    background: `linear-gradient(to bottom, transparent 85%, ${person.color}14)`
                  }}
                >
                  <button
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center border-2"
                    style={{
                      backgroundColor: `${person.color}1f`,
                      borderColor: person.color
                    }}
                    onClick={() => navigate(`/profile/${person.name.toLowerCase()}`)}
                  >
                    <img src={person.photo} alt={person.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </button>
                </div>

                {/* Bottom area with info */}
                <div className="p-3 space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[15px] font-bold text-[var(--text-primary)]">{person.name}</span>
                    <span className="text-[15px] text-[var(--text-secondary)]">, {person.age}</span>
                  </div>

                  <p className="text-[11px] text-[#555555] leading-[1.4] truncate">
                    {person.bio}
                  </p>

                  {/* Interest pills */}
                  <div className="flex gap-1 flex-wrap">
                    {person.interests.slice(0, 2).map((interest) => (
                      <div
                        key={interest}
                        className="px-2 py-1 rounded-full bg-[var(--card)] border border-[var(--border)] text-[9px] text-[var(--text-secondary)]"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>

                  {/* Like button */}
                  <button
                    onClick={() => handleLike(person)}
                    className={`w-full h-9 rounded-[10px] border transition-all ${
                      isLiked
                        ? 'bg-[rgba(232,255,71,0.15)] border-[var(--accent)] text-[var(--accent)]'
                        : 'bg-[var(--card)] border-[var(--border)] text-[#555555] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {isLiked ? 'Curtido ✓' : 'Curtir ♡'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}
