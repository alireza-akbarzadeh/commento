import Link from 'next/link';
import { DiscountBadge } from '@/domains/home/components';
import { Icon, LazyImage } from '@/shared/components';
import { FindProductTypes } from '@/shared/config/mock-data';
import { CURRENCY } from '@/shared/constant';
import { Separator } from '@/shared/ui';
import { cn } from '@/shared/utils';

type ProductListPage = FindProductTypes & {
  activeBorder?: boolean;
};

export function ProductList(props: ProductListPage) {
  const {
    hasDiscountBadge = false,
    discountLabel,
    title,
    imageUrl,
    storeName,
    priceRange,
    activeBorder,
    info,
    loved,
  } = props;
  const data = info?.length ? info : [];

  return (
    <div className="mt-5 px-4">
      <Link
        href={`/product/${title}`}
        aria-label="see the product in details"
        className="flex h-[147px] items-center gap-8"
      >
        <div className="flex h-[147px] items-center gap-8">
          <div className="relative flex flex-col items-center justify-center">
            <figure className="h-[99px] w-[101px]">
              <LazyImage
                src={imageUrl}
                style={{
                  objectFit: 'cover',
                }}
                isLocal
                quality={100}
                alt={title}
                fill
              />
            </figure>
            {hasDiscountBadge && discountLabel && (
              <DiscountBadge className="-top-1" discount={discountLabel} />
            )}
            <div
              className={cn(
                'absolute bottom-0 right-0 flex size-6 translate-x-0 transform items-center justify-center rounded-full bg-gray-400',
                {
                  'bg-brand-main': loved,
                },
              )}
            >
              <Icon
                iconClassName="text-content-inverse"
                name={loved ? 'heart-fill' : 'heart'}
                style={{ width: 12, height: 12 }}
              />
            </div>
          </div>
          <figcaption>
            <div className="w-[229px]">
              <div className="w-full space-y-3">
                <h3 className="text-content-primary text-labelXSmall">
                  {title}
                </h3>
                <p className="text-content-primary text-labelMedium">
                  از {priceRange}
                  {CURRENCY.IR}
                </p>
                <p className="text-content-tertiary text-bodyXSmall">
                  {storeName}
                </p>
                <div className="flex gap-4">
                  {data?.map((item) => (
                    <p
                      className="text-content-tertiary text-bodyXSmall"
                      key={item.title}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </figcaption>
        </div>
        {activeBorder && (
          <Separator className="my-4 border-b border-border-primary text-displaySmall" />
        )}
      </Link>
    </div>
  );
}
