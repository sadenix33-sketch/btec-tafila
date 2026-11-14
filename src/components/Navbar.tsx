import { useEffect, useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import { NAV_ITEMS } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const solid = scrolled && !open;
  const linkTone = solid
    ? 'text-navy hover:bg-sky'
    : 'text-white hover:bg-white/15';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-white/95 text-navy shadow-[0_8px_30px_rgba(16,42,86,0.08)] backdrop-blur-md'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <a href="#home" aria-label="الصفحة الرئيسية">
            <BrandMark tone={solid ? 'dark' : 'light'} compact />
          </a>

          <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors duration-300 ${linkTone}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors xl:hidden ${
              solid || open
                ? 'border-navy/10 bg-white text-navy hover:bg-sky'
                : 'border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <button
        type="button"
        aria-label="إغلاق القائمة"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-navy-deep/55 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 end-0 z-50 flex w-[min(23rem,90vw)] flex-col overflow-y-auto overscroll-contain bg-[#f7f9fc] px-4 pb-5 pt-4 text-navy shadow-2xl transition-[transform,visibility] duration-300 ease-out xl:hidden ${
          open ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <div className="relative mb-5 overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-navy-deep via-navy to-royal p-5 text-white shadow-lg shadow-navy/15">
          <div
            className="pointer-events-none absolute -end-10 -top-14 h-40 w-40 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="إغلاق القائمة"
            className="absolute start-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative flex items-center gap-3 pe-12">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-sky">BTEC · العيص</p>
              <p className="mt-1 text-sm font-medium text-white/75">مدرسة التعليم المهني والتقني</p>
            </div>
          </div>
          <h2 className="relative mt-5 text-xl font-bold">استكشف المدرسة</h2>
          <p className="relative mt-1 text-sm text-white/70">اختر صفحة واكتشف عالم الأعمال والتعلّم التطبيقي.</p>
        </div>
        <nav aria-label="القائمة الجانبية" className="flex flex-col gap-1.5">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="group flex min-h-11 items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-navy transition duration-200 hover:bg-sky-soft hover:text-royal active:scale-[0.99]"
            >
              {item.label}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[0.65rem] font-bold tabular-nums text-royal/60 transition-colors group-hover:bg-sky">
                {String(index + 1).padStart(2, '0')}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-royal px-5 font-bold text-white shadow-md shadow-royal/20 transition duration-200 hover:bg-navy active:scale-[0.99]"
        >
          تواصل معنا
        </a>
      </aside>
    </>
  );
}
