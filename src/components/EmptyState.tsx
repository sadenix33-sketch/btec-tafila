import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export default function EmptyState({ icon: Icon, title, text }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-royal/30 bg-white/60 px-6 py-14 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-royal">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="max-w-md text-sm leading-[1.5] text-ink/70">{text}</p>
    </div>
    
  );
}
