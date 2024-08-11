import { Suspense } from 'react';
import { OnlineStoreDomains, StoreAppbar } from '@/domains';

export default function StorePage() {
  return (
    <section id="online-store" data-testid="online-store">
      <Suspense>
        <StoreAppbar />
        <OnlineStoreDomains />
      </Suspense>
    </section>
  );
}
