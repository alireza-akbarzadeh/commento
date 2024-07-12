import { LazyImage } from '@/shared/components';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui/';
import { cn } from '@/shared/utils';

type FavoritesPropsType = {
  title: string;
  mode?: 'dark' | 'light';
};

export function Favorites(props: FavoritesPropsType) {
  const { mode = 'dark', title } = props;
  return (
    <section className="bg-compration my-4">
      <div className="mb-3 mt-8 h-[76px] max-w-[309px]">
        <p className="text-headlineSmall text-content-primary">
          {title}
          <span className="text-content-tertiary"> بر اساس آخرین بازدیدها</span>
        </p>
      </div>
      <Carousel opts={{ direction: 'rtl', dragFree: true }}>
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={'bg-compration basis-[89%]'}>
              <Card
                className={cn(
                  'compration-shadow relative mb-3 h-[450px] basis-[89%] rounded-2xl',
                  {
                    'bg-surface-primary': mode === 'light',
                    'bg-content-primary': mode === 'dark',
                  },
                )}
              >
                <CardContent className="flex flex-col gap-2.5 px-4 py-2">
                  <div className="flex flex-col items-center justify-between">
                    <ul className="flex flex-col items-start gap-y-3">
                      <li>
                        <p
                          className={cn('text-bodySmall text-white', {
                            'text-content-tertiary': mode === 'light',
                          })}
                        >
                          در ۱۷ فروشگاه
                        </p>
                      </li>
                      <li>
                        <p
                          className={cn('text-headlineSmall text-white', {
                            'text-content-secondary': mode === 'light',
                          })}
                        >
                          آیپد پرو مکس
                        </p>
                      </li>
                      <li>
                        <p
                          className={cn(
                            'w-[225px] text-bodyMedium text-white',
                            {
                              'text-content-primary': mode === 'light',
                            },
                          )}
                        >
                          قیمت تضمین شده آی تی از ۹۰ هزار تا ۸ میلیون تومان
                        </p>
                      </li>
                    </ul>
                    <div className="relative mt-2 h-[250px] w-full">
                      <LazyImage
                        src={`/images/${mode === 'dark' ? 'ipad' : 'watch'}.png`}
                        style={{
                          objectFit: 'cover',
                          position: 'absolute',
                        }}
                        isLocal
                        quality={100}
                        alt="banner"
                        fill
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
