import {
  Appbar,
  CommentSlide,
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
      <div className="mt-2s space-y-2 border-t-[6px] border-border-primary">
        <StoreInfo />
        <CommentSlide />
        <FAQ />
        <SimilarProduct title="محصولات مشابه" />
        <PriceChart />
        <SimilarProduct title="اپل" />
      </div>
    </section>
  );
}
