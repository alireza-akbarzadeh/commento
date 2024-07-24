import { NoResult } from '../components/no-result';
import { ResentSearchItem } from '../components/resent-search-Item';

export function ResentSearch() {
  const items = [1, 2, 3, 4];
  return (
    <section id="recent-view" data-testid="recent-view">
      <div className="mt-5 px-4 py-2.5">
        <p className="text-content-disabled text-labelSmall">جستجو‌های اخیر</p>
        {Array.from({ length: 3 }).map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconName={'magnifier'}
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
      </div>
      <div className="px-4 py-2.5">
        <p className="text-content-disabled text-labelSmall">جستجو‌های اخیر</p>
        {items.map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconName="clock-fill"
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
        {items.map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconName="fire"
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
      </div>
    </section>
  );
}
