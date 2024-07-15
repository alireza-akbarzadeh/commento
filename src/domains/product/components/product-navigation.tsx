'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';

export function ProductNavigation() {
  const { back } = useRouter();

  return (
    <div className="flex h-[56px] items-center justify-between py-2">
      <Icon
        onClick={() => back()}
        iconClassName="text-content-primary"
        name="cross"
        size="medium"
      />

      <div className="flex items-center gap-2">
        <div className="relative size-10">
          <Icon
            iconClassName="text-content-primary"
            name="arrow-up-arrow-down"
            size="medium"
          />
          <span className="absolute -left-2 top-0 inline-block size-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-surface-negative" />
        </div>
        <div className="size-10">
          <Icon
            iconClassName="text-content-primary"
            name="heart"
            size="medium"
          />
        </div>
        <div className="size-10">
          <Icon
            iconClassName="text-content-primary"
            name="more-vertical-fill"
            size="medium"
          />
        </div>
      </div>
    </div>
  );
}
