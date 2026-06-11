import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Card } from '../components/Card';
import { intentions, interestOptions as interests } from '../data/onboarding';

export function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    displayName: 'Lucas M.',
    bio: ''
  });
  const [selectedIntention, setSelectedIntention] = useState('paquera');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Rock', 'Fotografia']);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate('/verify')} />
        </Card>
        <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Seu Perfil
        </h2>
        <span className="text-sm text-[var(--accent)]">3 de 3</span>
      </div>

      {/* Progress indicator */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-foreground)]" />
            </div>
            <span className="text-[9px] uppercase text-[var(--accent)] tracking-wider">Dados</span>
          </div>
          <div className="h-[1px] bg-[var(--accent)] flex-1 mb-6" />
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-foreground)]" />
            </div>
            <span className="text-[9px] uppercase text-[var(--accent)] tracking-wider">Verificação</span>
          </div>
          <div className="h-[1px] bg-[var(--accent)] flex-1 mb-6" />
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-foreground)]" />
            </div>
            <span className="text-[9px] uppercase text-[var(--accent)] tracking-wider">Perfil</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* Avatar upload */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-[100px] h-[100px] rounded-full border-2 border-dashed border-[#333333] bg-[var(--card)] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[var(--accent)] transition-colors">
            <Camera size={24} className="text-[#555555]" />
            <span className="text-xs text-[#555555]">+ Adicionar foto</span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Lucas M.
            </span>
            <span className="text-xl text-[var(--text-secondary)]">, 20</span>
          </div>
        </div>

        {/* Form inputs */}
        <Input
          label="NOME EXIBIDO"
          placeholder="Como você quer aparecer"
          value={formData.displayName}
          onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
        />

        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
            BIO
          </label>
          <div className="relative">
            <textarea
              className="w-full h-[80px] bg-[var(--card)] border-[1.5px] border-[var(--border)] rounded-xl px-4 py-[14px] text-[var(--text-primary)] outline-none resize-none focus:border-[var(--accent)] transition-colors"
              placeholder="O que você curte? Fala um pouco sobre você..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              maxLength={150}
            />
            <span className="absolute bottom-3 right-3 text-[11px] text-[var(--text-tertiary)]">
              {formData.bio.length}/150
            </span>
          </div>
        </div>

        {/* Intention section */}
        <div className="space-y-3">
          <div>
            <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)] mb-1">
              INTENÇÃO
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">O que você busca hoje?</p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
            {intentions.map((intention) => (
              <button
                key={intention.id}
                onClick={() => setSelectedIntention(intention.id)}
                className={`flex-shrink-0 w-[110px] rounded-2xl px-4 py-4 flex flex-col items-center gap-2 border transition-colors ${
                  selectedIntention === intention.id
                    ? 'border-[var(--accent)] bg-[#e8ff4708]'
                    : 'border-[var(--border)] bg-[var(--card)]'
                }`}
              >
                <span className="text-[28px]">{intention.icon}</span>
                <span className="text-[13px] font-bold text-[var(--text-primary)]">
                  {intention.label}
                </span>
                <span className="text-[11px] text-[var(--text-secondary)] text-center">
                  {intention.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Interests section */}
        <div className="space-y-3">
          <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
            INTERESSES
          </h3>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => {
              const isSelected = selectedInterests.includes(interest);
              return (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-2 rounded-full text-[11px] border transition-colors ${
                    isSelected
                      ? 'bg-[rgba(232,255,71,0.15)] border-[var(--accent)] text-[var(--accent)]'
                      : 'bg-[var(--card)] border-[var(--border)] text-[var(--text-secondary)]'
                  }`}
                >
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit button */}
        <Button fullWidth onClick={() => navigate('/home')} className="mt-6">
          Finalizar e entrar →
        </Button>
      </div>

      <HomeIndicator />
    </div>
  );
}
