import type { GalleryCategory, GalleryFilter, GalleryItem } from '@/data/types';

// الصور موجودة في public/images/gallery/ بأسماء دلالية.
// النص القصير (caption) مخصص للقطات المميزة فقط.
export const GALLERY_ITEMS: GalleryItem[] = [
  // ── المشاريع الطلابية ──
  {
    id: 'smart-charge-presentation',
    src: '/images/gallery/proj-smart-charge-presentation.jpg',
    alt: 'طالب يعرض مشروع طفيلة للشحن الذكي على شاشة العرض',
    category: 'student-projects',
    caption: 'مشروع «طفيلة للشحن الذكي».. محطة شحن متنقلة للمركبات الكهربائية',
  },
  {
    id: 'smart-charge-strengths',
    src: '/images/gallery/proj-smart-charge-strengths.jpg',
    alt: 'طالب يشرح نقاط قوة مشروع الشحن الذكي',
    category: 'student-projects',
    caption: 'نقاط قوة المشروع.. فكرة مبتكرة وصديقة للبيئة',
  },
  {
    id: 'smart-charge-model',
    src: '/images/gallery/proj-smart-charge-model.jpg',
    alt: 'نموذج محطة الشحن المتنقلة مع سيارات صغيرة موصولة بالكوابل',
    category: 'student-projects',
    caption: 'مشروع محطة الشحن المتنقل',
  },
  {
    id: 'ev-bus-blueprint',
    src: '/images/gallery/proj-ev-bus-blueprint.jpg',
    alt: 'تصميم ثلاثي الأبعاد لهيكل محطة الشحن المتنقلة',
    category: 'student-projects',
    caption: 'التصميم الهندسي ثلاثي الأبعاد لفكرة المحطة',
  },
  {
    id: 'mix-station-branding',
    src: '/images/gallery/proj-mix-station-branding.jpg',
    alt: 'هوية مشروع مكس سيزون باص الأيس كريم والسناكات',
    category: 'student-projects',
    caption: 'هوية «مكس سيزون».. باص الأيس كريم والسناكات',
  },
  {
    id: 'mix-station-model',
    src: '/images/gallery/proj-mix-station-model.jpg',
    alt: 'طلاب يعرضون نموذج باص مكس سيزون مع قائمة الطعام',
    category: 'student-projects',
    caption: 'نموذج باص «مكس سيزون» أثناء العرض',
  },
  {
    id: 'mix-station-lab',
    src: '/images/gallery/proj-mix-station-lab.jpg',
    alt: 'مختبر المدرسة مزين بالبالونات ونموذج باص الأيس كريم',
    category: 'student-projects',
    caption: 'لحظة العرض: مختبر المدرسة يتحول إلى سوق صغير',
  },
  {
    id: 'craft-prep',
    src: '/images/gallery/proj-craft-prep.jpg',
    alt: 'طلاب يحضرون مواد المشروع في المختبر',
    category: 'student-projects',
  },
  {
    id: 'craft-tools',
    src: '/images/gallery/proj-craft-tools.jpg',
    alt: 'أدوات صناعة نموذج الأيس كريم: مقص، صلصال، وأكواب',
    category: 'student-projects',
  },
  {
    id: 'team-prep',
    src: '/images/gallery/proj-team-prep.jpg',
    alt: 'فريق طلابي يجهز مشروعه حول الحاسوب المحمول',
    category: 'student-projects',
  },

  // ── الورش والتطبيقات العملية ──
  {
    id: 'office-training',
    src: '/images/gallery/wrk-office-training.jpg',
    alt: 'معلم يقدم ورشة تطبيقات مايكروسوفت أوفيس',
    category: 'workshops',
    caption: 'ورشة تطبيقات مايكروسوفت أوفيس',
  },
  {
    id: 'smartboard-prep',
    src: '/images/gallery/wrk-smartboard-prep.jpg',
    alt: 'معلم يستعد للدرس أمام الشاشة التفاعلية',
    category: 'workshops',
  },
  {
    id: 'business-lesson',
    src: '/images/gallery/wrk-business-lesson.jpg',
    alt: 'معلم يشرح خطوات بناء المشروع على السبورة البيضاء',
    category: 'workshops',
    caption: 'خطوات سياسات التسعير',
  },
  {
    id: 'business-lesson',
    src: '/images/gallery/11.jpg',
    alt: '',
    category: 'workshops',
    caption: 'خطوات سياسات التسعير',
  },
  {
    id: 'radio-study',
    src: '/images/gallery/wrk-radio-study.jpg',
    alt: '',
    category: 'workshops',
    caption: '',
  },
  {
    id: 'safety-lab',
    src: '/images/gallery/wrk-safety-lab.jpg',
    alt: 'شرح لتجهيز الطلابه لمشاريعهم النهايئة',
    category: 'workshops',
    caption: 'شرح لتجهيز الطلابه لمشاريعهم النهايئة',
  },
  {
    id: 'btec-lecture',
    src: '/images/gallery/wrk-btec-lecture.jpg',
    alt: 'معلم يقدم محاضرة قرب ملصقات وحدات BTEC',
    category: 'workshops',
  },
  {
    id: 'financial-whiteboard',
    src: '/images/gallery/wrk-financial-whiteboard.jpg',
    alt: 'سبورة مملوءة بحسابات الإيرادات والتكاليف',
    category: 'workshops',
    caption: 'شرح واستخرج المعادلات المالية',
  },
  {
    id: 'break-even-screen',
    src: '/images/gallery/wrk-break-even-screen.jpg',
    alt: 'حساب نقطة التعادل على شاشة الحاسوب',
    category: 'workshops',
  },
  {
    id: 'pearson-wall',
    src: '/images/gallery/wrk-pearson-wall.jpg',
    alt: 'ملصقات ملونة لوحدات Pearson BTEC على الحائط',
    category: 'workshops',
  },

  // ── المشاركات والفعاليات ──
  {
    id: 'evaluation-committee',
    src: '/images/gallery/part-evaluation-committee.jpg',
    alt: 'طالب يناقش مشروعه أمام لجنة تقييم من المعلمين',
    category: 'participations',
    caption: 'مناقشة المشاريع أمام لجنة التقييم',
  },
  {
    id: 'feedback-session',
    src: '/images/gallery/part-feedback-session.jpg',
    alt: 'معلم يوجه طالباً أثناء مراجعة عمله على الحاسوب',
    category: 'participations',
    caption: 'توجيه فردي ومتابعة أداء الطلبة',
  },
  {
    id: 'radio-recording',
    src: '/images/gallery/part-radio-recording.jpg',
    alt: 'طلاب يسجلون فقرة إذاعية في فناء المدرسة',
    category: 'participations',
    caption: 'تسجيل فقرة إذاعية في فناء المدرسة',
  },
  {
    id: 'teachers-visit',
    src: '/images/gallery/part-teachers-visit.jpg',
    alt: 'معلمون في زيارة لمختبر الحاسوب',
    category: 'participations',
  },

  // ── الأنشطة المدرسية ──
  {
    id: 'btec-team',
    src: '/images/gallery/act-btec-team.jpg',
    alt: 'صورة جماعية لطلبة ومعلمي  العيص BTEC',
    category: 'school-activities',
    caption: 'خريجين اعمال الطفيلة BTEC',
  },
  {
    id: 'btec-team-wide',
    src: '/images/gallery/act-btec-team-wide.jpg',
    alt: 'صورة جماعية لفريق مدرسة العيص الثانوية للبنين ضمن برنامج BTEC',
    category: 'school-activities',
  },
  {
    id: 'economy-presentation',
    src: '/images/gallery/act-economy-presentation.jpg',
    alt: 'تدريب الطلبة على مشاريع تخرجهم',
    category: 'school-activities',
    caption: 'تدريب الطلبة على مشاريع تخرجهم',
  },
  {
    id: 'btec-assignment',
    src: '/images/gallery/act-btec-assignment.jpg',
    alt: 'طالب يكتب تكليف وحدة BTEC على الحاسوب',
    category: 'school-activities',
  },
  {
    id: 'lab-discussion',
    src: '/images/gallery/act-lab-discussion.jpg',
    alt: 'طلاب يجلسون حول طاولة المختبر في نقاش جماعي',
    category: 'school-activities',
    caption: 'جلسة نقاش جماعية في المختبر',
  },
  {
    id: 'computer-lab-meeting',
    src: '/images/gallery/act-computer-lab-meeting.jpg',
    alt: 'لقاء بين المعلمين والطلبة في مختبر الحاسوب',
    category: 'school-activities',
  },
  {
    id: 'lab-session',
    src: '/images/gallery/act-lab-session.jpg',
    alt: 'جلسة عرض في المختبر مع بالونات ونماذج',
    category: 'school-activities',
  },

  // ── لحظات من حياة المدرسة ──
  {
    id: 'focused-student',
    src: '/images/gallery/life-focused-student.jpg',
    alt: 'طالب يركز أمام شاشة حاسوبه',
    category: 'school-life',
  },
  {
    id: 'sunlit-student',
    src: '/images/gallery/life-sunlit-student.jpg',
    alt: 'طالب يعمل على حاسوبه تحت أشعة الشمس',
    category: 'school-life',
    caption: 'العمل ع مشروع',
  },
  {
    id: 'team-pc',
    src: '/images/gallery/life-team-pc.jpg',
    alt: 'طلاب يتشاركون العمل حول حاسوب واحد',
    category: 'school-life',
  },
  {
    id: 'peer-talk',
    src: '/images/gallery/life-peer-talk.jpg',
    alt: 'طالب يشرح فكرة لزملائه في مختبر الحاسوب',
    category: 'school-life',
  },
];

