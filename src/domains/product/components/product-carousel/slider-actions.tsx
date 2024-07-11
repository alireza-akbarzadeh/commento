'use client';
import { Icon } from '@/shared/components';
import { cn } from '@/shared/utils';

type SliderProps = {
  scrollSnaps: number[];
  scrollTo: (index: number) => void | undefined;
  selectedIndex: number;
};

export function SliderActions(props: SliderProps) {
  const { scrollSnaps, scrollTo, selectedIndex } = props;

  return (
    <div className="flex items-center justify-between">
      <Icon name="video-two-fill" iconClassName="text-content-tertiary" />
      <div className="cursor-pointer">
        <div className="flex flex-row items-center gap-2">
          {scrollSnaps?.map((_, index) => (
            <span
              key={index}
              onClick={(event) => {
                scrollTo(index);
                event.stopPropagation();
              }}
              className={cn(
                'h-2 w-2 rounded-full bg-border-primary transition-all duration-300 ease-in-out',
                {
                  'h-2 w-5': index === selectedIndex,
                  'bg-black': index === selectedIndex,
                },
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
