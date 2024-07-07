import { Mic, Search } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/shared/ui';

export function SearchAction() {
  return (
    <section>
      <div className="my-2 flex items-center justify-between p-2.5">
        <Link href="/search" className="flex gap-2.5">
          <Search className="size-[19px] text-content-secondary" />
          <p className="text-base font-medium text-content-tertiary">
            جستجوی محصول...
          </p>
        </Link>
        <Button variant="ghost">
          <Mic className="size-[19px] text-content-primary" />
        </Button>
      </div>
    </section>
  );
}
