import React from 'react';
import { useSearchController } from '@/shared/hooks';
import { SearchFiled } from '../../search/search-filed';

export const FilterBrand = () => {
  const {
    handleClearSearch,
    handleInputChange,
    isSearchTermEmpty,
    searchTerm,
  } = useSearchController({ use: 'query', name: 'brand' });
  return (
    <div>
      <h3 className="px-4 text-headlineMedium">برند</h3>
      <div className="mt-6">
        <SearchFiled
          {...{
            handleClearSearch,
            handleInputChange,
            searchTerm,
            isSearchTermEmpty,
            hasBackButton: false,
          }}
        />
      </div>
      <div className="px-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between border-b border-border-primary py-3"
          >
            <p className="text-content-primary text-bodyMedium">عنوان برند</p>
          </div>
        ))}
      </div>
    </div>
  );
};
