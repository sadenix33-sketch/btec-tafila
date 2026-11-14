import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export type GalleryCategory =
  | 'school-activities'
  | 'student-projects'
  | 'participations'
  | 'workshops'
  | 'school-life';

export type GalleryFilter = GalleryCategory | 'all';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}

export type ProjectType = 'تقرير' | 'دراسة حالة' | 'بحث' | 'تحليل' | 'مشروع';

export interface ProjectFile {
  url: string;
  kind: 'pdf' | 'docx' | 'gdoc' | 'gslides';
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  field: string;
  type: ProjectType;
  level?: string;
  file?: ProjectFile;
  /** عدة ملفات للمشروع الواحد: مستند + عرض تقديمي... */
  files?: ProjectFile[];
  cover?: string;
}

export type VideoCategory =
  | 'فيديو طلابي'
  | 'مشاركة وفعالية'
  | 'عرض تقديمي'
  | 'تجربة عملية'
  | 'نشاط وإنجاز';

export interface Video {
  id: string;
  title: string;
  summary: string;
  category: VideoCategory;
  url: string;
  thumbnail?: string;
  /** القطاع أو البيئة التي يطبق فيها الفيديو مفاهيمه. */
  sector?: string;
  /** اتجاه الفيديو: أفقي لليوتيوب العادي، عمودي للشورتس. */
  orientation?: 'horizontal' | 'vertical';
  /** الفيديو المميز الذي يظهر في بطاقة كبيرة أعلى القسم. */
  featured?: boolean;
}

export interface Alumnus {
  id: string;
  graduationYear: number;
  name?: string;
  achievement?: string;
  photo?: string;
}

export interface Unit {
  id: string;
  name: string;
  description: string;
  skills: string[];
  objectives: string[];
  activities: string[];
  relatedProjectIds?: string[];
}

export interface SemesterPlan {
  id: string;
  label: string;
  subjects: string[];
}

export interface UnitGroup {
  id: string;
  title: string;
  grade: string;
  units: Unit[];
  /** خطة المواد الدراسية موزعة على الفصول الدراسية الثلاثة. */
  semesters?: SemesterPlan[];
}

export interface SocialLink {
  platform: 'youtube' | 'instagram' | 'facebook' | 'website';
  label: string;
  url: string;
}

export interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
  socials: SocialLink[];
}

export interface BusinessPillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface BusinessSkill {
  label: string;
  icon: LucideIcon;
}

export interface LevelStep {
  tag: string;
  grade: string;
  title: string;
  body: string;
  outcome?: string;
  icon: LucideIcon;
}
