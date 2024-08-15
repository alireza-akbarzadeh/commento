"use client";
import { PropsWithChildren } from "react";
import { SearchFiled } from "@/shared/components";
import { useSearchController } from "@/shared/hooks";

function SearchLayout(props: PropsWithChildren) {
  const { children } = props;
  const {
    handleClearSearch,
    handleInputChange,
    isSearchTermEmpty,
    searchTerm,
  } = useSearchController({ use: "state" });

  return (
    <main>
      <SearchFiled
        {...{
          searchTerm,
          handleInputChange,
          isSearchTermEmpty,
          handleClearSearch,
        }}
      />
      {children}
    </main>
  );
}

export default SearchLayout;
