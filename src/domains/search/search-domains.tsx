'use client';
import { useState, useTransition } from 'react';
import { NoResult, SearchFiled } from '@/shared/components';
import { searchItemList } from '@/shared/config/mock-data';
import { SearchItem } from './components';
import { ResentSearch } from './container';

export function SearchDomian() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pending, startTransition] = useTransition();
  const handleClearSearch = () => setSearchTerm('');
  const isSearchTermEmpty = searchTerm.length === 0;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchTerm(event.target.value);
    });
  };

  const searchResults = searchItemList.filter((list) =>
    list.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <section
      id="search"
      data-testid="search"
      className="min-h-dvh bg-surface-primary py-2"
    >
      <SearchFiled
        {...{
          searchTerm,
          handleInputChange,
          pending,
          isSearchTermEmpty,
          handleClearSearch,
        }}
      />
      {isSearchTermEmpty ? (
        <ResentSearch />
      ) : searchResults.length > 0 ? (
        <div className="mt-5 py-2.5">
          {searchResults.map((list, index) => (
            <SearchItem
              key={list.title}
              activeBorder={index !== searchItemList.length - 1}
              iconName={'magnifier'}
              subtitle={list.subtitle}
              title={list.title}
            />
          ))}
        </div>
      ) : (
        <NoResult />
      )}
    </section>
  );
}
