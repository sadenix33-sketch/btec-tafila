import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { LEVELS } from '@/data/business';

export default function Levels() {
  return (
    <section id="levels" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="المسار الدراسي"
          title="رحلتك التعليمية في عالم الأعمال"
          description="يمتد المستوى الثالث على عامين دراسيين، ويتدرج الطالب من أساسيات الأعمال إلى تطبيقها في مشاريع ومواقف حقيقية."
        />

        <div className="relative mt-16">
          <div className="absolute bottom-0 start-[27px] top-0 w-px bg-royal/20 md:hidden" aria-hidden="true" />
          <div className="absolute start-0 end-0 top-[52px] hidden h-px bg-royal/20 md:block" aria-hidden="true" />

          <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {LEVELS.map((level, index) => (
              <li key={level.tag} className="relative ps-16 md:ps-0">
                <span
                  className="absolute start-[21px] top-8 h-3 w-3 rounded-full bg-royal ring-4 ring-white md:hidden"
                  aria-hidden="true"
                />
                <Reveal delay={index * 150} className="h-full">
                  <article className="group relative flex h-full flex-col gap-5 rounded-2xl border border-navy/10 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-royal/30 hover:shadow-xl hover:shadow-royal/10">
                    <span
                      className="absolute -top-3 end-6 hidden h-3 w-3 rounded-full bg-royal ring-4 ring-white md:block"
                      aria-hidden="true"
                    />
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-royal">
                        {level.tag}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition duration-500 group-hover:bg-royal">
                        <level.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-jred">{level.grade}</p>
                      <h3 className="text-xl font-bold text-navy">{level.title}</h3>
                    </div>
                    <p className="leading-[1.5] text-ink/80">{level.body}</p>
                    {level.outcome && (
                      <p className="mt-auto rounded-xl bg-mist p-4 text-sm leading-[1.5] text-navy">
                        {level.outcome}
                      </p>
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
