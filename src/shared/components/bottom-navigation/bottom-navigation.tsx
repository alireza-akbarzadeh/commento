'use client';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { IconType } from '@/shared/components';
import { NavItem } from './nav-item';

type Navigation = { icon: IconType; label: string; href: string };

export function BottomNavigation() {
  const pathname = usePathname();
  const t = useTranslations('Globals');
  const navigation: Navigation[] = [
    {
      icon: 'square-grid-rounded',
      label: t('categories'),
      href: '/categories',
    },
    { icon: 'coupon', label: t('discount'), href: '/discounts' },
    { icon: 'person', label: t('profile'), href: '/profile' },
  ];
  return (
    <div className="sticky bottom-0 left-0 z-50 h-[93px] w-full border-t border-border-primary bg-content-inverse">
      <div className="mx-auto grid h-full grid-cols-4 items-center">
        <NavItem
          icon="magnifier-fill"
          href="/search"
          active={pathname.startsWith('/')}
          label={t('search')}
          size="medium"
        />
        {navigation.map(({ icon, label, href }) => (
          <NavItem
            key={label}
            icon={icon}
            href={href}
            active={pathname.startsWith(href)}
            label={label}
            size="medium"
          />
        ))}
      </div>
    </div>
  );
}
