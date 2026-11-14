import type { Alumnus } from '@/data/types';

// دفعة التخرج 2026 — جلسة تصوير التخرج داخل المدرسة.
// الصور في public/images/graduates/. أضف الاسم (name) والإنجاز (achievement) متى توفرا.
export const GRADUATION_YEAR = 2026;

export const GRADUATION_CLASS: { id: string; photo: string }[] = [
  { id: 'graduate-1', photo: '/images/graduates/graduate-01.jpg' },
  { id: 'graduate-2', photo: '/images/graduates/graduate-02.jpg' },
  { id: 'graduate-3', photo: '/images/graduates/graduate-03.jpg' },
  { id: 'graduate-4', photo: '/images/graduates/graduate-04.jpg' },
];

// سجل الخريجين: أسماء وقصص وإنجازات، تُعرض مجمّعة حسب سنة التخرج.
export const ALUMNI: Alumnus[] = [];
