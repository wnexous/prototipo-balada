import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-[18px] shadow-[0_2px_24px_rgba(0,0,0,0.4)] ${className}`}>
      {children}
    </div>
  );
}
