import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { StatusBar } from '../components/StatusBar';
import { HomeIndicator } from '../components/HomeIndicator';

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  return (
    <div className="w-[390px] h-[844px] bg-[var(--background)] relative flex flex-col">
      <StatusBar />

      <div className="flex-1 overflow-y-auto px-8 pt-12 pb-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg width="40" height="40" viewBox="0 0 90 90" className="drop-shadow-[0_0_8px_rgba(232,255,71,0.4)]">
            <circle cx="30" cy="45" r="25" fill="none" stroke="#e8ff47" strokeWidth="2" />
            <circle cx="60" cy="45" r="25" fill="none" stroke="#e8ff47" strokeWidth="2" />
            <circle cx="38" cy="45" r="4" fill="#e8ff47" />
            <circle cx="52" cy="45" r="4" fill="#e8ff47" />
          </svg>
          <h1 className="text-2xl text-[var(--text-primary)]" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            LinkUp
          </h1>
        </div>

        {/* Welcome text */}
        <div className="mb-8">
          <h2 className="text-[28px] text-[var(--text-primary)] mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Bem-vindo de volta
          </h2>
          <p className="text-[13px] text-[var(--text-secondary)]">
            Entre para continuar curtindo a noite
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <Input
            label="E-MAIL"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="space-y-2">
            <Input
              label="SENHA"
              showPasswordToggle
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              className="text-xs text-[var(--accent)] ml-auto block"
              onClick={() => navigate('/forgot-password')}
            >
              Esqueci a senha
            </button>
          </div>

          <Button fullWidth onClick={() => navigate('/home')} className="mt-2">
            Entrar
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-[1px] bg-[var(--border)]" />
          <span className="text-[11px] text-[var(--text-tertiary)]">ou entre com</span>
          <div className="flex-1 h-[1px] bg-[var(--border)]" />
        </div>

        {/* Social login */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] px-4 py-[14px] flex items-center justify-center gap-2 hover:bg-[var(--elevated)] transition-colors">
            <span className="text-lg">G</span>
            <span className="text-[13px] text-[var(--text-primary)]">Google</span>
          </button>
          <button className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] px-4 py-[14px] flex items-center justify-center gap-2 hover:bg-[var(--elevated)] transition-colors">
            <span className="text-lg">●</span>
            <span className="text-[13px] text-[var(--text-primary)]">Apple</span>
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-[13px] text-[var(--text-secondary)] text-center">
          Novo por aqui?{' '}
          <button
            className="text-[var(--accent)] font-bold"
            onClick={() => navigate('/signup')}
          >
            Criar conta
          </button>
        </p>
      </div>

      <HomeIndicator />
    </div>
  );
}
