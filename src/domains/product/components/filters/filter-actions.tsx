'use client';
import { useState } from 'react';
import { Icon } from '@/shared/components';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from '@/shared/ui';
import { cn } from '@/shared/utils';
import { ScoreItem } from '../product-info/test-score/score-item';

export function FilterActions() {
  const [isOnline, setIsOnline] = useState<'offline' | 'online'>('online');

  return (
    <>
      <div className="my-2 py-2">
        <p className="text-labelMedium text-content-primary">فروشگاه‌ها</p>
      </div>
      <div className="flex items-center gap-3 py-2">
        <Drawer>
          <DrawerTrigger>
            <div className="mt-1 flex size-[32px] items-center justify-center rounded-xl bg-surface-tertiary p-[6px]">
              <Icon name="slider-horizontal" size="small" />
            </div>
          </DrawerTrigger>
          <DrawerContent className="pb-4">
            <DrawerHeader className="flex items-center justify-between">
              <DrawerTitle className="text-headlineSmall">
                نمره تست محصول
              </DrawerTitle>
              <DrawerClose>
                <Button className="size-8" variant="tertiary" roundedFull>
                  <Icon size="small" name="cross" />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="px-4">asldlaksjdlkjs</div>
          </DrawerContent>
        </Drawer>
        <div className="flex h-10 w-full rounded-2xl border-[0.5px] border-border-primary p-1">
          <Button
            onClick={() => setIsOnline('online')}
            className={cn('h-8 w-full rounded-2xl', {
              'bg-surface-tertiary': isOnline === 'online',
            })}
            variant="ghost"
          >
            ۱۱ اینترنتی
          </Button>
          <Button
            onClick={() => setIsOnline('offline')}
            className={cn('h-8 w-full rounded-2xl', {
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
