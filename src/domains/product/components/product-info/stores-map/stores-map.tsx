import React from 'react';
import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function StoresMap() {
  return (
    <div>
      <div className="bg-surface-secondary p-4">
        <Button
          className="rounded-xl text-labellarge text-content-inverse"
          fullWidth
        >
          نمایش همه فروشگاه‌ها
        </Button>
      </div>
      <div className="my-[12px] flex items-center gap-1.5">
        <p>مشاهده فروشگاه‌های حضوری روی نقشه</p>
        <Icon name="chevron-left" size="small" />
      </div>
      <div className="h-[323px] w-full rounded-2xl bg-surface-tertiary"></div>
    </div>
  );
}
