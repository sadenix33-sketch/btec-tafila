import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-sm font-medium text-royal">
          <span className="h-px w-8 bg-jred" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,7vw,2.4rem)] font-bold leading-tight text-navy md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-[1.5] text-ink/75 md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
