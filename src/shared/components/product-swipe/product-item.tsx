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
        className="relative m-2.5 flex flex-col items-center justify-center"
      >
        <div className="flex size-[125px] items-center justify-center rounded-[8px] bg-surface-tertiary">
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
      <div className="details space-y-1 pt-3">
        <p className="text-labelSmall text-content-primary">
          {isTruncate
            ? product.title.slice(0, 43).concat('...')
            : product.title}
        </p>
        {/*TODO:  if store was only one render te name of store */}
        {product.price && (
          <p className="text-labelMedium text-content-primary">
            <span className="text-bodyXXSmall">از</span> {product.price}{' '}
            <span className="text-bodyXXSmall">{CURRENCY.IR}</span>
          </p>
        )}
        {product.inventory && (
          <p className="text-bodyXSmall text-content-tertiary">
            {product.inventory}
          </p>
        )}
      </div>
    </>
  );
}
