export type Products = {
  title: string;
  price: string;
  inventory?: string;
  imageUrl: string;
  discount?: number;
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
    discount: 32,
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
  discountLabel: number | null;
};

export const productList: FindProductTypes[] = [
  {
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت',
    priceRange: '159,000',
    storeName: 'در ۲۴ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [{ title: 'تهران' }, { title: 'اوپن باکس' }],
    hasDiscountBadge: true,
    loved: true,
    discountLabel: 43,
  },
  {
    title: 'گوشی موبایل سامسونگ مدل Galaxy S21',
    priceRange: '140,000',
    storeName: 'در ۱۸ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [],
    hasDiscountBadge: false,
    loved: false,
    discountLabel: null,
  },
  {
    title: 'گوشی موبایل شیائومی مدل Mi 11',
    priceRange: '120,000',
    storeName: 'در ۲۵ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [],
    hasDiscountBadge: false,
    loved: true,
    discountLabel: null,
  },
  {
    title: 'گوشی موبایل هوآوی مدل P40 Pro',
    priceRange: '130,000',
    storeName: 'در ۱۵ فروشگاه',
    imageUrl: '/images/phone.webp',
    info: [],
    hasDiscountBadge: true,
    loved: false,
    discountLabel: 43,
  },
];
