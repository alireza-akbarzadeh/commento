import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

// Define the type for the search query state
type SearchQuery = {
  name: string;
  // Add more keys if necessary
};

export default function SearchSample() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({ name: '' });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const updatedQuery = { ...searchQuery, [name]: value };
    setSearchQuery(updatedQuery);
    updateSearchQuery(updatedQuery);
  };

  const updateSearchQuery = (updatedQuery: SearchQuery): void => {
    const params = new URLSearchParams(searchParams.toString());
    Object.keys(updatedQuery).forEach((key) => {
      const value = updatedQuery[key as keyof SearchQuery];
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    params.set('page', '1');
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Name of the user"
          id="name"
          name="name"
          value={searchQuery.name}
          onChange={handleInputChange}
        />
      </div>
    </main>
  );
}
