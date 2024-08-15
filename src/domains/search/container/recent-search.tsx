import { useTranslations } from "next-intl";

import { SearchItem } from "../components/search-Item";

export function ResentSearch() {
  const t = useTranslations("Globals");
  const items = [1, 2, 3, 4];
  return (
    <section id="recent-view" data-testid="recent-view">
      <div className="py-2.5">
        <p className="my-2.5 pr-4 text-content-disabled text-labelSmall">
          {t("recentSearch")}
        </p>
        {items.map((_, index) => (
          <SearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            latinName="model-iphone13-duelsim"
            iconName="clock-arrow-circlepath"
            title="گوشی موبایل اپل"
            subtitle="در دسته گوشی‌ها"
          />
        ))}
      </div>
      <div className="py-2.5">
        <p className="my-2.5 pr-4 text-content-disabled text-labelSmall">
          {t("frequentSearchs")}
        </p>
        {items.map((_, index) => (
          <SearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconName="fire"
            latinName="model-iphone13-duelsim"
            title="گوشی موبایل اپل"
            subtitle="در دسته گوشی‌ها"
          />
        ))}
      </div>
    </section>
  );
}
