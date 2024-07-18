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
    <div className="bg-surface-primary">
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
    </div>
  );
}
