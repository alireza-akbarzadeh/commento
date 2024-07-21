import {
  Appbar,
  Features,
  FilterActions,
  ProductCarousel,
  RowInfo,
} from './components';
import { FAQ } from './components/faq';
import { PriceChanges } from './components/price-changes/price-changes';
import { ProductInfo } from './components/product-info/product-info';
import { SimilarProduct } from './components/similar-product/similar';
import { StoreInfo } from './components/store-info/store-info';
import { StoresMap } from './components/stores-map/stores-map';

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
        <FilterActions />
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
