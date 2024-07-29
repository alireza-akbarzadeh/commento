// useQueryParams.ts
'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const appendQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`);
  };

  const removeQueryParam = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    replace(`${pathname}?${params.toString()}`);
  };

  const toggleQueryParam = (key: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.has(key)) {
      params.delete(key);
    } else {
      params.set(key, 'true');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const getQueryParam = (key: string) => {
    return searchParams.get(key);
  };

  const getActiveFilterCount = (filterKeys: string[]) => {
    return filterKeys.reduce(
      (count, key) => count + (searchParams.has(key) ? 1 : 0),
      0,
    );
  };
  const clearQueryParams = () => {
    replace(`${pathname}`);
  };

  return {
    appendQueryParam,
    removeQueryParam,
    toggleQueryParam,
    getQueryParam,
    getActiveFilterCount,
    searchParams,
    clearQueryParams,
  };
};
