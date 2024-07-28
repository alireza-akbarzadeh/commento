'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon, Spin } from '@/shared/components';
import { Button, Input } from '@/shared/ui';

type SearchFiledProps = {
  searchTerm: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pending: boolean;
  isSearchTermEmpty: boolean;
  handleClearSearch: () => void;
};

export function SearchFiled(props: SearchFiledProps) {
  const {
    handleClearSearch,
    handleInputChange,
    isSearchTermEmpty,
    pending,
    searchTerm,
  } = props;
  const { back } = useRouter();
  return (
    <div className="my-2 flex items-center gap-[2px] px-4">
      <Button
        onClick={back}
        variant="ghost"
        className="flex-center size-10 p-0"
      >
        <Icon iconClassName="text-content-tertiary" name="arrow-right" />
      </Button>
      <div className="relative flex w-full items-center rounded-xl bg-surface-secondary py-3 pl-2.5 pr-5">
        <Icon
          iconClassName="text-content-tertiary"
          name="magnifier"
          size="medium"
        />
        <Input
          value={searchTerm}
          onChange={(event) => handleInputChange(event)}
          placeholder="جستوجوی محصول..."
          className="search-input-class"
        />
        {pending ? (
          <Spin />
        ) : (
          !isSearchTermEmpty && (
            <Icon
              iconClassName="text-content-tertiary "
              onClick={handleClearSearch}
              size="xxSmall"
              name="circle-cross-fill"
            />
          )
        )}
      </div>
    </div>
  );
}
