
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronDown,
} from 'lucide-react';

import Reveal from '@/components/Reveal';
import { SITE } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-0 items-end overflow-hidden bg-navy text-white"
    >
      <img
        src={SITE.heroImage}
        alt="طلاب مدرسة العيص الثانوية للبنين"
        decoding="async"
        className="hero-image-in absolute inset-0 h-full w-full object-contain object-center"
      />

      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/15" />

      <div
        className="pointer-events-none absolute -end-24 top-1/4 hidden h-72 w-72 rounded-full border border-white/15 sm:block"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -end-12 top-[29%] hidden h-48 w-48 rounded-full border border-sky/20 sm:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8 md:pb-32">
        <div className="max-w-3xl">
          <Reveal delay={120}>
            <h1 className="max-w-[15ch] text-[clamp(2.55rem,10vw,4.5rem)] font-bold leading-[1.13] tracking-tight md:text-6xl lg:text-7xl">
              {SITE.name}
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 text-xl font-medium text-sky sm:mt-6 sm:text-2xl md:text-3xl">
              {SITE.tagline}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-8 text-white/85 sm:mt-6 sm:text-base md:text-lg">
              {SITE.heroIntro}
            </p>
          </Reveal>

          {/* المقيمون المدققون */}
          <Reveal delay={440}>
            <div className="mt-7 max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white sm:text-base">
                <BadgeCheck className="h-5 w-5 text-sky" aria-hidden="true" />
                اسماء المدقق
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {['المنثى القطامين', 'ياسر الحناقطه'].map((name) => (
                  <li
                    key={name}
                    className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-navy-deep/20 backdrop-blur-md transition-colors hover:bg-white/15"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-white/65">
                        المقيم المدقق
                      </span>

                      <span className="mt-1 block break-words text-sm font-bold text-white sm:text-base">
                        {name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-7 grid gap-3 sm:mt-10 sm:flex sm:flex-row sm:gap-4">
              <a
                href="#business"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy shadow-lg shadow-navy-deep/30 transition duration-300 hover:-translate-y-0.5 hover:bg-sky sm:min-h-14 sm:px-7 sm:text-base"
              >
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                اكتشف تخصص الأعمال

                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:min-h-14 sm:px-7 sm:text-base"
              >
                شاهد أعمال طلابنا
              </a>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <p className="mt-6 flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
              <span className="h-px w-6 bg-jred" />
              تعلّم تطبيقي · مهارات حقيقية · مستقبل واعد
            </p>
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        aria-label="التمرير إلى الأسفل"
        className="absolute bottom-5 start-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/75 transition hover:text-white sm:bottom-8"
      >
        <ChevronDown className="h-6 w-6 animate-bounce sm:h-7 sm:w-7" />
      </a>
    </section>
  );
}
