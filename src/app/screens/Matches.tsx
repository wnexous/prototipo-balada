import { useNavigate } from 'react-router-dom';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { BottomNav } from '../components/BottomNav';
import { Avatar } from '../components/Avatar';
import { people, findPerson, type Person } from '../data/people';
import { conversations as conversationSeeds } from '../data/conversations';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function Matches() {
  const navigate = useNavigate();

  // Pessoas online (carrossel "ONLINE AGORA")
  const onlinePeople = people.filter((p) => p.online);

  // Conversas resolvidas a partir das seeds em data/conversations
  const conversations = conversationSeeds
    .map((c) => ({ ...c, person: findPerson(c.personName) }))
    .filter((c): c is typeof c & { person: Person } => Boolean(c.person));

  // Matches recentes destacados no banner
  const recentMatches = onlinePeople.slice(0, 3);

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Top bar */}
      <div
        className="flex items-center justify-between border-b"
        style={{ padding: '16px 18px', borderColor: '#1a1a1a' }}
      >
        <h1
          className="font-bold text-[#f5f5f5]"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 24, fontWeight: 800 }}
        >
          Mensagens
        </h1>
        <button className="text-[#555]" style={{ fontSize: 20 }} onClick={() => navigate('/who-is-here')}>
          ✎
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none' }}>

        {/* Online now */}
        <div style={{ padding: '16px 18px', borderBottom: '1px solid #1a1a1a' }}>
          <p
            className="uppercase text-[#888] mb-3"
            style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
          >
            ONLINE AGORA
          </p>
          <div className="flex gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {onlinePeople.map((person) => (
              <div key={person.name} className="flex flex-col items-center" style={{ gap: 6, minWidth: 52 }}>
                <div className="relative">
                  <div
                    className="rounded-full flex items-center justify-center border-2"
                    style={{
                      width: 52, height: 52,
                      backgroundColor: hexToRgba(person.color, 0.18),
                      borderColor: person.color,
                      fontSize: 24,
                    }}
                  >
                    <img src={person.photo} alt={person.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  {/* Green dot */}
                  <div
                    className="absolute bottom-0 right-0 rounded-full border-2"
                    style={{ width: 10, height: 10, backgroundColor: '#3bff8a', borderColor: '#080808' }}
                  />
                </div>
                <span
                  className="text-[#888]"
                  style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}
                >
                  {person.name}
                </span>
              </div>
            ))}
            {/* Ver todos */}
            <div className="flex flex-col items-center cursor-pointer" style={{ gap: 6, minWidth: 52 }} onClick={() => navigate('/who-is-here')}>
              <div
                className="rounded-full flex items-center justify-center border"
                style={{ width: 52, height: 52, backgroundColor: '#161616', borderColor: '#242424', fontSize: 20, color: '#555' }}
              >
                +
              </div>
              <span
                className="text-[#555] text-center"
                style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}
              >
                ver todos
              </span>
            </div>
          </div>
        </div>

        {/* Match request banner */}
        <div
          className="border flex items-center justify-between"
          style={{
            margin: '12px 16px',
            backgroundColor: hexToRgba('#e8ff47', 0.03),
            borderColor: '#e8ff47',
            borderRadius: 16,
            padding: '14px 16px',
          }}
        >
          <div>
            <div
              className="font-bold mb-[6px]"
              style={{ color: '#e8ff47', fontSize: 13, fontFamily: "'DM Mono', monospace" }}
            >
              ⭐ Novos matches!
            </div>
            <div className="flex items-center" style={{ gap: 4 }}>
              {recentMatches.map((p, i) => (
                <div
                  key={p.name}
                  className="rounded-full flex items-center justify-center border"
                  style={{
                    width: 24, height: 24,
                    backgroundColor: hexToRgba(p.color, 0.3),
                    borderColor: '#080808',
                    marginLeft: i > 0 ? -6 : 0,
                    fontSize: 12, zIndex: 3 - i,
                  }}
                >
                  <img src={p.photo} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                </div>
              ))}
              <span className="text-[#888] ml-2" style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                + 3 pessoas curtiram você
              </span>
            </div>
          </div>
          <button onClick={() => navigate('/who-is-here')} style={{ color: '#e8ff47', fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
            Ver →
          </button>
        </div>

        {/* Conversations section label */}
        <div style={{ padding: '12px 18px 8px' }}>
          <p
            className="uppercase text-[#888]"
            style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
          >
            CONVERSAS
          </p>
        </div>

        {/* Conversation rows */}
        {conversations.map((conv) => (
          <button
            key={conv.person.name}
            className="w-full flex items-center border-b"
            style={{ height: 72, padding: '0 18px', borderColor: '#1a1a1a', gap: 14 }}
            onClick={() => navigate(`/chat/${conv.person.name.toLowerCase()}`)}
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="rounded-full flex items-center justify-center border-2"
                style={{
                  width: 48, height: 48,
                  backgroundColor: hexToRgba(conv.person.color, 0.18),
                  borderColor: conv.person.color,
                  fontSize: 22,
                }}
              >
                {conv.person.emoji}
              </div>
              {conv.unread && (
                <div
                  className="absolute -top-1 -right-1 rounded-full border-2"
                  style={{ width: 10, height: 10, backgroundColor: '#e8ff47', borderColor: '#080808' }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-start" style={{ gap: 4, minWidth: 0 }}>
              <div className="w-full flex items-center justify-between">
                <span
                  className="font-bold text-[#f5f5f5]"
                  style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}
                >
                  {conv.person.name}, {conv.person.age}
                </span>
                <span className="text-[#555]" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
                  {conv.timestamp}
                </span>
              </div>
              <span
                className="w-full text-left truncate"
                style={{
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                  ...(conv.typing
                    ? { color: '#e8ff47', fontStyle: 'italic' }
                    : conv.noMessages
                      ? { color: '#333', fontStyle: 'italic' }
                      : conv.unread
                        ? { color: '#f5f5f5', fontWeight: 700 }
                        : { color: '#555' }),
                }}
              >
                {conv.lastMessage}
              </span>
            </div>
          </button>
        ))}
      </div>

      <BottomNav />
      <HomeIndicator />
    </div>
  );
}
