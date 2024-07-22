import { Icon } from '@/shared/components';

export function StoreRate() {
  return (
    <div className="my-3 space-y-[2px]">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2">
          <p className="text-content-primary text-labelMedium">دیجیاتو</p>
          <span className="text-content-positive text-bodySmall">۴.۵</span>
        </div>
        <Icon name="chevron-down" iconClassName="text-content-primary" />
      </div>
      <p className="mt-[2px] text-content-tertiary text-bodySmall">
        تهران - اینترنتی
      </p>
    </div>
  );
}
