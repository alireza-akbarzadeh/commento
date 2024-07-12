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
    <section className="bg-layout my-2">
      <div
        className={cn('max-w-[309px]', {
          'mb-3 mt-6': mode === 'light',
          'my-2 mt-3': mode === 'dark',
        })}
      >
        <p className="text-headlineSmall text-content-primary">
          {title}
          <span className="text-content-tertiary"> بر اساس آخرین بازدیدها</span>
        </p>
      </div>
      <Carousel opts={{ direction: 'rtl', dragFree: true }}>
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={'mt-3 basis-[89%] shadow-elevation4'}
            >
              <Card
                className={cn(
                  'relative mb-6 basis-[89%] rounded-2xl shadow-elevation3',
                  {
                    'bg-surface-primary': mode === 'light',
                    'bg-content-primary': mode === 'dark',
                  },
                )}
              >
                <CardContent className="flex flex-col gap-2.5">
                  <div className="flex flex-col items-center justify-between">
                    <ul className="flex flex-col items-start gap-y-3 p-[25px]">
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
                          className={`text-headlineSmall ${mode === 'dark' ? 'text-content-inverse' : 'text-content-primary'}`}
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
                    <div className="relative w-full">
                      <LazyImage
                        src={`/images/${mode === 'dark' ? 'ipad' : 'watch'}.png`}
                        isLocal
                        style={{ objectFit: 'contain' }}
                        quality={100}
                        fill
                        alt="banner"
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
