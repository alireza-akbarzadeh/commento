export type Products = {
  title: string;
  price: string;
  inventory?: string;
  imageUrl: string;
  discount?: string;
};

export const products: Products[] = [
  {
    imageUrl: '/images/phone.webp',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۴۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.webp',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۹۰,۰۰۰.۰۰',
    discount: '۳۲',
  },
  {
    imageUrl: '/images/phone.webp',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۲۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.webp',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۶۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.webp',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۳۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.webp',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۸۰,۰۰۰.۰۰',
  },
];

export type FindProductTypes = {
  title: string;
  priceRange: string;
  storeName: string;
  imageUrl: string;
  info: {
    title: string;
  }[];
  hasDiscountBadge: boolean;
  loved: boolean;
  discountLabel: string | null;
};

export const productList: FindProductTypes[] = [
  {
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت',
    priceRange: '۱۵۷,۰۰۰',
    storeName: 'در ۲۴ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [{ title: 'تهران' }, { title: 'اوپن باکس' }],
    hasDiscountBadge: true,
    loved: true,
    discountLabel: '۴۳',
  },
  {
    title: 'گوشی موبایل سامسونگ مدل Galaxy S21',
    priceRange: '۱۴۰,۰۰۰',
    storeName: 'در ۱۸ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [],
    hasDiscountBadge: false,
    loved: false,
    discountLabel: null,
  },
  {
    title: 'گوشی موبایل شیائومی مدل Mi 11',
    priceRange: '۱۲۰,۰۰۰',
    storeName: 'در ۲۵ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [],
    hasDiscountBadge: false,
    loved: true,
    discountLabel: null,
  },
  {
    title: 'گوشی موبایل هوآوی مدل P40 Pro',
    priceRange: '۱۳۰,۰۰۰',
    storeName: 'در ۱۵ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [],
    hasDiscountBadge: true,
    loved: false,
    discountLabel: '۵۲',
  },
];
