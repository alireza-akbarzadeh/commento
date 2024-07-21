import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary } from '@tanstack/react-query';
import { HomeDomains } from '@/domains/home';
import { getQueryClient } from '@/shared/api/get-query-clinet';
import { pokemonOptions } from '@/shared/api/query-options';

export default function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(pokemonOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeDomains />
    </HydrationBoundary>
  );
}
