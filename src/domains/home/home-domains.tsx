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
      <div className="bg-layout my-2">
        <Favorites title="محبوبترین تبلت‌ها" />
        <Favorites title="محبوبترین ساعت‌های هوشمند" mode="light" />
      </div>
      <TopSellers />
      <Categories />
      <BottomNavigation />
    </div>
  );
}
