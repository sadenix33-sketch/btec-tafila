import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const count = images.length;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onIndexChange((index + 1) % count);
      if (event.key === 'ArrowRight') onIndexChange((index - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, count, onClose, onIndexChange]);

  const current = index === null ? undefined : images[index];
  if (index === null || !current) return null;

  const goNext = () => onIndexChange((index + 1) % count);
  const goPrev = () => onIndexChange((index - 1 + count) % count);

  // التنقل بالسحب على الهواتف: سحب لليسار = التالية (اتجاه RTL)
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || count <= 1) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="عرض الصورة"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="animate-fade-in fixed inset-0 z-[70] flex flex-col items-center justify-center bg-navy-deep/95 p-4 md:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="إغلاق"
        className="absolute end-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
      >
        <X className="h-6 w-6" />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            aria-label="الصورة السابقة"
            className="absolute end-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 md:end-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            aria-label="الصورة التالية"
            className="absolute start-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 md:start-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </>
      )}

      <figure
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
        />
        {(current.caption || count > 1) && (
          <figcaption className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            {current.caption && <span>{current.caption}</span>}
            {count > 1 && (
              <>
                <span className="tabular-nums text-white/60">
                  {index + 1} / {count}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 md:hidden">
                  اسحب يميناً أو يساراً للتنقل
                </span>
              </>
            )}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
