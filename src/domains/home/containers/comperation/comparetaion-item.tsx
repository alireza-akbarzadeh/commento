import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Icon } from '@/shared/components';
import { ProductImage } from '@/shared/components/product-swipe/product-image';
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
  const t = useTranslations('HomePage');
  return (
    <CarouselItem className="basis-[93%] pt-3">
      <Card className="relative mb-3 rounded-2xl border-[0.5px] border-border-primary bg-content-inverse shadow-elevation4">
        <CardContent className="flex justify-between gap-1.5 px-4 py-2">
          <Item {...product} />
          <Item {...product} />
        </CardContent>
        <Separator className="border-1 mx-auto mt-2 w-[90%] border-t border-border-primary" />
        <CardFooter className="flex w-full items-center justify-between py-3">
          <p className="text-content-primary text-labelMedium">
            {t('viewCompration')}
          </p>
          <div className="flex items-center">
            <div className="flex-center size-6 rounded-full bg-surface-secondary">
              <span className="pl-[3px] pt-[3px] text-content-tertiary text-labelMedium">
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

function Item({ title, imageUrl, discount, latinName }: Products) {
  return (
    <div className="flex max-w-[125px] flex-col mobile-l:max-w-[165px]">
      <Link
        href={`/product/${latinName}`}
        aria-label="see the product in details"
        className="flex-center relative m-2.5 flex-col"
      >
        <ProductImage {...{ discount, imageUrl }} />
      </Link>
      <div className="space-y-1 pr-2 pt-3">
        <p className="line-clamp-2 text-content-primary text-labelSmall">
          {title.length > 40 ? title.slice(0, 38).concat('...') : title}
        </p>
      </div>
    </div>
  );
}
