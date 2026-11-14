/**
 * تحويل روابط Google Docs / Slides إلى روابط معاينة داخلية (بدون واجهة التحرير)
 * لتشغيلها داخل iframe في الموقع. يعيد null إن لم يكن الرابط من Google Docs.
 */
export function toGooglePreviewUrl(url: string): string | null {
  const match = url.match(
    /https:\/\/docs\.google\.com\/(document|presentation|spreadsheets|forms)\/d\/([\w-]+)/,
  );
  if (!match) return null;
  return `https://docs.google.com/${match[1]}/d/${match[2]}/preview`;
}
