import {
  Banners,
  BottomNavigation,
  Categories,
  Category,
  Comparetaion,
  Favorites,
  ResentViews,
  SearchAction,
  TopSellers,
} from './containers';

export function HomeDomains() {
  return (
    <>
      <SearchAction />
      <Category />
      <Banners />
      <ResentViews />
      <Comparetaion />
      <Favorites title="محبوبترین تبلت‌ها" />
      <Favorites title="محبوبترین ساعت‌های هوشمند" mode="light" />
      <TopSellers />
      <Categories />
      <BottomNavigation />
    </>
  );
}
