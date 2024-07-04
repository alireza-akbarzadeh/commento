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
} from "./components"

export function HomeDomains() {
  return (
    <>
      <SearchAction />
      <Category />
      <Banners />
      <ResentViews />
      <Comparetaion />
      {/* base of resent view */}
      <Favorites />
      {/* base of last visit */}
      <Favorites />
      <TopSellers />
      <Categories />
      <BottomNavigation />
    </>
  )
}
