import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { HomeIndicator } from '../components/HomeIndicator';
import { starLabels, ratingCategories as categoryRatings } from '../data/rating';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function EventRating() {
  const navigate = useNavigate();
  const [mainRating, setMainRating] = useState(0);
  const [catRatings, setCatRatings] = useState({ Música: 0, Ambiente: 0, Segurança: 0 });
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const displayRating = hoveredStar || mainRating;

  const handleSubmit = () => {
    toast.success('Obrigado pelo feedback! ⭐', {
      style: {
        background: '#1e1e1e',
        border: '1px solid #2a2a2a',
        borderLeft: '3px solid #3bff8a',
        color: '#f5f5f5',
        borderRadius: 14,
        fontFamily: "'DM Mono', monospace",
      },
    });
    navigate('/home');
  };

  return (
    <div
      className="w-[390px] h-[844px] flex items-end"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
    >
      {/* Bottom sheet */}
      <div
        className="w-full border-t"
        style={{
          backgroundColor: '#0f0f0f',
          borderRadius: '24px 24px 0 0',
          borderColor: '#242424',
          maxHeight: '92%',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          animation: 'slideUp 0.32s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0.5; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 12, paddingBottom: 4 }}>
          <div className="rounded-full" style={{ width: 32, height: 4, backgroundColor: '#333' }} />
        </div>

        <div
          className="flex flex-col items-center"
          style={{ padding: '8px 24px 32px', gap: 20 }}
        >
          {/* Event badge */}
          <div
            className="flex items-center border"
            style={{
              backgroundColor: hexToRgba('#e8ff47', 0.1),
              borderColor: '#e8ff47',
              borderRadius: 999,
              padding: '8px 18px',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16 }}>🎸</span>
            <span
              className="font-bold"
              style={{ color: '#e8ff47', fontSize: 13, fontFamily: "'DM Mono', monospace" }}
            >
              Festa do Rock 2026
            </span>
          </div>

          {/* Title */}
          <div className="text-center">
            <h2
              className="font-bold text-[#f5f5f5] mb-2"
              style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22 }}
            >
              Como foi a noite?
            </h2>
            <p
              className="text-[#888]"
              style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", lineHeight: 1.6 }}
            >
              Sua avaliação ajuda outras pessoas a encontrar as melhores festas.
            </p>
          </div>

          {/* Star rating */}
          <div className="flex flex-col items-center" style={{ gap: 8 }}>
            <div className="flex" style={{ gap: 8 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => setMainRating(star)}
                  style={{
                    fontSize: 36,
                    color: star <= displayRating ? '#e8ff47' : '#333',
                    transition: 'color 0.1s, transform 0.1s',
                    transform: star <= displayRating ? 'scale(1.1)' : 'scale(1)',
                    lineHeight: 1,
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ★
                </button>
              ))}
            </div>
            <p
              className="text-[#888]"
              style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", minHeight: 16 }}
            >
              {displayRating > 0 ? starLabels[displayRating] : ''}
            </p>
          </div>

          {/* Category ratings */}
          <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {categoryRatings.map((cat) => {
              const val = catRatings[cat.label as keyof typeof catRatings];
              return (
                <div key={cat.label} className="flex items-center justify-between">
                  <span className="text-[#888]" style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}>
                    {cat.label} {cat.icon}
                  </span>
                  <div className="flex" style={{ gap: 4 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        onClick={() => setCatRatings((prev) => ({ ...prev, [cat.label]: s }))}
                        style={{
                          fontSize: 18,
                          color: s <= val ? '#e8ff47' : '#333',
                          transition: 'color 0.1s',
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                          lineHeight: 1,
                        }}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comment input */}
          <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label
              className="uppercase text-[#888]"
              style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '1.5px' }}
            >
              DEIXE UM COMENTÁRIO (OPCIONAL)
            </label>
            <div className="relative">
              <textarea
                value={comment}
                onChange={(e) => e.target.value.length <= 200 && setComment(e.target.value)}
                placeholder="O que você achou? Dica para outros..."
                className="w-full border outline-none resize-none"
                style={{
                  backgroundColor: '#161616',
                  borderColor: '#242424',
                  borderRadius: 12,
                  padding: '14px 14px 28px',
                  color: '#f5f5f5',
                  fontSize: 13,
                  fontFamily: "'DM Mono', monospace",
                  height: 80,
                }}
              />
              <span
                className="absolute bottom-2 right-3 text-[#444]"
                style={{ fontSize: 10, fontFamily: "'DM Mono', monospace" }}
              >
                {comment.length}/200
              </span>
            </div>
          </div>

          {/* Photos button */}
          <button
            className="w-full flex items-center justify-center"
            style={{
              border: '1.5px dashed #333',
              borderRadius: 12,
              padding: 12,
              backgroundColor: 'transparent',
              color: '#555',
              fontSize: 13,
              fontFamily: "'DM Mono', monospace",
              gap: 8,
            }}
          >
            📷 Adicionar fotos
          </button>

          {/* Submit */}
          <button
            className="w-full font-bold"
            onClick={handleSubmit}
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
            Enviar avaliação
          </button>

          {/* Dismiss */}
          <button
            onClick={() => navigate('/home')}
            className="text-[#555]"
            style={{ fontSize: 13, fontFamily: "'DM Mono', monospace" }}
          >
            Agora não
          </button>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}
