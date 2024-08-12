import React, { Suspense } from "react";
import { SearchDomian } from "@/domains/search";

function Search() {
  return (
    <Suspense>
      <SearchDomian />
    </Suspense>
  );
}

export default Search;
