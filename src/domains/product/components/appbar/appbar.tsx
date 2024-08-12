'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';
import { LovedAction } from './loved-action';
import { MoreDrawer } from './more-drawer';

export function Appbar() {
  const { replace } = useRouter();

  return (
    <div className="flex h-[56px] items-center justify-between px-4 pr-3 pt-4">
      <div className="size-10">
        <Icon
          onClick={() => replace('/')}
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
        <LovedAction />
        <MoreDrawer />
      </div>
    </div>
  );
}
