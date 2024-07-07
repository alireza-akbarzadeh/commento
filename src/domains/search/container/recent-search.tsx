import { ResentSearchItem } from '../components/ResentSearchItem';

type ResentSearchProps = {};

export function ResentSearch(props: ResentSearchProps) {
  const items = [1, 2, 3];
  return (
    <section id="recent-view" data-testid="recent-view">
      <div className='className="px-4 py-2.5"'>
        <p className="text-base text-content-disabled">جستجو‌های اخیر</p>
        {Array.from({ length: 3 }).map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconUrl="/svg/history.svg"
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
      </div>
      <div className="px-4 py-2.5">
        <p className="text-base text-content-disabled">جستجو‌های پرتکرار</p>
        {items.map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconUrl="/svg/fire.svg"
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
        {items.map((_, index) => (
          <ResentSearchItem
            key={index}
            activeBorder={index !== items.length - 1}
            iconUrl="/svg/search.svg"
            subtitle="گوشی موبایل اپل"
            title="در دسته گوشی‌ها"
          />
        ))}
      </div>
    </section>
  );
}
