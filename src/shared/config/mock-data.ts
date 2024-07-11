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
    price: '۲۴۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۹۰,۰۰۰.۰۰',
    discount: 32,
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۲۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۶۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۳۰,۰۰۰.۰۰',
  },
  {
    imageUrl: '/images/phone.png',
    title: 'گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ',
    inventory: 'در ۲۴ فروشگاه',
    price: '۲۸۰,۰۰۰.۰۰',
  },
];
