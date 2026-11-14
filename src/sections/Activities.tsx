import { useEffect, useMemo, useState } from 'react';
import {
  Building2,
  Clapperboard,
  MoveHorizontal,
  Play,
  Smartphone,
  Star,
  Video as VideoIcon,
} from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import Modal from '@/components/Modal';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { getYouTubeId } from '@/lib/video';
import { VIDEOS } from '@/data/videos';
import type { Video } from '@/data/types';

/**
 * سلسلة مصادر الصورة المصغرة حسب اتجاه الفيديو:
 * - العمودي (شورتس): oar2 يعطي الأبعاد الأصلية 9/16، ثم بدائل 16/9 نقصها بـ object-cover.
 * - الأفقي: نبدأ بأعلى جودة متاحة لأن hqdefault يكون بعمودين أسودين (4/3).
 */
function thumbCandidates(id: string, orientation: 'horizontal' | 'vertical'): string[] {
  if (orientation === 'vertical') {
    return [
      `https://i.ytimg.com/vi/${id}/oar2.jpg`,
      `https://i.ytimg.com/vi/${id}/hq720.jpg`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    ];
  }
  return [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hq720.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  ];
}

function VideoThumb({ video, imgClassName = '' }: { video: Video; imgClassName?: string }) {
  const id = getYouTubeId(video.url);
  const orientation = video.orientation ?? 'horizontal';
  const sources = useMemo(
    () => (id ? thumbCandidates(id, orientation) : []),
    [id, orientation],
  );
  const [src, setSrc] = useState<string | null>(null);
  const [resolved, setResolved] = useState(false);

  // نتحقق من كل مصدر قبل عرضه: يوتيوب أحياناً يرجع صورة رمادية وهمية (120×90)
  // بدون خطأ تحميل، لذا نفحص الأبعاد الفعلية وننتقل للبديل التالي عند الحاجة.
  useEffect(() => {
    if (sources.length === 0) {
      setResolved(true);
      return;
    }
    let cancelled = false;
    setResolved(false);
    setSrc(null);

    const probe = new Image();
    const detach = () => {
      probe.onload = null;
      probe.onerror = null;
    };

    const attempt = (step: number) => {
      if (cancelled) return;
      if (step >= sources.length) {
        setResolved(true);
        return;
      }
      probe.onload = () => {
        detach();
        const placeholder = probe.naturalWidth <= 320 && probe.naturalHeight <= 180;
        if (placeholder) {
          attempt(step + 1);
          return;
        }
        if (!cancelled) {
          setSrc(sources[step]);
          setResolved(true);
        }
      };
      probe.onerror = () => {
        detach();
        attempt(step + 1);
      };
      probe.src = sources[step];
    };

    attempt(0);
    return () => {
      cancelled = true;
      detach();
    };
  }, [sources]);

  if (!resolved) {
    return <span className="block h-full w-full bg-navy" />;
  }

  if (!src) {
    return (
      <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-royal">
        <VideoIcon className="h-10 w-10 text-sky/70" />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={video.title}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  );
}

function VideoPlayer({ video }: { video: Video }) {
  const youtubeId = getYouTubeId(video.url);
  const vertical = video.orientation === 'vertical';
  const frameClass = vertical
    ? 'mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-xl bg-navy-deep'
    : 'aspect-video w-full overflow-hidden rounded-xl bg-navy-deep';

  if (youtubeId) {
    return (
      <div className={frameClass}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={video.title}
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return <video src={video.url} controls preload="metadata" className={frameClass} />;
}

function SectorChip({ video, onDark = false }: { video: Video; onDark?: boolean }) {
  if (!video.sector) return null;
  return (
    <span
      className={
        onDark
          ? 'inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm'
          : 'inline-flex w-fit items-center gap-1.5 rounded-full bg-sky px-3 py-1 text-xs font-medium text-royal'
      }
    >
      <Building2 className="h-3.5 w-3.5" />
      {video.sector}
    </span>
  );
}

export default function Activities() {
  const [active, setActive] = useState<Video | null>(null);

  const featured =
    VIDEOS.find((video) => video.featured) ??
    VIDEOS.find((video) => video.orientation !== 'vertical') ??
    VIDEOS[0];
  const shorts = VIDEOS.filter((video) => video.orientation === 'vertical');
  const horizontal = VIDEOS.filter(
    (video) => video.orientation !== 'vertical' && video !== featured,
  );

  return (
    <section id="activities" className="scroll-mt-24 bg-mist py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="المشاركات والأنشطة"
          title="طلابنا في الميدان"
          description="توثيق مرئي لتجارب طلبتنا التطبيقية: شورتس قصيرة من الميدان، وجولات موسّعة في قطاعات الأعمال الحقيقية."
        />

        {VIDEOS.length === 0 ? (
          <div className="mt-14">
            <EmptyState
              icon={VideoIcon}
              title="الفيديوهات قيد الإضافة"
              text="ستظهر هنا مشاركات الطلبة وفعالياتهم فور توفرها."
            />
          </div>
        ) : (
          <div className="mt-12 flex flex-col gap-14 md:mt-16 md:gap-20">
            {/* البطاقة المميزة: التجربة الأبرز فوق القسم */}
            <Reveal>
              <article className="overflow-hidden rounded-3xl bg-navy shadow-xl shadow-navy/20 ring-1 ring-navy/10">
                <div className="grid lg:grid-cols-5">
                  <button
                    type="button"
                    onClick={() => setActive(featured)}
                    aria-label={`تشغيل الفيديو: ${featured.title}`}
                    className="group relative block aspect-video w-full overflow-hidden text-start lg:col-span-3"
                  >
                    <VideoThumb
                      video={featured}
                      imgClassName="transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent lg:bg-gradient-to-l" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy shadow-xl transition duration-500 group-hover:scale-110 md:h-16 md:w-16">
                        <Play className="h-6 w-6 fill-navy md:h-7 md:w-7" />
                      </span>
                    </span>
                    <span className="absolute start-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-300/95 px-3 py-1 text-xs font-bold text-navy shadow-lg">
                      <Star className="h-3.5 w-3.5 fill-navy" />
                      الفيديو المميز
                    </span>
                  </button>

                  <div className="flex flex-col gap-4 p-6 md:p-8 lg:col-span-2 lg:justify-center lg:p-10">
                    <span className="w-fit rounded-full bg-sky/15 px-3 py-1 text-xs font-medium text-sky ring-1 ring-sky/30">
                      {featured.category}
                    </span>
                    <h3 className="text-xl font-bold leading-[1.4] text-white md:text-2xl">
                      {featured.title}
                    </h3>
                    <p className="line-clamp-4 text-sm leading-[1.75] text-white/70 md:line-clamp-none md:text-[15px]">
                      {featured.summary}
                    </p>
                    <SectorChip video={featured} onDark />
                    <button
                      type="button"
                      onClick={() => setActive(featured)}
                      className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition duration-300 hover:bg-sky active:scale-[0.98]"
                    >
                      <Play className="h-4 w-4 fill-navy" />
                      شاهد الفيديو كاملاً
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* شورتس من الميدان: بطاقات عمودية 9/16 بتمرير أفقي */}
            {shorts.length > 0 && (
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-navy md:text-xl">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-jred to-rose-400 text-white shadow-lg shadow-jred/25">
                      <Smartphone className="h-5 w-5" />
                    </span>
                    شورتس من الميدان
                    <span className="hidden text-sm font-medium text-ink/50 sm:inline">
                      ({shorts.length} مقاطع قصيرة)
                    </span>
                  </h3>
                  <span className="flex items-center gap-2 text-xs font-medium text-royal md:hidden">
                    <MoveHorizontal className="h-4 w-4" />
                    اسحب للاستكشاف
                  </span>
                </div>
                <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide md:mx-0 md:px-0">
                  {shorts.map((video, index) => (
                    <Reveal
                      key={video.id}
                      delay={Math.min(index * 80, 240)}
                      className="w-[220px] shrink-0 snap-start sm:w-[250px]"
                    >
                      <button
                        type="button"
                        onClick={() => setActive(video)}
                        aria-label={`تشغيل الفيديو: ${video.title}`}
                        className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-navy text-start shadow-sm ring-1 ring-navy/10 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/25 active:scale-[0.98]"
                      >
                        <VideoThumb
                          video={video}
                          imgClassName="transition duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/25 to-transparent" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur transition duration-500 group-hover:scale-110">
                            <Play className="h-5 w-5 fill-navy" />
                          </span>
                        </span>
                        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4">
                          <SectorChip video={video} onDark />
                          <span className="line-clamp-3 text-sm font-bold leading-[1.45] text-white">
                            {video.title}
                          </span>
                        </span>
                      </button>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* تجارب موسّعة: بطاقات أفقية 16/9 */}
            {horizontal.length > 0 && (
              <div>
                <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-navy md:text-xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-royal-soft text-white shadow-lg shadow-royal/25">
                    <Clapperboard className="h-5 w-5" />
                  </span>
                  تجارب موسّعة
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {horizontal.map((video, index) => (
                    <Reveal key={video.id} delay={(index % 2) * 100}>
                      <button
                        type="button"
                        onClick={() => setActive(video)}
                        aria-label={`تشغيل الفيديو: ${video.title}`}
                        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-start shadow-sm ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10 active:scale-[0.99]"
                      >
                        <span className="relative block aspect-video w-full overflow-hidden bg-navy">
                          <VideoThumb
                            video={video}
                            imgClassName="transition duration-700 group-hover:scale-105"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-navy/20 transition duration-500 group-hover:bg-navy/40">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy shadow-lg transition duration-500 group-hover:scale-110">
                              <Play className="h-6 w-6 fill-navy" />
                            </span>
                          </span>
                        </span>

                        <span className="flex flex-1 flex-col gap-3 p-6">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-royal">
                              {video.category}
                            </span>
                            <SectorChip video={video} />
                          </span>
                          <span className="text-lg font-bold leading-[1.35] text-navy">
                            {video.title}
                          </span>
                          <span className="text-sm leading-[1.6] text-ink/75">{video.summary}</span>
                        </span>
                      </button>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {active && (
        <Modal title={active.title} onClose={() => setActive(null)} wide>
          <VideoPlayer video={active} />
        </Modal>
      )}
    </section>
  );
}
