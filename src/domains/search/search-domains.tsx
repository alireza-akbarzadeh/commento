"use client";

import { NoResult, SearchFiled } from "@/shared/components";
import { searchItemList } from "@/shared/config/mock-data";
import { useSearchController } from "@/shared/hooks";

import { SearchItem } from "./components";
import { ResentSearch } from "./container";

export function SearchDomian() {
  const {
    handleClearSearch,
    handleInputChange,
    isSearchTermEmpty,
    searchTerm,
  } = useSearchController({ use: "state" });
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
          isSearchTermEmpty,
          handleClearSearch,
        }}
      />
      {isSearchTermEmpty ? (
        <ResentSearch />
      ) : searchResults.length > 0 ? (
        <div className="mt-5 py-2.5">
          {searchResults.map((result, index) => (
            <SearchItem
              key={result.title}
              activeBorder={index !== searchItemList.length - 1}
              iconName={"magnifier"}
              {...result}
            />
          ))}
        </div>
      ) : (
        <NoResult />
      )}
    </section>
  );
}
