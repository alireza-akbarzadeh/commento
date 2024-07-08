import Link from 'next/link';
import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function SearchAction() {
  return (
    <section>
      <div className="my-2 flex items-center justify-between rounded-[12px] bg-surface-secondary p-2.5">
        <Link href="/search" className="flex gap-2.5">
          <Icon name="magnifier" iconClassName="text-content-secondary" />
          <p className="text-base font-medium text-content-tertiary">
            جستجوی محصول...
          </p>
        </Link>
        <Button variant="ghost">
          <Icon iconClassName="text-content-primary" name="microphone" />
        </Button>
      </div>
    </section>
  );
}
