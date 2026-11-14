import { Award, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import {
  BUSINESS_ACCREDITATION,
  BUSINESS_LEAD,
  BUSINESS_PILLARS,
  BUSINESS_SKILLS,
} from '@/data/business';

export default function Business() {
  return (
    <section id="business" className="scroll-mt-24 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="BTEC · Business" title="تخصص إدارة الأعمال (Business)" />

        <Reveal>
          <p className="mt-10 max-w-4xl border-s-4 border-jred ps-6 text-xl leading-[1.5] text-navy md:text-2xl">
            {BUSINESS_LEAD}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BUSINESS_PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 120}>
              <article className="group h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky text-royal transition duration-500 group-hover:bg-royal group-hover:text-white">
                  <pillar.icon className="h-7 w-7" />
                </span>
                <h3 className="mb-3 text-xl font-bold text-navy">{pillar.title}</h3>
                <p className="leading-[1.5] text-ink/80">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-navy p-6 text-white md:flex-row md:items-center md:gap-6 md:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky">
              <Award className="h-6 w-6" />
            </span>
            <p className="leading-[1.5] text-white/90">{BUSINESS_ACCREDITATION}</p>
            <span className="flex shrink-0 items-center gap-2 text-sm text-sky">
              <ShieldCheck className="h-4 w-4" />
              معتمد
            </span>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mb-8 mt-20 text-2xl font-bold text-navy md:text-3xl">
            المهارات التي يكتسبها الطالب
          </h3>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {BUSINESS_SKILLS.map((skill, index) => (
            <Reveal key={skill.label} delay={(index % 5) * 80}>
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky text-royal transition duration-300 group-hover:bg-white/10 group-hover:text-sky">
                  <skill.icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-navy transition duration-300 group-hover:text-white">
                  {skill.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
