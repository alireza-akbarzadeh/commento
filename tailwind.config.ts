import type { Config } from 'tailwindcss';
import { boxShadow, colors, typography } from './src/shared/theme';
import typographyPlugin from './typography-plugin';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        tablet: '768px',
        labtop: '1024px',
        desktop: '1280px',
        'desktop-l': '1536px',
      },
      boxShadow: {
        ...boxShadow,
      },
      colors: {
        ...colors,
      },
      typography: {
        ...typography,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    fontFamily: {
      'vazirmatn-black': ['Vazirmatn-Black'],
      'vazirmatn-extrabold': ['Vazirmatn-ExtraBold'],
      'vazirmatn-bold': ['Vazirmatn-Bold'],
      'vazirmatn-semibold': ['Vazirmatn-SemiBold'],
      'vazirmatn-medium': ['Vazirmatn-Medium'],
      'vazirmatn-normal': ['Vazirmatn-Normal'],
      'vazirmatn-light': ['Vazirmatn-Light'],
      'vazirmatn-extralight': ['Vazirmatn-ExtraLight'],
      'vazirmatn-thin': ['Vazirmatn-Thin'],
    },
  },
  plugins: [require('tailwindcss-animate'), typographyPlugin],
} satisfies Config;

export default config;
