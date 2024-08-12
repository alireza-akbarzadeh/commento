import {
  Appbar,
  FAQ,
  Features,
  PriceChart,
  ProductCarousel,
  ProductInfo,
  RowInfo,
  SimilarProduct,
  StoreInfo,
} from "./components";

export function ProductDomain() {
  return (
    <section
      id="product-details-page"
      data-testid="product-details-page"
      className="relative"
    >
      <Appbar />
      <ProductCarousel />
      <RowInfo />
      <Features />
      <ProductInfo />
      <StoreInfo />
      <FAQ />
      <div className="space-y-2">
        <SimilarProduct title="محصولات مشابه" />
        <PriceChart />
        <SimilarProduct title="اپل" />
      </div>
    </section>
  );
}
