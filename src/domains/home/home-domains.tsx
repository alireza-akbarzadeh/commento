import {
  Banners,
  Categories,
  Category,
  Comparetaion,
  Favorites,
  ResentViews,
  TopSellers,
} from "./containers";

export function HomeDomains() {
  return (
    <>
      <Category />
      <Banners />
      <ResentViews />
      <Comparetaion />
      <Favorites title="محبوبترین تبلت‌ها" />
      <Favorites title="محبوبترین ساعت‌های هوشمند" mode="light" />
      <TopSellers />
      <Categories />
    </>
  );
}
