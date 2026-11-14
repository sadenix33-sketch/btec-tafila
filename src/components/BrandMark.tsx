import { GraduationCap } from 'lucide-react';
import { SITE } from '@/data/site';

interface BrandMarkProps {
  tone?: 'light' | 'dark';
  compact?: boolean;
}

export default function BrandMark({ tone = 'light', compact = false }: BrandMarkProps) {
  const textClass = tone === 'light' ? 'text-white' : 'text-navy';

  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal text-white shadow-md shadow-royal/30 sm:h-11 sm:w-11">
        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
      <span className={`flex min-w-0 flex-col leading-tight ${textClass}`}>
        <span
          className={`font-bold ${
            compact
              ? 'max-w-[10rem] truncate text-xs sm:max-w-none sm:text-sm'
              : 'text-sm md:text-base'
          }`}
        >
          {SITE.name}
        </span>
        <span className="text-[0.65rem] font-medium tracking-[0.2em] opacity-75 sm:text-[0.7rem] sm:tracking-[0.25em]">
          {SITE.shortName}
        </span>
      </span>
    </div>
  );
}
