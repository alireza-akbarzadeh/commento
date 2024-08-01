'use client';
import { useEffect, useRef } from 'react';
import { LazyImage } from '@/shared/components';
import { ScrollArea, ScrollBar } from '@/shared/ui';
import { cn } from '@/shared/utils';

type SliderProps = {
  scrollSnaps: number[];
  scrollTo: (index: number) => void | undefined;
  selectedIndex: number;
};

export function MediaThumbs(props: SliderProps) {
  const { scrollSnaps, scrollTo, selectedIndex } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  // FIXME: this is'nt working the scroll have to move to active index
  useEffect(() => {
    const container = containerRef.current;
    if (container && scrollSnaps.length) {
      const thumbnailsContainer = container.querySelector(
        '.flex-row',
      ) as HTMLElement;
      const activeThumbnail = thumbnailsContainer.children[
        selectedIndex
      ] as HTMLElement;
      if (activeThumbnail) {
        const containerWidth = thumbnailsContainer.clientWidth;
        const thumbnailWidth = activeThumbnail.offsetWidth;
        const scrollLeft =
          activeThumbnail.offsetLeft - containerWidth / 2 + thumbnailWidth / 2;

        thumbnailsContainer.scrollTo({
          left: thumbnailsContainer.scrollWidth - containerWidth - scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedIndex, scrollSnaps]);

  return (
    <ScrollArea
      className="whitespace-nowrap border-b border-white bg-surface-primary py-2"
      style={{ width: '100%', maxWidth: '600px' }} // Adjust maxWidth as needed
      type="auto"
      dir="rtl"
      ref={containerRef}
    >
      <div className="flex flex-row gap-4 px-4">
        {scrollSnaps?.map((_, index) => (
          <div
            key={index}
            className={cn('relative flex-none', 'w-[120px]', {
              'embla-thumbs__slide--selected': index === selectedIndex,
            })}
          >
            <button
              className={cn(
                'block w-full cursor-pointer bg-transparent p-0 opacity-20 transition-opacity duration-200',
                { 'opacity-100': index === selectedIndex },
              )}
              aria-label="slider-action"
              title="slider-action"
              onClick={(event) => {
                scrollTo(index);
                event.stopPropagation();
              }}
            >
              <div className="relative size-[120px]">
                <LazyImage
                  src="/images/phone.webp"
                  className="object-cover"
                  quality={100}
                  alt="banner"
                  fill
                />
              </div>
            </button>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
