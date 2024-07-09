import { LazyImage } from '@/shared/components';

export function NoResult() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="size-[51px]">
        <LazyImage
          src="/svg/search-no-result.svg"
          alt="no-result"
          isLocal
          quality={100}
          fill
        />
      </div>
      <h5 className="text-labelSmall text-content-tertiary">
        نتیجه‌ای پیدا نشد!
      </h5>
      <p className="text-bodyXSmall text-content-tertiary">
        لطفا از نوشتار صحیح و اتصال به اینترنت مطمئن شوید
      </p>
    </div>
  );
}
