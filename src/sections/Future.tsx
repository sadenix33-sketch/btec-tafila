import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { FUTURE_FOLLOWUP, FUTURE_LEAD, FUTURE_SKILLS } from '@/data/business';

const RING_RADIUS = 42;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    left: `${50 + RING_RADIUS * Math.cos(angle)}%`,
    top: `${50 + RING_RADIUS * Math.sin(angle)}%`,
  };
}

export default function Future() {
  return (
    <section id="future" className="scroll-mt-24 overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="هدف التخصص" title="نصنع مهارات المستقبل" />
          <Reveal>
            <p className="text-base leading-[1.5] text-ink/80 md:text-lg">{FUTURE_LEAD}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-[1.5] text-ink/80 md:text-lg">{FUTURE_FOLLOWUP}</p>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto hidden aspect-square w-full max-w-md md:block">
          <div className="absolute inset-[8%] rounded-full border border-dashed border-royal/25" />
          <div className="absolute inset-[24%] rounded-full bg-sky-soft" />
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center text-sm font-bold text-white shadow-xl shadow-navy/30">
            مهارات
            <br />
            المستقبل
          </div>
          {FUTURE_SKILLS.map((skill, index) => {
            const position = nodePosition(index, FUTURE_SKILLS.length);
            return (
              <span
                key={skill}
                style={position}
                className="absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-royal/20 bg-white text-center text-sm font-medium text-navy shadow-md transition duration-300 hover:scale-110 hover:bg-royal hover:text-white"
              >
                {skill}
              </span>
            );
          })}
        </Reveal>

        <ul className="flex flex-wrap gap-3 md:hidden">
          {FUTURE_SKILLS.map((skill) => (
            <li key={skill} className="rounded-full border border-royal/20 bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
