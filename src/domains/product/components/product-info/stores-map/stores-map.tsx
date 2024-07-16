import React from 'react';
import { Icon } from '@/shared/components';

export function StoresMap() {
  return (
    <div>
      <h3 className="py-2 text-headlineXSmall text-content-primary">
        نقشه فروشگاه‌ها
      </h3>
      <div className="h-[323px] w-full rounded-2xl bg-surface-tertiary"></div>
      <div className="my-[12px] flex items-center gap-1.5">
        <p>مشاهده فروشگاه‌های حضوری روی نقشه</p>
        <Icon name="chevron-left" size="small" />
      </div>
    </div>
  );
}
