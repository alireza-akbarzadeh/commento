'use client';
import { useState } from 'react';
import { Icon } from '@/shared/components';
import { useToast } from '@/shared/ui';
import { cn } from '@/shared/utils';

export function LovedAction() {
  const { toast } = useToast();
  const [loved, setLoved] = useState<boolean>(false);

  const handleToggleLoved = () => {
    setLoved(!loved);
    toast({
      title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت',
      description: `موفقیت با ${loved ? 'افزوده شد' : 'حذف شد'}`,
    });
  };

  return (
    <div className="size-10">
      <Icon
        onClick={handleToggleLoved}
        iconClassName={cn('text-content-primary', {
          'text-surface-negative': loved,
        })}
        name={loved ? 'heart-fill' : 'heart'}
        size="medium"
      />
    </div>
  );
}
