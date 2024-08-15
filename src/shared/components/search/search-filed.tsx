"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef } from "react";

import { Icon } from "@/shared/components";
import { Button, Input } from "@/shared/ui";

type SearchFiledProps = {
  searchTerm: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isSearchTermEmpty: boolean;
  handleClearSearch: () => void;
  hasBackButton?: boolean;
};

export function SearchFiled(props: SearchFiledProps) {
  const {
    handleClearSearch,
    handleInputChange,
    isSearchTermEmpty,
    searchTerm,
    hasBackButton = true,
  } = props;
  const focusInput = useRef<HTMLInputElement>(null);
  const { back } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    focusInput.current?.focus();
  }, [pathname]);

  return (
    <div className="flex items-center gap-2 py-2 pl-4 pr-4">
      {hasBackButton && (
        <Button
          onClick={back}
          variant="ghost"
          className="flex-center size-10 p-0 hover:bg-accent"
        >
          <Icon iconClassName="text-content-secondary" name="arrow-right" />
        </Button>
      )}
      <div className="relative flex w-full items-center rounded-xl bg-surface-secondary py-2 pl-2.5 pr-5">
        <Icon
          iconClassName="text-content-secondary"
          name="magnifier"
          size="medium"
        />
        <Input
          ref={focusInput}
          onChange={(event) => handleInputChange(event)}
          value={searchTerm}
          placeholder="جستجوی محصول..."
          className="search-input-class placeholder:text-content-tertiary"
        />
        {!isSearchTermEmpty && (
          <div className="flex size-8 items-center justify-center">
            <Icon
              iconClassName="text-content-tertiary "
              onClick={handleClearSearch}
              size="small"
              name="circle-cross-fill"
            />
          </div>
        )}
      </div>
    </div>
  );
}
