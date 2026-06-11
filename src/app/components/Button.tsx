import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({ variant = 'primary', children, fullWidth = false, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-[15px] rounded-[14px] transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_4px_20px_rgba(232,255,71,0.2)] active:shadow-none',
    secondary: 'bg-[var(--card)] border-[1.5px] border-[var(--border)] text-[var(--text-primary)]',
    ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
