import Image from 'next/image';
import React from 'react';
import { DiscountBadge } from '@/domains/home/components';
import { Icon, LazyImage } from '@/shared/components';
import { ProductItemProps } from '@/shared/components/product-item';
import { CURRENCY } from '@/shared/constant';
import { Separator } from '@/shared/ui';
import { cn } from '@/shared/utils';

type SearchProductProps = ProductItemProps & {
  activeBorder?: boolean;
  info?: { title: string }[];
  loved: boolean;
};

export function SearchProduct(props: SearchProductProps) {
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
    <div className="px-4">
      <div className="flex h-[147px] items-center gap-8">
        <div className="relative flex flex-col items-center justify-center">
          <div className="h-[99px] w-[101px]">
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
          </div>
          {hasDiscountBadge && discountLabel && (
            <DiscountBadge price={discountLabel} />
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
        <div className="w-[229px]">
          <div className="w-full space-y-3">
            <p className="text-labelXSmall text-content-primary">{title}</p>
            {/*TODO:  if store was only one render the name of store */}
            <p className="text-labelMedium text-content-primary">
              <span className="text-bodyXXSmall">از</span> {priceRange}
              <span className="text-bodyXXSmall">{CURRENCY.IR}</span>
            </p>
            <p className="text-bodyXSmall text-content-tertiary">{storeName}</p>
            <div className="flex gap-4">
              {data?.map((item) => (
                <span
                  className="text-bodyXSmall text-content-tertiary"
                  key={item.title}
                >
                  {item.title}
                </span>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {activeBorder && (
        <Separator className="my-4 border-b border-border-primary text-displaySmall" />
      )}
    </div>
  );
}
