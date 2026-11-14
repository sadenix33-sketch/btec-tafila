import { useState } from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ALUMNI, GRADUATION_CLASS, GRADUATION_YEAR } from '@/data/alumni';

export default function Alumni() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const portraits = GRADUATION_CLASS.map((graduate, index) => ({
    src: graduate.photo,
    alt: `خريج دفعة ${GRADUATION_YEAR} – صورة ${index + 1}`,
    caption: `دفعة التخرج ${GRADUATION_YEAR} – مدرسة العيص الثانوية للبنين`,
  }));

  const withPhotos = ALUMNI.filter((person) => person.photo);
  const registryImages = withPhotos.map((person) => ({
    src: person.photo as string,
    alt: person.name ?? `خريج ${person.graduationYear}`,
    caption: person.name ? `${person.name} – ${person.graduationYear}` : `دفعة ${person.graduationYear}`,
  }));
  const years = [...new Set(ALUMNI.map((person) => person.graduationYear))].sort((a, b) => b - a);

  return (
    <section id="alumni" className="scroll-mt-24 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="خريجو المدرسة"
          title="خريجو مدرستنا.. قصص تستحق الفخر"
          description="نحتفي بطلابنا الذين كانوا جزءاً من رحلتنا التعليمية، ونوثق ذكرياتهم وتجاربهم وإنجازاتهم، لتبقى مسيرتهم مصدر إلهام للأجيال القادمة."
        />

        {/* لوحة دفعة التخرج */}
        {GRADUATION_CLASS.length > 0 && (
          <Reveal className="mt-12 md:mt-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep px-5 py-10 text-center sm:px-8 md:px-12 md:py-16">
              {/* توهجات ديكورية */}
              <div className="pointer-events-none absolute -top-32 end-[-4rem] h-72 w-72 rounded-full bg-royal/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 start-[-3rem] h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-sm font-bold text-amber-300">
                  <Sparkles className="h-4 w-4" />
                  دفعة التخرج {GRADUATION_YEAR}
                </span>
                <h3 className="mt-5 text-3xl font-bold leading-[1.2] text-white md:text-4xl">
                  أروابهم سوداء.. وشحّهم ذهبي
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base leading-[1.6] text-white/75 md:text-lg">
                  لحظة يُوقّع فيها الطالب نهاية فصل ويبدأ المشوار الجديد. .
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                  {GRADUATION_CLASS.map((graduate, index) => (
                    <Reveal key={graduate.id} delay={(index % 4) * 90}>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`تكبير صورة خريج دفعة ${GRADUATION_YEAR}`}
                        className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-amber-200/30 transition duration-500 hover:scale-[1.02] hover:ring-amber-300/70 active:scale-[0.98]"
                      >
                        <img
                          src={graduate.photo}
                          alt={`خريج دفعة ${GRADUATION_YEAR} – صورة ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="block aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent px-3 pb-3 pt-10 text-xs font-bold text-amber-200/90 md:text-sm">
                          دفعة {GRADUATION_YEAR}
                        </span>
                      </button>
                    </Reveal>
                  ))}
                </div>

                <div className="mx-auto mt-10 flex max-w-md items-center gap-4">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300/50" />
                  <GraduationCap className="h-6 w-6 shrink-0 text-amber-300/80" />
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300/50" />
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* سجل الخريجين حسب الدفعات */}
        {ALUMNI.length > 0 ? (
          years.map((year) => (
            <div key={year} className="mt-16 first:mt-14">
              <Reveal>
                <h3 className="mb-8 flex items-center gap-4 text-2xl font-bold text-navy">
                  دفعة {year}
                  <span className="h-px flex-1 bg-navy/10" />
                </h3>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {ALUMNI.filter((person) => person.graduationYear === year).map((person, index) => {
                  const photoIndex = withPhotos.indexOf(person);
                  return (
                    <Reveal key={person.id} delay={(index % 4) * 80}>
                      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-mist ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                        {person.photo ? (
                          <button
                            type="button"
                            onClick={() => setActiveIndex(portraits.length + photoIndex)}
                            aria-label={`تكبير صورة ${person.name ?? `خريج ${year}`}`}
                            className="block aspect-[4/5] w-full overflow-hidden"
                          >
                            <img
                              src={person.photo}
                              alt={person.name ?? `خريج ${year}`}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                          </button>
                        ) : (
                          <span className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-navy to-royal">
                            <GraduationCap className="h-12 w-12 text-sky/70" />
                          </span>
                        )}
                        <span className="flex flex-col gap-1 p-5">
                          {person.name && <span className="font-bold text-navy">{person.name}</span>}
                          {person.achievement && (
                            <span className="text-sm leading-[1.5] text-ink/75">{person.achievement}</span>
                          )}
                        </span>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="mt-10">
           
          </div>
        )}
      </div>

      <Lightbox
        images={[...portraits, ...registryImages]}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
}
