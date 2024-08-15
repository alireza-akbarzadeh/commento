import { Suspense } from "react";
import { SearchResult } from "@/domains";

export default function ProductListPage() {
  return (
    <div id="search-result" data-testid="search-result">
      <Suspense>
        <SearchResult />
      </Suspense>
    </div>
  );
}
