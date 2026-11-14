import {
  Award,
  Building2,
  BookOpen,
  Briefcase,
  CalendarCheck,
  FolderKanban,
  Layers,
  Megaphone,
  Puzzle,
  Rocket,
  Scale,
  Sparkles,
  Target,
  Users,
  Wallet,
} from 'lucide-react';
import type { BusinessPillar, BusinessSkill, LevelStep } from '@/data/types';

export const BUSINESS_LEAD =
  'يعرّف تخصص BTEC في إدارة الأعمال برواد الأعمال ومفاهيم تأسيس المشاريع وإدارتها وتطويرها، من خلال التعلم التطبيقي والمهام العملية.';

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    icon: Building2,
    title: 'فهم عالم الأعمال',
    text: 'التعرف إلى المؤسسات وأهدافها وأنواعها، وفهم طريقة عمل الأسواق والعوامل المؤثرة في نجاح المشاريع.',
  },
  {
    icon: Target,
    title: 'مهارات تصنع القرار',
    text: 'تنمية مهارات التخطيط والتنظيم واتخاذ القرارات وحل المشكلات والتفكير الإبداعي والريادة من خلال تطبيقات عملية.',
  },
];

export const BUSINESS_ACCREDITATION =
  'برنامج BTEC المهني والتقني المعتمد، بالتعاون مع مؤسسة بيرسون العالمية.';

export const BUSINESS_SKILLS: BusinessSkill[] = [
  { label: 'إدارة الأعمال', icon: Briefcase },
  { label: 'التسويق', icon: Megaphone },
  { label: 'الإدارة المالية', icon: Wallet },
  { label: 'الموارد البشرية', icon: Users },
  { label: 'التخطيط والتنظيم', icon: CalendarCheck },
  { label: 'اتخاذ القرارات', icon: Scale },
  { label: 'ريادة الأعمال', icon: Rocket },
  { label: 'حل المشكلات', icon: Puzzle },
  { label: 'التفكير الإبداعي', icon: Sparkles },
  { label: 'إعداد المشاريع', icon: FolderKanban },
];

export const LEVELS: LevelStep[] = [
  {
    tag: 'Level 2',
    grade: 'الصف العاشر',
    title: 'المواد',
    body: 'يتعرف المتعلم في هذا المستوى إلى أساسيات إدارة الأعمال ومفهوم المؤسسة وأهدافها وأنواعها ومجالات عملها.',
    outcome:
      'بعد استكمال الوحدات التعليمية ومتطلبات التقييم، يحصل المتعلم على الشهادة المهنية المعتمدة وفق متطلبات البرنامج.',
    icon: BookOpen,
  },
  {
    tag: 'Level 3 · Year 1',
    grade: 'الصف الأول ثانوي',
    title: 'المستوى الثالث – السنة الأولى',
    body: 'التعمق في دراسة عالم الأعمال والعوامل المؤثرة في المؤسسات، والتعرف إلى التخطيط والتسويق والموارد وإدارة المشاريع.',
    icon: Layers,
  },
  {
    tag: 'Level 3 · Year 2',
    grade: 'الصف الثاني عشر (التوجيهي)',
    title: 'المستوى الثالث – السنة الثانية',
    body: 'استكمال الوحدات التعليمية والتطبيقية، وتنفيذ المشاريع والمهام والتقييمات المطلوبة في تخصص إدارة الأعمال.',
    outcome:
      'بعد استيفاء متطلبات البرنامج والتقييم، يحصل المتعلم على الدبلوم المعتمد من مؤسسة بيرسون العالمية وفق المعايير المعتمدة.',
    icon: Award,
  },
];

export const FUTURE_LEAD =
  'تسهم تجربة رواد أعمال الطفيلة BTEC في تنمية المعرفة والمهارات العملية في مجال الأعمال، وتشجع على التفكير الريادي وتطوير الأفكار والمشاريع.';

export const FUTURE_FOLLOWUP =
  'وتفتح هذه المهارات آفاقاً لمواصلة التعليم أو الاندماج في سوق العمل أو إنشاء المشاريع الخاصة.';

export const FUTURE_SKILLS = [
  'القيادة',
  'الابتكار',
  'الريادة',
  'الإدارة',
  'التخطيط',
  'التحليل',
  'التواصل',
  'اتخاذ القرار',
];
