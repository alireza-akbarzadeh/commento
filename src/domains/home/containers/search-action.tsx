import Link from 'next/link';
import { Icon } from '@/shared/components';

export function SearchAction() {
  return (
    <section
      id="search-action"
      data-testid="search-action"
      className="px-4 py-2"
    >
      <Link
        href="/search"
        className="flex h-[52px] items-center justify-between rounded-xl bg-surface-secondary py-2 pl-2 pr-4"
      >
        <div className="flex gap-2.5">
          <Icon name="magnifier" iconClassName="text-content-secondary" />
          <p className="text-labelMedium text-content-tertiary">
            جستجوی محصول...
          </p>
        </div>
        <div className="flex size-8 items-center justify-center">
          <Icon
            size="small"
            iconClassName="text-content-primary"
            name="microphone"
          />
        </div>
      </Link>
    </section>
  );
}
