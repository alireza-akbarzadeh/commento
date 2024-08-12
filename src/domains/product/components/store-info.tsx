import { StoreCard } from "@/shared/components";

export function StoreInfo() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      <StoreCard navigation="/stores" hasFilter />
      <StoreCard navigation="/stores" />
      <StoreCard navigation="/stores" />
      <StoreCard navigation="/stores" showStoreBtn />
    </div>
  );
}
