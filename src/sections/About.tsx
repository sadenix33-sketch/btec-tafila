import { Eye, Target } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { ABOUT } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="نبذة عن المدرسة" title="من نحن؟" />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          {ABOUT.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 100}>
              <p
                className={`leading-[1.5] text-ink/85 ${
                  index === 0 ? 'text-xl font-medium text-navy md:text-2xl' : 'text-base md:text-lg'
                }`}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Reveal delay={100}>
              <article className="h-full rounded-2xl bg-navy p-8 text-white">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-sky">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mb-3 text-xl font-bold">رؤيتنا</h3>
                <p className="leading-[1.5] text-white/85">{ABOUT.vision}</p>
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="h-full rounded-2xl border border-royal/15 bg-sky-soft p-8 text-navy">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-royal shadow-sm">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mb-3 text-xl font-bold">رسالتنا</h3>
                <p className="leading-[1.5] text-ink/85">{ABOUT.mission}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
