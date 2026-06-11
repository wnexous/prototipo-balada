import { InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showPasswordToggle?: boolean;
}

export function Input({ label, showPasswordToggle = false, type = 'text', className = '', ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-[10px] uppercase tracking-[1.5px] text-[var(--text-secondary)]">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          className={`w-full bg-[var(--card)] border-[1.5px] ${isFocused ? 'border-[var(--accent)]' : 'border-[var(--border)]'} rounded-xl px-4 py-[14px] text-[var(--text-primary)] outline-none transition-colors`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
