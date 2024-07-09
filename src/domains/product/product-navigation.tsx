'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';

export function ProductNavigation() {
  const { back } = useRouter();

  return (
    <div className="flex h-[56px] items-center justify-between">
      <Icon
        onClick={() => back()}
        iconClassName="text-content-tertiary"
        name="cross"
        size="medium"
      />
      <div className="flex items-center gap-5">
        <Icon
          iconClassName="text-content-tertiary"
          name="arrow-up-arrow-down"
          size="medium"
        />
        <Icon
          iconClassName="text-content-tertiary"
          name="heart"
          size="medium"
        />
        <Icon
          iconClassName="text-content-tertiary"
          name="more-vertical-fill"
          size="medium"
        />
      </div>
    </div>
  );
}
