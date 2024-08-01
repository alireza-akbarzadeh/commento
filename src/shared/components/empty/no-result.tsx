import { LazyImage } from '@/shared/components';

export function NoResult() {
  return (
    <figure className="mt-8 flex flex-col items-center">
      <div className="flex-center h-[90px] w-[151px]">
        <LazyImage
          src="/svg/search-no-result.svg"
          alt="no-result"
          quality={100}
          fill
        />
      </div>
      <figcaption className="flex flex-col items-center justify-center gap-1">
        <h5 className="text-content-tertiary text-labelSmall">
          نتیجه‌ای پیدا نشد!
        </h5>
        <p className="text-content-tertiary text-bodyXSmall">
          لطفا از نوشتار صحیح و اتصال به اینترنت مطمئن شوید
        </p>
      </figcaption>
    </figure>
  );
}
