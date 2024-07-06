'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { Button } from '@/components';
import { Input } from '@/components/ui/input';

export function SearchDomian() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // use it for showing pending loading
  const [pending, startTransation] = useTransition();
  const handleClearSearch = () => setSearchTerm('');
  const isFelidEmpty = searchTerm.length !== 0;
  const handleSearch = ({ value }: { value: string }) => {
    startTransation(() => {
      setSearchTerm(value);
    });
  };

  return (
    <div>
      <div className="my-2 flex items-center gap-4 p-2.5">
        <Link href="/">
          <Image
            src="/svg/move-right.svg"
            width={17}
            height={14}
            alt="move-right"
          />
        </Link>
        <div className="relative flex w-full items-center">
          <Search className="size-[19px] text-[#2C2C2E]" />
          <Input
            value={searchTerm}
            onChange={({ target }) => handleSearch({ value: target.value })}
            placeholder="جستوجوی محصول..."
            className="border-none text-[16px] text-content-primary placeholder:text-[16px] placeholder:font-medium placeholder:text-content-tertiary focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
          />
          {isFelidEmpty && (
            <Button
              className="cursor-pointer"
              onClick={handleClearSearch}
              asChild
              variant="ghost"
            >
              <div>
                <Image
                  src="/svg/close-fill.svg"
                  width={16}
                  height={16}
                  alt="move-right"
                />
              </div>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
