import { useNavigate, useLocation } from 'react-router-dom';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', icon: '◈', label: 'Início', path: '/home' },
    { id: 'map', icon: '◉', label: 'Mapa', path: '/map' },
    { id: 'people', icon: '◎', label: 'Galera', path: '/crew' },
    { id: 'chat', icon: '◷', label: 'Chat', path: '/messages' },
    { id: 'sos', icon: '⊗', label: 'SOS', path: '/sos' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-[var(--background)] border-t border-[var(--border-subtle)] flex items-center justify-around px-4">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path ||
                        (tab.id === 'home' && location.pathname === '/home') ||
                        (tab.id === 'map' && location.pathname === '/map') ||
                        (tab.id === 'people' && (location.pathname === '/crew' || location.pathname === '/people')) ||
                        (tab.id === 'chat' && (location.pathname === '/messages' || location.pathname.startsWith('/chat/'))) ||
                        (tab.id === 'sos' && location.pathname === '/sos');

        const textColor = tab.id === 'sos' && isActive
          ? 'text-[var(--danger)]'
          : isActive
            ? 'text-[var(--accent)]'
            : 'text-[var(--text-tertiary)]';

        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center gap-1 min-w-[60px]"
          >
            <span className={`text-xl ${textColor}`}>
              {tab.icon}
            </span>
            <span className={`text-[9px] uppercase tracking-wider ${textColor}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
