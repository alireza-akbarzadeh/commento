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
        <p className="px-4 text-headlineSmall text-content-primary">
          {title}
          <span className="text-content-tertiary"> بر اساس آخرین بازدیدها</span>
        </p>
      </div>
      <Carousel opts={{ direction: 'rtl', dragFree: true }}>
        <CarouselContent className="m-0 p-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn('mb-6 ml-4 mt-3 basis-[89%] p-0', {
                'mr-5': index === 0,
              })}
            >
              <Card
                className={cn('relative mb-6 basis-[89%] rounded-3xl', {
                  'bg-surface-primary': mode === 'light',
                  'bg-content-primary': mode === 'dark',
                })}
              >
                <CardContent className="flex flex-col p-0">
                  <div className="p-6">
                    <ul className="flex flex-col items-start gap-y-3 p-2.5">
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
                    <div className="relative">
                      <LazyImage
                        src={`/images/${mode === 'dark' ? 'ipad' : 'watch'}.png`}
                        isLocal
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
