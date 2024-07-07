import Image from 'next/image';
import { DiscountBadge } from '@/domains/home/components';
import { CURRENCY } from '@/shared/constant';

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
  return (
    <div className="product-item">
      <div className="relative flex flex-col items-center justify-center pb-3">
        <Image
          src={imageUrl}
          className="rounded-md"
          alt={title}
          width={101}
          height={99}
        />
        {hasDiscountBadge && discountLabel && (
          <DiscountBadge price={discountLabel} />
        )}
      </div>
      <div className="details space-y-3">
        <p className="text-labelXSmall text-content-primary">{title}</p>
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
