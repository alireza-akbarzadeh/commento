import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useBanners } from '@/domains/home/hooks';
import { Icon, LazyImage, PlayButton } from '@/shared/components';
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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();
  const togglePlay = () => setIsPlaying(!isPlaying);
  return (
    <Drawer>
      <DrawerTrigger className="px-4">
        <Icon name="video-two-fill" iconClassName="text-content-tertiary" />
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none">
        <DrawerClose className="size-10 pr-3">
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
                  {!isPlaying ? (
                    <div className="relative size-[240px]">
                      <LazyImage
                        src="/images/phone.webp"
                        alt="store"
                        className="size-full"
                        width={240}
                        height={240}
                      />
                      {tab !== 'pic' && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                          <PlayButton
                            onClick={togglePlay}
                            large
                            className="size-[56px] rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <video controls className="size-full">
                      <source
                        src="/videos/introducing_iPhone.mp4"
                        type="video/mp4"
                      />
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
          <MediaThumbs
            setIsPlaying={setIsPlaying}
            hasVideo={tab === 'video'}
            {...{ scrollSnaps, scrollTo, selectedIndex }}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
