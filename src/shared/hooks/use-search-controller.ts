import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

type useSearcStateArgs = {
  use?: 'state' | 'query';
};

export function useSearchController(props: useSearcStateArgs) {
  const { use = 'query' } = props;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const getParams = searchParams.get('query') || '';

  const searchTerm = use === 'state' ? searchQuery : getParams;
  const isSearchTermEmpty = searchTerm.length === 0;

  const handleClearSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('query');
    replace(`${pathname}?${params.toString()}`);
    setSearchQuery('');
  };

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      if (use === 'state') setSearchQuery(term);
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, use, replace, pathname],
  );
  useEffect(() => {
    if (getParams) {
      setSearchQuery(getParams);
    }
  }, [getParams]);

  return {
    searchTerm,
    isSearchTermEmpty,
    getParams,
    handleClearSearch,
    handleInputChange,
  };
}
