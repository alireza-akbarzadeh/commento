import { useTranslations } from 'next-intl';
import { ResentSearchItem } from '../components/resent-search-Item';

export function ResentSearch() {
  const t = useTranslations('Globals');
  const items = [1, 2, 3, 4];
  return (
    <section id="recent-view" data-testid="recent-view">
      <div className="mt-5 py-2.5">
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
        <p className="text-content-disabled text-labelSmall">
          {t('recentSearch')}
        </p>
        {items.map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconName="clock-arrow-circlepath"
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
      </div>
      <div className="px-4 py-2.5">
        <p className="text-content-disabled text-labelSmall">
          {t('frequentSearchs')}
        </p>
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
