export type Products = {
  title: string;
  price: string;
  inventory?: string;
  imageUrl: string;
  discount?: number;
};

export const products: Products[] = [
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: 'در ۲۴ فروشگاه',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: 'در ۱۲ فروشگاه',
    discount: 32,
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: 'در ۴۵ فروشگاه',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: 'در ۴۵ فروشگاه',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: 'در ۴۵ فروشگاه',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: 'در ۴۵ فروشگاه',
  },
];
