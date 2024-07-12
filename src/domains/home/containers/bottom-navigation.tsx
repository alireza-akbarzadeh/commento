'use client';
import { usePathname } from 'next/navigation';
import { IconType } from '@/shared/components';
import { NavItem } from '../components';

type Navigation = { icon: IconType; label: string; href: string };

const navigation: Navigation[] = [
  {
    icon: 'square-grid-rounded',
    label: 'دسته‌‌بندی‌ها',
    href: '/categories',
  },
  { icon: 'coupon', label: 'تخفیف‌ها', href: '/discount' },
  { icon: 'person', label: 'پروفایل', href: '/profile' },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="mb-2 mt-6 w-full border-t border-t-border-primary">
      <div className="flex items-center justify-between pb-[34px] pt-[17.5px]">
        <NavItem
          icon="magnifier"
          href="/search"
          active={pathname.startsWith('/')}
          label="جستجو"
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
