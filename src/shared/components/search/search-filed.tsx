'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { Icon } from '@/shared/components';
import { Button, Input } from '@/shared/ui';

type SearchFiledProps = {
  searchTerm: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isSearchTermEmpty: boolean;
  handleClearSearch: () => void;
};

export function SearchFiled(props: SearchFiledProps) {
  const {
    handleClearSearch,
    handleInputChange,
    isSearchTermEmpty,
    searchTerm,
  } = props;
  const { back } = useRouter();

  return (
    <div className="my-2 flex items-center gap-[2px] px-4">
      <Button
        onClick={back}
        variant="ghost"
        className="flex-center t size-10 p-0 hover:bg-accent"
      >
        <Icon iconClassName="text-content-tertiary" name="arrow-right" />
      </Button>
      <div className="relative flex w-full items-center rounded-xl bg-surface-secondary py-2 pl-2.5 pr-5">
        <Icon
          iconClassName="text-content-tertiary"
          name="magnifier"
          size="medium"
        />
        <Input
          onChange={(event) => handleInputChange(event)}
          value={searchTerm}
          placeholder="جستوجوی محصول..."
          className="search-input-class"
        />
        {!isSearchTermEmpty && (
          <Icon
            iconClassName="text-content-tertiary "
            onClick={handleClearSearch}
            size="xxSmall"
            name="circle-cross-fill"
          />
        )}
      </div>
    </div>
  );
}
