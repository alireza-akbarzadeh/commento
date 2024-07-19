import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Icon } from '@/shared/components';

export function SearchAction() {
  const t = useTranslations('HomePage');
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
            {t('searchForProdcut')}
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
