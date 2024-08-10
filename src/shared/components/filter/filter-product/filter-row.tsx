'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';

type FilterRowProps = {
  title: string;
};

export const FilterRow = (props: FilterRowProps) => {
  const { title } = props;
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.append('tab', '1');
    replace(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <button
      onClick={handleSearch}
      className="flex w-full items-center justify-between py-3"
    >
      <p className="text-content-primary text-bodyMedium">{title}</p>
      <Icon name="chevron-left" iconClassName="text-content-tertiary" />
    </button>
  );
};
