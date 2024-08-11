import { OfflineStoresDomain, StoreAppbar } from '@/domains';

export default function OfflineStorePage() {
  return (
    <section id="online-store" data-testid="online-store">
      <StoreAppbar />
      <OfflineStoresDomain />
    </section>
  );
}
