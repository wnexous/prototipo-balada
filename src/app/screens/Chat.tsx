import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Avatar } from '../components/Avatar';
import { people } from '../data/people';
import { autoReplies as AUTO_REPLIES, quickReplies as QUICK_REPLIES } from '../data/conversations';
import { chatWithGemini, hasGeminiKey } from '../lib/gemini';
import { toast } from 'sonner';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
}

const MATCH_TIME = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(new Date());

export function Chat() {
  const navigate = useNavigate();
  const { personName } = useParams<{ personName: string }>();
  const person = people.find((p) => p.name.toLowerCase() === personName?.toLowerCase());

  const storageKey = `linkup:chat:${(personName ?? '').toLowerCase()}`;

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      const parsed = raw ? (JSON.parse(raw) as Message[]) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [quickReplyActive, setQuickReplyActive] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const replyIndexRef = useRef(0);
  const lastReplyIndexRef = useRef(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<Message[]>(messages);
  messagesRef.current = messages;

  // Persiste a conversa no localStorage sempre que muda
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {
      /* ignora cota cheia / modo privado */
    }
  }, [messages, storageKey]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!person) {
    navigate('/who-is-here');
    return null;
  }

  const getNextReply = () => {
    const idx = replyIndexRef.current % AUTO_REPLIES.length;
    // skip if same as last (shouldn't happen with sequential, but guard anyway)
    replyIndexRef.current += 1;
    lastReplyIndexRef.current = idx;
    return AUTO_REPLIES[idx];
  };

  const clearChat = () => {
    setMessages([]);
    setConversationStarted(false);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      /* ignora */
    }
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = { id: Date.now(), text: trimmed, sender: 'user', timestamp: 'agora' };
    const history = [...messagesRef.current, userMsg];
    setMessages(history);
    setConversationStarted(true);
    setInputText('');

    setTimeout(() => setIsTyping(true), 400);
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    let replyText: string;
    try {
      if (hasGeminiKey()) {
        // Resposta real via Gemini, em personagem (usa o histórico todo)
        replyText = await chatWithGemini(
          person,
          history.map((m) => ({ sender: m.sender, text: m.text })),
        );
      } else {
        // Sem chave (ex.: site público) -> simulação
        await wait(900 + Math.random() * 900);
        replyText = getNextReply();
      }
    } catch {
      await wait(300);
      replyText = getNextReply(); // fallback se a API falhar
    }

    setIsTyping(false);
    const reply: Message = { id: Date.now() + 1, text: replyText, sender: 'other', timestamp: 'agora' };
    setMessages((prev) => [...prev, reply]);
  };

  const handleQuickReply = (text: string) => {
    setQuickReplyActive(text);
    setTimeout(() => {
      setQuickReplyActive(null);
      sendMessage(text);
    }, 180);
  };

  const hasText = inputText.trim().length > 0;

  return (
    <div className="w-[390px] h-[844px] bg-[#080808] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div
        className="flex items-center gap-3 border-b"
        style={{ backgroundColor: '#0f0f0f', borderColor: '#242424', padding: '12px 18px' }}
      >
        <button
          onClick={() => navigate('/messages')}
          className="flex items-center justify-center border"
          style={{ width: 36, height: 36, backgroundColor: '#1e1e1e', borderColor: '#333', borderRadius: 10 }}
        >
          <ArrowLeft size={18} className="text-[#f5f5f5]" />
        </button>

        <div className="relative">
          <Avatar emoji={person.emoji} color={person.color} photo={person.photo} name={person.name} size="md" />
          <div
            className="absolute bottom-0 right-0 rounded-full border-2"
            style={{ width: 10, height: 10, backgroundColor: '#3bff8a', borderColor: '#0f0f0f' }}
          />
        </div>

        <div className="flex-1">
          <div className="font-bold text-[#f5f5f5]" style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}>
            {person.name}, {person.age}
          </div>
          <div className="flex items-center gap-1" style={{ fontSize: 11, fontFamily: "'DM Mono', monospace" }}>
            <span style={{ color: '#3bff8a' }}>● online agora</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={clearChat} title="Limpar conversa">
            <span className="text-[#555] text-base">🗑</span>
          </button>
          <Phone size={20} className="text-[#555]" />
          <button onClick={() => navigate('/sos')}>
            <span className="text-[#ff3b3b] text-xl">⊗</span>
          </button>
        </div>
      </div>

      {/* Chat area */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ backgroundColor: '#080808', padding: '16px 16px 8px', scrollbarWidth: 'none' }}
      >
        {/* Date separator */}
        <div className="flex justify-center mb-4">
          <span
            className="text-[#2a2a2a] uppercase tracking-[3px]"
            style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}
          >
            — HOJE —
          </span>
        </div>

        {/* Match banner */}
        <div className="flex flex-col items-center mb-4">
          <div
            className="flex items-center gap-2 border"
            style={{
              backgroundColor: '#161616',
              borderColor: '#242424',
              borderRadius: 12,
              padding: '10px 16px',
              marginBottom: 8,
            }}
          >
            <span style={{ color: '#e8ff47', fontSize: 14 }}>★</span>
            <span
              className="text-[#888]"
              style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}
            >
              match feito às {MATCH_TIME}
            </span>
          </div>
          <span style={{ fontSize: 32 }}>{person.emoji}</span>
        </div>

        {/* Messages */}
        {messages.length === 0 && !conversationStarted ? (
          /* Empty state */
          <div className="flex flex-col items-center" style={{ gap: 12, marginTop: 24 }}>
            <span style={{ fontSize: 48 }}>{person.emoji}</span>
            <p
              className="text-[#333]"
              style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
            >
              Nenhuma mensagem ainda
            </p>
            <p
              className="text-[#242424]"
              style={{ fontSize: 12, fontFamily: "'DM Mono', monospace" }}
            >
              Seja o primeiro a dizer oi!
            </p>

            {/* Quick reply pills */}
            <div className="flex flex-wrap justify-center" style={{ gap: 8, marginTop: 8 }}>
              {QUICK_REPLIES.map((text) => {
                const isActive = quickReplyActive === text;
                return (
                  <button
                    key={text}
                    onClick={() => handleQuickReply(text)}
                    className="border"
                    style={{
                      backgroundColor: '#161616',
                      borderColor: isActive ? '#e8ff47' : '#242424',
                      borderRadius: 999,
                      padding: '8px 16px',
                      fontSize: 12,
                      fontFamily: "'DM Mono', monospace",
                      color: isActive ? '#e8ff47' : '#888',
                      transform: isActive ? 'scale(0.95)' : 'scale(1)',
                      transition: 'transform 0.15s, border-color 0.15s, color 0.15s',
                    }}
                  >
                    {text}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="flex flex-col"
              style={{
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: 8,
              }}
            >
              <div className="flex items-end" style={{ gap: 8, maxWidth: '78%' }}>
                {msg.sender === 'other' && (
                  <div style={{ flexShrink: 0 }}>
                    <Avatar emoji={person.emoji} color={person.color} size="sm" />
                  </div>
                )}
                <div
                  style={{
                    padding: '12px 16px',
                    fontSize: 14,
                    lineHeight: 1.4,
                    ...(msg.sender === 'user'
                      ? {
                          backgroundColor: '#e8ff47',
                          color: '#080808',
                          fontWeight: 700,
                          borderRadius: '18px 18px 4px 18px',
                          fontFamily: "'DM Mono', monospace",
                        }
                      : {
                          backgroundColor: '#1e1e1e',
                          color: '#f5f5f5',
                          border: '1px solid #242424',
                          borderRadius: '18px 18px 18px 4px',
                          fontFamily: "'DM Mono', monospace",
                        }),
                  }}
                >
                  {msg.text}
                </div>
              </div>
              <div
                className="text-[#888]"
                style={{
                  fontSize: 10,
                  fontFamily: "'DM Mono', monospace",
                  marginTop: 4,
                  ...(msg.sender === 'user' ? { marginRight: 8, alignSelf: 'flex-end' } : { marginLeft: 40 }),
                }}
              >
                {msg.timestamp}
                {msg.sender === 'user' && (
                  <span style={{ color: '#e8ff47', marginLeft: 4, fontSize: 9 }}>✓✓</span>
                )}
              </div>
            </div>
          ))
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-end" style={{ gap: 8, maxWidth: '78%', marginBottom: 8 }}>
            <div style={{ flexShrink: 0 }}>
              <Avatar emoji={person.emoji} color={person.color} size="sm" />
            </div>
            <div
              className="flex items-center border"
              style={{
                backgroundColor: '#1e1e1e',
                borderColor: '#242424',
                borderRadius: '18px 18px 18px 4px',
                padding: '12px 16px',
                gap: 5,
              }}
            >
              {[0, 0.2, 0.4].map((delay, i) => (
                <div
                  key={i}
                  className="rounded-full animate-pulse"
                  style={{ width: 8, height: 8, backgroundColor: '#888', animationDelay: `${delay}s` }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input bar */}
      <div
        className="border-t flex items-center"
        style={{ backgroundColor: '#0f0f0f', borderColor: '#1a1a1a', padding: '10px 14px', gap: 10 }}
      >
        {/* Plus button */}
        <button
          className="flex items-center justify-center rounded-full border text-[#555]"
          style={{ width: 38, height: 38, backgroundColor: '#161616', borderColor: '#242424', flexShrink: 0 }}
          onClick={() => toast('Fotos e áudios chegam na versão final 📎')}
        >
          +
        </button>

        {/* Input field */}
        <div
          className="flex items-center border flex-1"
          style={{
            backgroundColor: '#161616',
            borderColor: '#242424',
            borderWidth: 1.5,
            borderRadius: 22,
            padding: '10px 16px',
            gap: 8,
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(inputText)}
            placeholder="Diz oi... 👋"
            className="flex-1 bg-transparent outline-none text-[#f5f5f5]"
            style={{ fontSize: 14, fontFamily: "'DM Mono', monospace" }}
          />
          <button
            className="text-[#555]"
            style={{ fontSize: 18, flexShrink: 0 }}
            onClick={() => { setInputText((t) => t + ' 😊'); inputRef.current?.focus(); }}
          >
            😊
          </button>
        </div>

        {/* Send button */}
        <button
          onClick={() => sendMessage(inputText)}
          disabled={!hasText}
          className="flex items-center justify-center rounded-full"
          style={{
            width: 42, height: 42, flexShrink: 0,
            backgroundColor: hasText ? '#e8ff47' : '#161616',
            border: hasText ? 'none' : '1px solid #242424',
            boxShadow: hasText ? '0 2px 12px rgba(232,255,71,0.3)' : 'none',
            transition: 'background-color 0.15s, box-shadow 0.15s',
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: hasText ? '#080808' : '#333',
              fontWeight: hasText ? 700 : 400,
              lineHeight: 1,
            }}
          >
            ↑
          </span>
        </button>
      </div>

      <HomeIndicator />
    </div>
  );
}