export const GALLERY_FILTERS: { value: GalleryFilter; label: string }[] = [
  { value: 'all', label: 'جميع الصور' },
  { value: 'student-projects', label: 'المشاريع الطلابية' },
  { value: 'workshops', label: 'الورش والتطبيقات العملية' },
  { value: 'participations', label: 'المشاركات والفعاليات' },
  { value: 'school-activities', label: 'الأنشطة المدرسية' },
  { value: 'school-life', label: 'لحظات من حياة المدرسة' },
];

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategory, string> = {
  'school-activities': 'الأنشطة المدرسية',
  'student-projects': 'المشاريع الطلابية',
  participations: 'المشاركات والفعاليات',
  workshops: 'الورش والتطبيقات العملية',
  'school-life': 'لحظات من حياة المدرسة',
};

// لقطات مميزة تُعرض في شريط "أبرز اللقطات" أعلى المعرض.
export const GALLERY_FEATURED: { id: string; title: string; subtitle: string }[] = [
  { id: 'smart-charge-model', title: 'محطة الشحن المتنقلة', subtitle: 'مشروع طفيلة للشحن الذكي' },
  { id: 'mix-station-branding', title: 'مكس سيزون', subtitle: 'باص الأيس كريم والسناكات' },
  { id: 'evaluation-committee', title: 'لجنة التقييم', subtitle: 'مناقشة المشاريع الطلابية' },
  { id: 'btec-team', title: 'فريق المدرسة', subtitle: 'طلبة ومعلمو ل' },
];
