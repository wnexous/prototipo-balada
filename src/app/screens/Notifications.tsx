import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { useBack } from '../lib/nav';
import {
  allNotifications,
  notificationFilters as filterTabs,
  notificationFilterMap as filterMap,
  type NotificationItem as Notification,
} from '../data/notifications';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function Notifications() {
  const navigate = useNavigate();
  const goBack = useBack('/home');
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [readIds, setReadIds] = useState<Set<number>>(new Set());

  const visible = allNotifications.filter((n) =>
    filterMap[activeFilter].includes(n.type)
  );

  const isUnread = (n: Notification) => n.unread && !readIds.has(n.id);

  const markAllRead = () => {
    setReadIds(new Set(allNotifications.map((n) => n.id)));
  };

  const handleTap = (n: Notification) => {
    setReadIds((prev) => new Set([...prev, n.id]));
    if (n.route) navigate(n.route);
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
          onClick={goBack}
          className="flex items-center justify-center border"
          style={{ width: 36, height: 36, backgroundColor: '#161616', borderColor: '#242424', borderRadius: 10, flexShrink: 0 }}
        >
          <ArrowLeft size={18} className="text-[#f5f5f5]" />
        </button>
        <h1
          className="font-bold text-[#f5f5f5] flex-1"
          style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18 }}
        >
          Notificações
        </h1>
        <button
          onClick={markAllRead}
          style={{ color: '#e8ff47', fontSize: 11, fontFamily: "'DM Mono', monospace" }}
        >
          Marcar todas como lidas
        </button>
      </div>

      {/* Filter pills */}
      <div
        className="flex gap-2 overflow-x-auto border-b"
        style={{ padding: '12px 16px', borderColor: '#1a1a1a', scrollbarWidth: 'none' }}
      >
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className="border whitespace-nowrap font-bold"
              style={{
                padding: '6px 16px',
                borderRadius: 999,
                fontSize: 11,
                fontFamily: "'DM Mono', monospace",
                flexShrink: 0,
                backgroundColor: isActive ? hexToRgba('#e8ff47', 0.12) : '#161616',
                borderColor: isActive ? '#e8ff47' : '#242424',
                color: isActive ? '#e8ff47' : '#555',
                transition: 'all 0.15s',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Notification list */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full" style={{ gap: 12 }}>
            <span style={{ fontSize: 64 }}>🔔</span>
            <h2
              className="text-[#555]"
              style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 20 }}
            >
              Sem notificações
            </h2>
            <p
              className="text-[#333] text-center"
              style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", lineHeight: 1.7 }}
            >
              Quando acontecer algo importante,{'\n'}você verá aqui.
            </p>
          </div>
        ) : (
          visible.map((notif) => {
            const unread = isUnread(notif);
            return (
              <button
                key={notif.id}
                className="w-full flex items-start border-b text-left"
                style={{
                  padding: '14px 18px',
                  borderColor: '#1a1a1a',
                  backgroundColor: unread ? hexToRgba('#e8ff47', 0.02) : 'transparent',
                  borderLeft: unread ? '3px solid #e8ff47' : '3px solid transparent',
                  gap: 12,
                }}
                onClick={() => handleTap(notif)}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center border flex-shrink-0"
                  style={{
                    width: 44, height: 44,
                    borderRadius: '50%',
                    fontSize: 20,
                    backgroundColor: notif.type === 'match'
                      ? hexToRgba(notif.iconColor, 0.15)
                      : notif.type === 'event'
                        ? hexToRgba(notif.iconColor, 0.15)
                        : '#1a1a1a',
                    borderColor: notif.type !== 'system' ? notif.iconColor : '#333',
                  }}
                >
                  {notif.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="mb-[3px]"
                    style={{
                      fontSize: 14,
                      fontFamily: "'DM Mono', monospace",
                      color: unread ? '#f5f5f5' : '#888',
                      fontWeight: unread ? 700 : 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {notif.title}
                  </p>
                  <p
                    className="text-[#555]"
                    style={{
                      fontSize: 12,
                      fontFamily: "'DM Mono', monospace",
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {notif.body}
                  </p>
                  <p
                    className="text-[#333] mt-1"
                    style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}
                  >
                    {notif.time}
                  </p>
                </div>

                {/* Unread dot */}
                {unread && (
                  <div
                    className="rounded-full flex-shrink-0 mt-1"
                    style={{ width: 8, height: 8, backgroundColor: '#e8ff47' }}
                  />
                )}
              </button>
            );
          })
        )}
      </div>

      <HomeIndicator />
    </div>
  );
}
