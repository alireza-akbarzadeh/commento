import { CURRENCY } from '@/shared/constant';

export function RowInfo() {
  return (
    <>
      <p className="py-2 text-headlineXSmall text-content-primary">
        گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت
      </p>
      <p className="pb-[9px] pt-px text-labelMedium text-content-primary">
        <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
        <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
      </p>
    </>
  );
}
