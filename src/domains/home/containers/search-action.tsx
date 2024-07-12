import Link from 'next/link';
import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function SearchAction() {
  return (
    <section id="search-action" data-testid="search-action">
      <Link
        href="/search"
        className="my-2 flex items-center justify-between rounded-xl bg-surface-tertiary p-2.5"
      >
        <div className="flex gap-2.5">
          <Icon name="magnifier" iconClassName="text-content-secondary" />
          <p className="text-labelMedium text-content-tertiary">
            جستجوی محصول...
          </p>
        </div>
        <Button variant="ghost">
          <Icon iconClassName="text-content-primary" name="microphone" />
        </Button>
      </Link>
    </section>
  );
}
