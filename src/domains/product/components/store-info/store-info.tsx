import { StoreCard } from './store-card';

export function StoreInfo() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      <StoreCard hasFilter />
      <StoreCard hasActionButton />
      <StoreCard viewStore />
    </div>
  );
}
