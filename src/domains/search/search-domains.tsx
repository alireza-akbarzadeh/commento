'use client';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { Icon, Spin } from '@/shared/components';
import { Input } from '@/shared/ui';
import { SearchCategory } from './components/search-category';
import { ResentSearch } from './container/recent-search';
import { SearchProduct } from './container/search-product';

export function SearchDomian() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // use it for showing pending loading
  const [pending, startTransation] = useTransition();
  const handleClearSearch = () => setSearchTerm('');
  const isFelidEmpty = searchTerm.length !== 0;
  const handleSearch = ({ value }: { value: string }) => {
    startTransation(() => {
      setSearchTerm(value);
    });
  };
  const items = [1, 2, 3, 4];
  return (
    <section
      id="search"
      data-testid="search"
      className="bg-surface-primary py-2"
    >
      <div className="my-2 flex items-center gap-[2px] px-4">
        <Link href="/" className="flex-center size-10">
          <Icon iconClassName="text-content-tertiary" name="arrow-right" />
        </Link>
        <div className="relative flex w-full items-center bg-surface-secondary py-3 pl-2.5 pr-5">
          <Icon
            iconClassName="text-content-tertiary"
            name="magnifier"
            size="medium"
          />
          <Input
            value={searchTerm}
            onChange={({ target }) => handleSearch({ value: target.value })}
            placeholder="جستوجوی محصول..."
            className="search-input-class"
          />
          {pending ? (
            <Spin />
          ) : (
            isFelidEmpty && (
              <Icon
                iconClassName="text-content-tertiary "
                onClick={handleClearSearch}
                size="xxSmall"
                name="circle-cross-fill"
              />
            )
          )}
        </div>
      </div>
      <SearchCategory />
      <div className="mt-5">
        {items.map((_, index) => (
          <SearchProduct
            hasDiscountBadge={index === 0 || index === 3}
            activeBorder={index !== items.length - 1}
            key={index}
            loved={index === 0 || index === 2}
            discountLabel={43}
            priceRange="159,000"
            storeName="در ۲۴ فروشگاه"
            title="گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت"
            imageUrl="/images/phone.webp"
            info={
              index === 0 ? [{ title: 'تهران' }, { title: 'اوپن باکس' }] : []
            }
          />
        ))}
      </div>
      <ResentSearch />
    </section>
  );
}
