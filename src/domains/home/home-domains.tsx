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

export function HomeDomains(props) {
  return (
    <>
      <SearchAction />
      <Category />
      <Banners />
      <ResentViews />
      <Comparetaion />
      {/* base of resent view */}
      <Favorites title="محبوبترین تبلت‌ها" />
      {/* base of last visit */}
      <Favorites title="محبوبترین ساعت‌های هوشمند" mode="light" />
      <TopSellers />
      <Categories />
      <BottomNavigation />
    </>
  );
}
