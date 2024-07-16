import { Icon } from '@/shared/components';

export function StoreRate() {
  return (
    <div className="my-3 space-y-[2px]">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2">
          <p className="text-labelMedium text-content-primary">دیجیاتو</p>
          <span className="text-bodySmall text-content-positive">۴.۵</span>
        </div>
        <Icon name="chevron-up" iconClassName="text-content-primary" />
      </div>
      <p className="mt-[2px] text-bodySmall text-content-tertiary">
        تهران - اینترنتی
      </p>
    </div>
  );
}
