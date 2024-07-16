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

// TODO
// در صورتی که کانفیگی تنوع نداشته باشد قابل کلیک نمیباشد و اگر داشت کلیک مییشه و باتم شیت باز میشه- با کلیک رویی کانفیگ جدید صفحه PDP رفرش میشه

export function ProductDomain() {
  return (
    <section id="product-details-page" data-testid="product-details-page">
      <Appbar />
      <ProductCarousel />
      <div className="px-4">
        <RowInfo />
        <Features />
        <div className="py-4">
          <Button className="h-[52px] w-full rounded-2xl text-labellarge text-content-inverse">
            در ۱۱ فروشگاه
          </Button>
        </div>
        {/* product benchmark */}
        <ProductInfo />
        <div className="py-2">
          <p className="text-labelMedium text-content-primary">
            ۱۱ فروشگاه اینترنتی
          </p>
        </div>
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
