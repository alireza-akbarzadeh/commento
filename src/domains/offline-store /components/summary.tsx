import { LazyImage } from "@/shared/components";
import { CURRENCY } from "@/shared/constant";

export function Summary() {
  return (
    <div className="flex w-full py-3">
      <div className="flex h-[72px] w-20 items-center justify-center">
        <div className="relative size-[56px]">
          <LazyImage
            src="/images/phone.webp"
            alt="store"
            className="size-full"
            width={56}
            height={56}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse">
        <h2 className="py-2 text-content-primary text-bodySmall">
          گوشی موبایل اپل مدل iPhone 13 CH دو سیم کارت
        </h2>
        <p className="pb-[9px] pt-px text-content-primary text-headlineSmall">
          <span className="text-bodyXXSmall">از</span>
          ۱‍۶۷,۰۰۰
          <span className="mr-1 text-labelXSmall">{CURRENCY.IR}</span>
        </p>
      </div>
    </div>
  );
}
