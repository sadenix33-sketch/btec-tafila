import { Facebook, Globe, Instagram, Youtube, type LucideIcon } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import { CONTACT } from '@/data/contact';
import { NAV_ITEMS, SITE } from '@/data/site';
import type { SocialLink } from '@/data/types';

const SOCIAL_ICONS: Record<SocialLink['platform'], LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  website: Globe,
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div className="flex flex-col gap-6">
          <BrandMark />
          <p className="text-lg font-medium text-white">{SITE.tagline}</p>
          <p className="text-sm leading-[1.5]">
            {SITE.school} – {SITE.region}
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold text-white">روابط سريعة</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-sky">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold text-white">تابعونا</h3>
          {CONTACT.socials.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {CONTACT.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.platform];
                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          ) : (
            <p className="text-sm">روابط التواصل الاجتماعي قيد الإضافة.</p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm md:flex-row md:px-8">
          <p>{SITE.quote}</p>
          <p className="text-white/60">© {new Date().getFullYear()} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}
