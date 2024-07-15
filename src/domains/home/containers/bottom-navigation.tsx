'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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
    <div className="sticky bottom-0 left-0 z-50 h-[93px] w-full border-t-[0.5px] border-border-primary bg-content-inverse">
      <div className="mx-auto grid h-full grid-cols-4 items-center">
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
