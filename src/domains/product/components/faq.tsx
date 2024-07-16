import React from 'react';
import { Icon } from '@/shared/components';

export function FAQ() {
  return (
    <div className="bg-surface-secondary py-2">
      <div className="flex w-full items-center justify-between bg-content-inverse px-4">
        <div className="flex items-center gap-[6px]">
          <p className="text-labellarge text-content-primary">پرسش و پاسخ‌ها</p>
          <Icon size="small" name="chevron-left" />
        </div>
        <div className="size-6 rounded-full bg-surface-secondary px-[6px] text-center">
          <span className="text-labelMedium">۲</span>
        </div>
      </div>
    </div>
  );
}
