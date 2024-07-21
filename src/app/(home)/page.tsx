import { HomeDomains } from "@/domains/home";
import { pokemonOptions } from "@/shared/api/query-options";
import { getQueryClient } from "@/shared/api/get-query-clinet";
import { dehydrate } from "@tanstack/query-core";
import { HydrationBoundary } from "@tanstack/react-query";

export default function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(pokemonOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeDomains />
    </HydrationBoundary>
  );
}
