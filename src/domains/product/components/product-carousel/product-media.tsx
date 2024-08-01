import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useBanners } from '@/domains/home/hooks';
import { Icon, LazyImage } from '@/shared/components';
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/shared/ui';
import { cn } from '@/shared/utils';
import { MediaThumbs } from './media-thumbs';

export function ProductMedia() {
  const t = useTranslations('Globals');
  const [tab, settab] = useState<'pic' | 'video' | 'none'>('pic');

  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();

  return (
    <Drawer>
      <DrawerTrigger>
        <Icon name="video-two-fill" iconClassName="text-content-tertiary" />
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none">
        <DrawerClose className="size-8">
          <Icon size="small" name="arrow-right" />
        </DrawerClose>
        <div className="">
          <Carousel opts={{ direction: 'rtl' }} setApi={setApi}>
            <CarouselContent className="py-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex h-[371px] items-center justify-center"
                >
                  {tab === 'pic' ? (
                    <div className="size-[220px]">
                      <LazyImage
                        src="/images/phone.webp"
                        alt="store"
                        className="size-full"
                        width={240}
                        height={240}
                      />
                    </div>
                  ) : (
                    <video controls>
                      <source src="/videos/demo.mp4" type="video/mp4" />
                      <track
                        kind="captions"
                        src="/path/to/captions.vtt"
                        srcLang="en"
                        label="English"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex p-4">
              <div className="rounded-2xl border border-border-primary p-1">
                <Button
                  onClick={() => settab('pic')}
                  className={cn('rounded-2xl text-labelSmall', {
                    'bg-surface-tertiary': tab === 'pic',
                  })}
                  variant="ghost"
                >
                  {t('picture')}
                </Button>
                <Button
                  onClick={() => settab('video')}
                  className={cn('rounded-2xl text-labelSmall', {
                    'bg-surface-tertiary': tab === 'video',
                  })}
                  variant="ghost"
                >
                  {t('videos')}
                </Button>
              </div>
            </div>
          </Carousel>
          <MediaThumbs {...{ scrollSnaps, scrollTo, selectedIndex }} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
