'use client';
import { useState } from 'react';
import { Icon } from '@/shared/components';
import { Button, Separator } from '@/shared/ui';
import { cn } from '@/shared/utils';

export function ProductActions() {
  const [isOnline, setIsOnline] = useState<'offline' | 'online'>('online');

  return (
    <>
      <div className="py-2">
        <p className="text-labelMedium text-content-primary">فروشگاه</p>
      </div>
      <div className="flex items-center gap-3 py-2">
        <div className="mt-1 flex size-[32px] items-center justify-center rounded-xl bg-surface-tertiary p-[6px]">
          <Icon name="slider-horizontal" size="small" />
        </div>
        <div className="flex w-full rounded-2xl border-[0.5px] border-border-primary p-1">
          <Button
            onClick={() => setIsOnline('online')}
            className={cn('w-full rounded-2xl', {
              'bg-surface-tertiary': isOnline === 'online',
            })}
            variant="ghost"
          >
            ۱۱ اینترنتی
          </Button>
          <Button
            onClick={() => setIsOnline('offline')}
            className={cn('w-full rounded-2xl', {
              'bg-surface-tertiary': isOnline === 'offline',
            })}
            variant="ghost"
          >
            ۱۲ حضوری
          </Button>
        </div>
      </div>
      <Separator className="my-2 border-b border-border-primary" />
    </>
  );
}
