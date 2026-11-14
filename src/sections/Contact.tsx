import { Facebook, Globe, Instagram, Mail, MapPin, Phone, Youtube, type LucideIcon } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { CONTACT } from '@/data/contact';
import { SITE } from '@/data/site';
import type { SocialLink } from '@/data/types';

const SOCIAL_ICONS: Record<SocialLink['platform'], LucideIcon> = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  website: Globe,
};

interface InfoRow {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export default function Contact() {
  const rows: InfoRow[] = [];
  if (CONTACT.address) rows.push({ icon: MapPin, label: 'العنوان', value: CONTACT.address });
  if (CONTACT.phone) {
    rows.push({ icon: Phone, label: 'الهاتف', value: CONTACT.phone, href: `tel:${CONTACT.phone}` });
  }
  if (CONTACT.email) {
    rows.push({ icon: Mail, label: 'البريد الإلكتروني', value: CONTACT.email, href: `mailto:${CONTACT.email}` });
  }
  const hasDetails = rows.length > 0 || CONTACT.mapUrl || CONTACT.socials.length > 0;

  return (
    <section id="contact" className="scroll-mt-24 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="نسعد بزيارتكم والتواصل معكم"
          description={`${SITE.name} – ${SITE.school}، ${SITE.region}.`}
        />

        {!hasDetails ? (
          <div className="mt-14">
            <EmptyState
              icon={Mail}
              title="بيانات التواصل قيد الإضافة"
              text="ستظهر هنا وسائل التواصل والموقع الجغرافي فور توفرها."
            />
          </div>
        ) : (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {rows.length > 0 && (
              <div className="flex flex-col gap-4 lg:col-span-2">
                {rows.map((row, index) => (
                  <Reveal key={row.label} delay={index * 100}>
                    <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky text-royal">
                        <row.icon className="h-5 w-5" />
                      </span>
                      <div className="flex min-w-0 flex-col gap-1">
                        <span className="text-xs font-medium text-royal">{row.label}</span>
                        {row.href ? (
                          <a href={row.href} className="break-all text-lg font-medium text-navy transition hover:text-royal">
                            {row.value}
                          </a>
                        ) : (
                          <span className="text-lg font-medium text-navy">{row.value}</span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal delay={200} className={rows.length === 0 ? 'lg:col-span-3' : ''}>
              <div className="flex h-full flex-col gap-5 rounded-2xl bg-navy p-8 text-white">
                <h3 className="text-xl font-bold">تابعونا وتواصلوا معنا</h3>
                {CONTACT.mapUrl && (
                  <a
                    href={CONTACT.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-sky"
                  >
                    <MapPin className="h-4 w-4" />
                    الموقع على خرائط Google
                  </a>
                )}
                {CONTACT.socials.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {CONTACT.socials.map((social) => {
                      const Icon = SOCIAL_ICONS[social.platform];
                      return (
                        <a
                          key={social.url}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm transition hover:bg-white/10"
                        >
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
