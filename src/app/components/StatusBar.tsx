import { Wifi, Signal, Battery } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-2">
      <span className="text-xs text-[var(--text-tertiary)]">9:41</span>
      <div className="flex items-center gap-1">
        <Signal size={12} className="text-[var(--text-tertiary)]" />
        <Wifi size={12} className="text-[var(--text-tertiary)]" />
        <Battery size={12} className="text-[var(--text-tertiary)]" />
      </div>
    </div>
  );
}
