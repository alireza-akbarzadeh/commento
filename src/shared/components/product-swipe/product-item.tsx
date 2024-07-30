import Link from 'next/link';
import { Products } from '@/shared/config/mock-data';
import { CURRENCY } from '@/shared/constant';
import { ProductImage } from './product-image';

export type ProductItemProps = {
  product: Products;
};

export function ProductItem(props: ProductItemProps) {
  const { product } = props;
  const isTruncate = product.title.length > 43;

  return (
    <figure>
      <Link
        href={`/product/${product.latinName}`}
        aria-label="see the product in details"
        className="flex-center relative w-[147px] flex-col"
      >
        <ProductImage imageUrl={product.imageUrl} discount={product.discount} />
      </Link>
      <figcaption className="space-y-1 py-2.5 pr-3">
        <h2 className="line-clamp-2 text-content-primary text-labelMedium">
          {isTruncate
            ? product.title.slice(0, 40).concat('...')
            : product.title}
        </h2>
        {/*TODO:  if store was only one render te name of store */}
        {product.price && (
          <p className="text-content-primary text-labelXSmall">
            <span className="text-bodyXXSmall">از</span> {product.price}{' '}
            <span className="text-tiny">{CURRENCY.IR}</span>
          </p>
        )}
        {product.inventory && (
          <p className="text-content-tertiary text-bodyXSmall">
            {product.inventory}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
