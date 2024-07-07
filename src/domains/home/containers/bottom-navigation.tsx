import Image from 'next/image';
import Link from 'next/link';

export function BottomNavigation() {
  const navigation = [
    { path: '/svg/search.svg', label: 'جستوجو', link: '/search' },
    { path: '/svg/category.svg', label: 'دسته‌‌بندی‌ها', link: '/categories' },
    { path: '/svg/discount.svg', label: 'تخفیف‌ها', link: '/discount' },
    { path: '/svg/user-profile.svg', label: 'پروفایل', link: '/profile' },
  ];

  return (
    <div className="h-[93px] w-full border-t border-t-border-primary">
      <div className="flex items-center justify-between pb-[34px] pt-[17.5px]">
        {navigation.map((nav) => (
          <Link
            key={nav.label}
            href={nav.link}
            className="flex flex-col items-center space-y-[3px]"
          >
            <div className="size-[20px]">
              <Image
                width={20}
                height={20}
                src={nav.path}
                alt={nav.label}
                className="size-full object-contain"
              />
            </div>
            <span>{nav.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
