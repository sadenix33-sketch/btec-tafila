import { useState } from 'react';
import { ImageOff, MoveHorizontal } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { GALLERY_FEATURED, GALLERY_FILTERS, GALLERY_ITEMS } from '@/data/gallery';
import type { GalleryFilter } from '@/data/types';

/** سياق العرض المكبّر: 'all' لأبرز اللقطات، أو تصنيف محدد لشريطه. */
type LightboxGroup = GalleryFilter;

interface LightboxState {
  group: LightboxGroup;
  index: number;
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const featured = GALLERY_FEATURED.map((entry) => {
    const item = GALLERY_ITEMS.find((candidate) => candidate.id === entry.id);
    return item ? { ...item, title: entry.title, subtitle: entry.subtitle } : null;
  }).filter(Boolean) as ((typeof GALLERY_ITEMS)[number] & { title: string; subtitle: string })[];

  // الأقسام: كل قسم شريط أفقي قابل للسحب بنظام أبرز اللقطات.
  const categories = GALLERY_FILTERS.filter((option) => option.value !== 'all')
    .map((option) => ({
      ...option,
      items: GALLERY_ITEMS.filter((item) => item.category === option.value),
    }))
    .filter((group) => group.items.length > 0);

  const lightboxItems = lightbox
    ? lightbox.group === 'all'
      ? GALLERY_ITEMS
      : (categories.find((group) => group.value === lightbox.group)?.items ?? [])
    : [];

  return (
    <section id="gallery" className="scroll-mt-24 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="معرض الصور"
          title="من ذاكرة الإنجاز"
          description="لحظات من التعلم والإبداع والعمل الجماعي. كل قسم شريط أفقي منفصل — اسحب به لاستكشاف باقي الصور."
        />

        {GALLERY_ITEMS.length === 0 ? (
          <div className="mt-14">
            <EmptyState
              icon={ImageOff}
              title="الصور قيد الإضافة"
              text="سيتم نشر صور الأنشطة والمشاريع والفعاليات هنا قريباً."
            />
          </div>
        ) : (
          <>
            {/* أبرز اللقطات */}
            {featured.length > 0 && (
              <div className="mt-12">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-navy">أبرز اللقطات</h3>
                  <span className="flex items-center gap-2 text-xs font-medium text-royal md:hidden">
                    <MoveHorizontal className="h-4 w-4" />
                    اسحب للاستكشاف
                  </span>
                </div>
                <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide md:mx-0 md:px-0">
                  {featured.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        const index = GALLERY_ITEMS.findIndex((candidate) => candidate.id === item.id);
                        if (index >= 0) setLightbox({ group: 'all', index });
                      }}
                      aria-label={`تكبير: ${item.title}`}
                      className="group relative min-w-[82%] snap-start overflow-hidden rounded-3xl text-start ring-1 ring-navy/10 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/15 sm:min-w-[46%] lg:min-w-[31.5%] active:scale-[0.98]"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="block aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
                      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
                        <span className="text-lg font-bold text-white">{item.title}</span>
                        <span className="text-sm text-sky">{item.subtitle}</span>
                      </span>
                      <span className="absolute end-4 top-4 rounded-full bg-amber-300/90 px-3 py-1 text-xs font-bold text-navy">
                        مميزة
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* أقسام الصور: شريط أفقي لكل قسم */}
            {categories.map((group, groupIndex) => (
              <Reveal key={group.value} delay={Math.min(groupIndex * 70, 280)} className="mt-12">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy">
                    {group.label}
                    <span className="rounded-full bg-mist px-2.5 py-0.5 text-xs font-medium text-navy/60">
                      {group.items.length}
                    </span>
                  </h3>
                  <span className="flex items-center gap-2 text-xs font-medium text-royal md:hidden">
                    <MoveHorizontal className="h-4 w-4" />
                    اسحب للاستكشاف
                  </span>
                </div>
                <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide md:mx-0 md:px-0">
                  {group.items.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLightbox({ group: group.value, index })}
                      aria-label={`تكبير: ${item.alt}`}
                      className="group relative min-w-[80%] snap-start overflow-hidden rounded-2xl bg-mist text-start ring-1 ring-navy/10 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/15 sm:min-w-[46%] lg:min-w-[31.5%] active:scale-[0.98]"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="block aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span
                        className={`absolute inset-0 flex items-end bg-gradient-to-t from-navy/85 via-navy/10 to-transparent p-4 transition duration-500 ${
                          item.caption
                            ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100'
                            : 'opacity-0 md:group-hover:opacity-100'
                        }`}
                      >
                        {item.caption && (
                          <span className="text-sm font-medium text-white">{item.caption}</span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </Reveal>
            ))}
          </>
        )}
      </div>

      <Lightbox
        images={lightboxItems.map((item) => ({ src: item.src, alt: item.alt, caption: item.caption }))}
        index={lightbox?.index ?? null}
        onIndexChange={(index) => setLightbox((current) => (current ? { ...current, index } : null))}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
