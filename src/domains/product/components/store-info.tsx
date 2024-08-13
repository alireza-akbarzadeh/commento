import { StoreCard } from "@/shared/components";

export function StoreInfo() {
  return (
    <div className="mt-2 flex flex-col gap-2">
      <StoreCard blank navigation={"https://www.digikala.com/"} hasFilter />
      <StoreCard blank navigation={"https://www.digikala.com/"} />
      <StoreCard blank navigation={"https://www.digikala.com/"} />
      <StoreCard blank navigation={"https://www.digikala.com/"} showStoreBtn />
    </div>
  );
}
