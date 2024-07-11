import React from 'react';
import { Icon } from '@/shared/components';

export function FAQ() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[6px]">
        <p className="text-labellarge text-content-primary">پرسش و پاسخ‌ها</p>
        <Icon size="small" name="chevron-left" />
      </div>
      <p className="bg-surface-secondary">۲</p>
    </div>
  );
}
