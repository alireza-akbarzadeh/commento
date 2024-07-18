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
          <Item {...product} />
          <Item {...product} />
        </CardContent>
        <Separator className="border-1 mx-auto mt-2 w-[90%] border-t border-border-primary" />
        <CardFooter className="flex w-full items-center justify-between py-3">
          <p className="text-labelMedium text-content-primary">مشاهده مقایسه</p>
          <div className="flex items-center">
            <div className="flex-center size-6 rounded-full bg-surface-secondary">
              <span className="pl-[3px] pt-[3px] text-labelMedium text-content-tertiary">
                ۲
              </span>
            </div>
            <div className="size-6">
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

function Item({ title, imageUrl, discount }: Products) {
  return (
    <div className="flex flex-col">
      <Link
        href={`/product/${title}`}
        className="flex-center relative m-2.5 flex-col"
      >
        <div className="flex-center size-[125px] rounded-[8px] bg-surface-tertiary">
          <div className="relative h-[101px] w-[99px]">
            <LazyImage src={imageUrl} isLocal quality={100} alt="banner" fill />
          </div>
        </div>
        {discount && <DiscountBadge discount={discount} />}
      </Link>
      <div className="pr -2 space-y-1 pt-3">
        <p className="text-labelSmall text-content-primary">
          {title.length > 40 ? title.slice(0, 38).concat('...') : title}
        </p>
      </div>
    </div>
  );
}
