import { Button } from '@/shared/ui';
import {
  Appbar,
  Features,
  ProductActions,
  ProductCarousel,
  RowInfo,
} from './components';
import { FAQ } from './components/faq';
import { PriceChanges } from './components/price-changes/price-changes';
import { ProductInfo } from './components/product-info/product-info';
import { StoresMap } from './components/product-info/stores-map/stores-map';
import { SimilarProduct } from './components/similar-product/simular-product';
import { StoreInfo } from './components/store-info';

export function ProductDomain() {
  return (
    <section
      id="product-details-page"
      data-testid="product-details-page"
      className="bg-surface-primary"
    >
      <Appbar />
      <ProductCarousel />
      <div className="px-4">
        <RowInfo />
        <Features />
        <ProductInfo />
        <ProductActions />
        <StoreInfo />
        <StoresMap />
        <FAQ />
        <SimilarProduct title="محصولات مشابه" />
        <PriceChanges />
        <SimilarProduct title="اپل" />
      </div>
    </section>
  );
}
