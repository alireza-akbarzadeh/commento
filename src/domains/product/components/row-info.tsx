import { CURRENCY } from '@/shared/constant';

export function RowInfo() {
  return (
    <>
      <h2 className="py-2 text-content-primary text-headlineXSmall">
        گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت
      </h2>
      <p className="pb-[9px] pt-px text-content-primary text-labelMedium">
        <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
        <span className="mr-1 text-labelXSmall">{CURRENCY.IR}</span>
      </p>
    </>
  );
}
