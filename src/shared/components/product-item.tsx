import Link from 'next/link';
import { DiscountBadge } from '@/domains/home/components';
import { CURRENCY } from '@/shared/constant';
import { LazyImage } from './lazy-image';

export type ProductItemProps = {
  hasDiscountBadge?: boolean;
  discountLabel?: string;
  title: string;
  imageUrl: string;
  storeName?: string;
  priceRange?: string;
};

export function ProductItem(props: ProductItemProps) {
  const {
    hasDiscountBadge = false,
    discountLabel,
    title,
    imageUrl,
    storeName,
    priceRange,
  } = props;
  // TODO: remove product-item class
  const titleSize = title.length > 43;
  return (
    <div>
      <Link
        href={`/product/${title}`}
        className="relative m-2.5 flex flex-col items-center justify-center"
      >
        <div className="flex size-[125px] items-center justify-center rounded-[8px] bg-surface-tertiary">
          <div className="relative h-[101px] w-[99px]">
            <LazyImage
              src={imageUrl}
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
        {hasDiscountBadge && discountLabel && (
          <DiscountBadge price={discountLabel} />
        )}
      </Link>
      <div className="details space-y-1 pt-3">
        <p className="text-labelSmall text-content-primary">
          {titleSize ? title.slice(0, 43).concat('...') : title}
        </p>
        {/*TODO:  if store was only one render the name of store */}
        {priceRange && (
          <p className="text-labelMedium text-content-primary">
            <span className="text-bodyXXSmall">از</span> {priceRange}{' '}
            <span className="text-bodyXXSmall">{CURRENCY.IR}</span>
          </p>
        )}
        {storeName && (
          <p className="text-bodyXSmall text-content-tertiary">{storeName}</p>
        )}
      </div>
    </div>
  );
}
