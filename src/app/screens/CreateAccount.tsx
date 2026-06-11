import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';
import { Card } from '../components/Card';

export function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const passwordStrength = () => {
    if (!formData.password) return 0;
    const strength = formData.password.length;
    if (strength < 6) return 1;
    if (strength < 8) return 2;
    if (strength < 12) return 3;
    return 4;
  };

  const strengthColors = ['#ff3b3b', '#facc15', '#3bff8a', '#e8ff47'];
  const currentStrength = passwordStrength();

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
        <Card className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[var(--elevated)] transition-colors">
          <ArrowLeft size={18} className="text-[var(--text-primary)]" onClick={() => navigate('/')} />
        </Card>
        <h2 className="text-lg text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Criar Conta
        </h2>
        <div className="w-9" />
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
          <div className="h-[1px] bg-[var(--border)] flex-1 mb-6" />
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-transparent" />
            </div>
            <span className="text-[9px] uppercase text-[var(--text-tertiary)] tracking-wider">Verificação</span>
          </div>
          <div className="h-[1px] bg-[var(--border)] flex-1 mb-6" />
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-transparent" />
            </div>
            <span className="text-[9px] uppercase text-[var(--text-tertiary)] tracking-wider">Perfil</span>
          </div>
        </div>
      </div>

      {/* Scrollable Form */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* Personal Information Section */}
        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
            SUAS INFORMAÇÕES
          </h3>

          <Input
            label="NOME COMPLETO"
            placeholder="Como você quer ser chamado?"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            label="E-MAIL"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="DATA NASC."
              placeholder="DD/MM/AAAA"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            />

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
                GÊNERO
              </label>
              <div className="relative">
                <select
                  className="w-full bg-[var(--card)] border-[1.5px] border-[var(--border)] rounded-xl px-4 py-[14px] text-[var(--text-primary)] outline-none appearance-none cursor-pointer"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="">Selecionar</option>
                  <option value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
                  <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                </select>
                <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
            SEGURANÇA
          </h3>

          <div className="space-y-2">
            <Input
              label="SENHA"
              showPasswordToggle
              placeholder="Mínimo 8 caracteres"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            {/* Password strength indicator */}
            {formData.password && (
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="h-1 flex-1 rounded-full transition-all"
                    style={{
                      backgroundColor: level <= currentStrength ? strengthColors[currentStrength - 1] : 'var(--border)'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <Input
            label="CONFIRMAR SENHA"
            showPasswordToggle
            placeholder="Digite a senha novamente"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
        </div>

        {/* Terms checkbox */}
        <div className="flex items-start gap-3">
          <button
            onClick={() => setAcceptedTerms(!acceptedTerms)}
            className="mt-1 w-5 h-5 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors"
            style={{
              borderColor: acceptedTerms ? 'var(--accent)' : 'var(--border)',
              backgroundColor: acceptedTerms ? 'var(--accent)' : 'transparent'
            }}
          >
            {acceptedTerms && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="var(--accent-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
            Li e aceito os{' '}
            <span className="text-[var(--accent)]">Termos de Uso</span>
            {' '}e{' '}
            <span className="text-[var(--accent)]">Política de Privacidade</span>
          </p>
        </div>

        {/* Continue button */}
        <Button fullWidth disabled={!acceptedTerms} onClick={() => navigate('/verify')}>
          Continuar
        </Button>
      </div>

      <HomeIndicator />
    </div>
  );
}
