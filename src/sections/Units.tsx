import { useState } from 'react';
import { BookOpen, ChevronDown, Clock3, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { UNIT_GROUPS } from '@/data/units';
import type { SemesterPlan, UnitGroup } from '@/data/types';

const SEMESTER_DIGITS = ['١', '٢', '٣'];

/** صياغة عدد المواد بالعربية الصحيحة. */
function countLabel(count: number): string {
  if (count <= 0) return 'لا مواد';
  if (count === 1) return 'مادة واحدة';
  if (count === 2) return 'مادتان';
  if (count <= 10) return `${count} مواد`;
  return `${count} مادة`;
}

function groupTotal(group: UnitGroup): number {
  return (group.semesters ?? []).reduce((sum, semester) => sum + semester.subjects.length, 0);
}

function SemesterCard({ semester, index }: { semester: SemesterPlan; index: number }) {
  return (
    <div className="rounded-2xl bg-sky-soft/70 p-5 ring-1 ring-navy/5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white">
          {SEMESTER_DIGITS[index] ?? index + 1}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-navy">{semester.label}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink/55">
            <Clock3 className="h-3.5 w-3.5" />
            {countLabel(semester.subjects.length)}
          </p>
        </div>
      </div>
      <ul className="mt-4 flex flex-col gap-1.5">
        {semester.subjects.map((subject) => (
          <li
            key={subject}
            className="flex items-start gap-2 rounded-xl bg-white px-3 py-2 text-[13px] font-medium leading-[1.55] text-navy ring-1 ring-navy/5"
          >
            <BookOpen className="mt-1 h-3.5 w-3.5 shrink-0 text-royal" />
            <span>{subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** الشاشات الأكبر: بطاقة صف مفتوحة بثلاثة أعمدة للفصول. */
function GradePanelDesktop({ group }: { group: UnitGroup }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:p-7">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-royal text-white shadow-md shadow-navy/20">
          <GraduationCap className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-navy md:text-2xl">{group.grade}</h3>
          <p className="mt-0.5 text-sm text-ink/60">{group.title}</p>
        </div>
        <span className="rounded-full bg-mist px-3.5 py-1.5 text-xs font-bold text-navy">
          {countLabel(groupTotal(group))}
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {(group.semesters ?? []).map((semester, index) => (
          <SemesterCard key={semester.id} semester={semester} index={index} />
        ))}
      </div>
    </div>
  );
}

/** الهواتف: أكورديون مضغوط يوفّر المساحة. */
function GradeAccordion({
  group,
  open,
  onToggle,
}: {
  group: UnitGroup;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-4 text-start transition-colors hover:bg-sky-soft/40"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-royal text-white">
          <GraduationCap className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-bold text-navy">{group.grade}</span>
          <span className="mt-0.5 block truncate text-xs text-ink/55">{group.title}</span>
        </span>
        <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-[11px] font-bold text-navy">
          {countLabel(groupTotal(group))}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-royal transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 border-t border-navy/5 p-4">
            {(group.semesters ?? []).map((semester, index) => (
              <SemesterCard key={semester.id} semester={semester} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Units() {
  const [openId, setOpenId] = useState<string | null>(UNIT_GROUPS[0]?.id ?? null);

  return (
    <section id="units" className="scroll-mt-24 bg-mist py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="الوحدات الدراسية"
          title="خطة المواد الدراسية"
          description="مواد تخصص إدارة الأعمال موزعة على ثلاثة فصول دراسية في كل صف — افتح أي صف لاستكشاف موادّه بالتفصيل."
        />

        {/* الهواتف: أكورديون مضغوط */}
        <div className="mt-10 flex flex-col gap-3 md:hidden">
          {UNIT_GROUPS.map((group, index) => (
            <Reveal key={group.id} delay={index * 80}>
              <GradeAccordion
                group={group}
                open={openId === group.id}
                onToggle={() =>
                  setOpenId((current) => (current === group.id ? null : group.id))
                }
              />
            </Reveal>
          ))}
        </div>

        {/* الشاشات الأكبر: كل الصفوف ظاهرة مباشرة */}
        <div className="mt-12 hidden flex-col gap-6 md:flex">
          {UNIT_GROUPS.map((group, index) => (
            <Reveal key={group.id} delay={index * 100}>
              <GradePanelDesktop group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
