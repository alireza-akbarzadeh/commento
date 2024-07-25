import Link from 'next/link';
import { DiscountBadge } from '@/domains/home/components';
import { LazyImage } from '@/shared/components';
import { Products } from '@/shared/config/mock-data';
import { CURRENCY } from '@/shared/constant';

export type ProductItemProps = {
  product: Products;
};

export function ProductItem(props: ProductItemProps) {
  const { product } = props;
  const isTruncate = product.title.length > 43;

  return (
    <>
      <Link
        href={`/product/${product.title}`}
        aria-label="see the product in details"
        className="flex-center relative w-[147px] flex-col"
      >
        <div className="m-2.5 flex size-[125px] items-center justify-center rounded-lg bg-surface-tertiary">
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
        {product.discount && <DiscountBadge discount={product.discount} />}
      </Link>
      <div className="space-y-1 pr-3 pt-2.5">
        <h2 className="text-content-primary text-labelXSmall">
          {isTruncate
            ? product.title.slice(0, 38).concat('...')
            : product.title}
        </h2>
        {/*TODO:  if store was only one render te name of store */}
        {product.price && (
          <p className="text-content-primary text-labelXSmall">
            <span className="text-bodyXXSmall">از</span> {product.price}{' '}
            <span className="text-bodyXXSmall">{CURRENCY.IR}</span>
          </p>
        )}
        {product.inventory && (
          <p className="text-content-tertiary text-bodyXSmall">
            {product.inventory}
          </p>
        )}
      </div>
    </>
  );
}
