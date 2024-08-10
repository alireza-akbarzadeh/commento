import { StoreAppbar, StoreDomains } from '@/domains/stores';

export default function StorePage() {
    return (
        <section id="store-page" data-testid="store-page">
            <StoreAppbar />
            <StoreDomains />
        </section>
    );
}
