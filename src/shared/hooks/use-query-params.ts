// useQueryParams.ts
'use client';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type AppendQueryParam = {
  key: string;
  value: string;
  options?: NavigateOptions;
};

export const useQueryParams = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const appendQueryParam = (args: AppendQueryParam) => {
    const { key, value, options } = args;
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`, options);
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

  const getQueryParam = (key: string) => searchParams.get(key);

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
    clearQueryParams,
    searchParams,
    replace,
    pathname,
  };
};
