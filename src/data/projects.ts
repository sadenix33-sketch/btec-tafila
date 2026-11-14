import type { Project } from '@/data/types';

// روابط الملفات على Google (مستند gdoc / عرض تقديمي gslides) تُعرض داخل الموقع بنافذة معاينة.
export const PROJECTS: Project[] = [
  {
    id: 'business-ethics',
    title: 'أخلاقيات العمل والمسؤولية الاجتماعية للشركات',
    summary:
      'دراسة تطبيقية تتناول مفهوم المسؤولية الاجتماعية للشركات وسماتها، وتحليل أثر ممارسات المؤسسات على المجتمع والبيئة والاقتصاد، مع دراسة ومقارنة نماذج من شركات عالمية مثل طيران الإمارات وNKG وTesla.',
    field: 'أخلاقيات العمل – Business Ethics',
    level: 'الصف الثاني الثانوي',
    type: 'دراسة حالة',
    files: [
      {
        kind: 'gdoc',
        url: 'https://docs.google.com/document/d/11P13gnwyvSmB99Wnh0IgZKRovD7O9HP_/edit?usp=sharing',
      },
      {
        kind: 'gslides',
        url: 'https://docs.google.com/presentation/d/14M1DotKaYT6Uax_U6xbNMH-2KaEQUm48/edit?usp=sharing',
      },
    ],
  },
  {
    id: 'business-decision-making',
    title: 'اتخاذ قرارات الأعمال',
    summary:
      'مشروع تطبيقي يتناول تحليل العوامل المؤثرة في اتخاذ القرار التجاري، ودراسة حالة مؤسسة أزياء مستدامة، ومقارنة البدائل المتاحة باستخدام التحليل المالي والعوامل الاقتصادية والاجتماعية والتكنولوجية والبيئية والقانونية، وصولاً إلى تقديم توصيات مدعومة بالبيانات.',
    field: 'اتخاذ القرارات – Business Decision Making',
    level: 'الصف الثاني الثانوي',
    type: 'مشروع',
    files: [
      {
        kind: 'gdoc',
        url: 'https://docs.google.com/document/d/11zilcr7RUG7KFXSG1mEhzNoINPC3x6KL/edit?usp=sharing',
      },
      {
        kind: 'gslides',
        url: 'https://docs.google.com/presentation/d/1us73DTCYnfEn4BvbWBfeJVrgU2AAUknf/edit?usp=sharing',
      },
    ],
  },
];
