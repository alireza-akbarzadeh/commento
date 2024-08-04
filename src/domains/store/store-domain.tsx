import { StoreCard } from '@/shared/components';

export const StoreDomains = () => {
  return (
    <div className="mt-2 flex flex-col gap-2">
      <StoreCard />
      <StoreCard hasActionButton />
      <StoreCard />
      <StoreCard />
    </div>
  );
};
