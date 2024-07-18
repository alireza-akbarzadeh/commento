'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';

export function Appbar() {
  const { back } = useRouter();

  return (
    <div className="flex h-[56px] items-center justify-between pt-3">
      <div className="size-10 pr-3">
        <Icon
          onClick={() => back()}
          iconClassName="text-content-primary"
          name="cross"
          size="medium"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="relative size-10">
          <Icon
            iconClassName="text-content-primary"
            name="arrow-up-arrow-down"
            size="medium"
          />
          <span className="absolute left-3 top-0 inline-block size-[6px] -translate-y-1/2 translate-x-1/2 rounded-full bg-surface-negative" />
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
