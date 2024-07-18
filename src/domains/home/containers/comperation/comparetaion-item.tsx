import Link from 'next/link';
import { DiscountBadge } from '@/domains/home/components';
import { Icon, LazyImage } from '@/shared/components';
import { Products } from '@/shared/config/mock-data';
import {
  Card,
  CardContent,
  CardFooter,
  CarouselItem,
  Separator,
} from '@/shared/ui';

type ComparetaionItemProps = { product: Products };

export function ComparetaionItem(props: ComparetaionItemProps) {
  const { product } = props;
  return (
    <CarouselItem className="basis-[93%] pt-3">
      <Card className="relative mb-3 rounded-2xl">
        <CardContent className="flex gap-1.5 px-4 py-2">
          <div className="flex flex-col">
            <Link
              href={`/product/${product.title}`}
              className="flex-center relative m-2.5 flex-col"
            >
              <div className="flex size-[125px] items-center justify-center rounded-lg bg-surface-tertiary">
                <div className="relative h-[101px] w-[99px]">
                  <LazyImage
                    src={product.imageUrl}
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
              {product.discount && (
                <DiscountBadge discount={product.discount} />
              )}
            </Link>
            <div className="space-y-1 pr-2 pt-3">
              <p className="text-labelSmall text-content-primary">
                {product.title.length > 40
                  ? product.title.slice(0, 43).concat('...')
                  : product.title}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Link
              href={`/product/${product.title}`}
              className="flex-center relative m-2.5 flex-col"
            >
              <div className="flex-center size-[125px] rounded-[8px] bg-surface-tertiary">
                <div className="relative h-[101px] w-[99px]">
                  <LazyImage
                    src={product.imageUrl}
                    isLocal
                    quality={100}
                    alt="banner"
                    fill
                  />
                </div>
              </div>
              {product.discount && (
                <DiscountBadge discount={product.discount} />
              )}
            </Link>
            <div className="pr -2 space-y-1 pt-3">
              <p className="text-labelSmall text-content-primary">
                {product.title.length > 40
                  ? product.title.slice(0, 43).concat('...')
                  : product.title}
              </p>
            </div>
          </div>
        </CardContent>
        <Separator className="border-1 mx-auto my-4 mb-3 w-[86%] border-t border-border-primary" />
        <CardFooter className="py-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-labelMedium text-content-primary">
              مشاهده مقایسه
            </p>
            <div className="flex items-center gap-[7.5px]">
              <span className="text-labelMedium text-content-tertiary">۲</span>
              <Icon
                iconClassName="text-content-tertiary"
                name="chevron-left"
                size="medium"
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
