import type { Config } from 'tailwindcss';

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
      boxShadow: {
        elevation1: '0px 4px 18px 0px #0000002B',
        elevation2: '0px 6px 16px 0px #0000001F',
        elevation3: ' 0px 8px 16px 0px #00000014',
      },
      fontSize: {
        xss: ' 0.688rem',
        md: '1rem',
        displayLarge: [
          '3rem',
          {
            lineHeight: '4.5rem',
            fontWeight: '600',
          },
        ],
        displayMedium: [
          '2.5rem',
          {
            lineHeight: '3.75rem',
            fontWeight: '600',
          },
        ],
        displaySmall: [
          '2rem',
          {
            lineHeight: '3rem',
            fontWeight: '600',
          },
        ],
        headlinelarge: [
          '2rem',
          {
            lineHeight: '3rem',
            fontWeight: '600',
          },
        ],
        headlineMedium: [
          '1.5rem',
          {
            lineHeight: '2.25rem',
            fontWeight: '600',
          },
        ],
        headlineSmall: [
          '1.25rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '600',
          },
        ],
        headlineXSmall: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '600',
          },
        ],
        labellarge: [
          '1.125rem',
          {
            lineHeight: '2rem',
            fontWeight: '500',
          },
        ],
        labelMedium: [
          '1rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '500',
          },
        ],
        labelSmall: [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '500',
          },
        ],
        labelXSmall: [
          '0.75rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '500',
          },
        ],
        bodylarge: [
          '1.125rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        bodyMedium: [
          '1rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        bodySmall: [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        bodyXSmall: [
          '0.75rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        bodyXXSmall: [
          '0.75rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        vazirmatn: 'var(--font-vazirmatn)',
      },
      colors: {
        content: {
          primary: '#000000',
          inverse: '#ffffff',
          tertiary: '#636366',
          secondary: '#2C2C2E',
          disabled: '#B1B2B2',
          accent: '#276EF1',
          negative: '#E11900',
          positive: '#048848',
          warning: '#E49E15',
        },
        brand: {
          it: '#EC4C60',
          main: '#EC4C60',
        },
        surface: {
          primary: '#fff',
          secondary: '#F5F7F7',
          tertiary: '#F0F0F0',
          overlayDark: '#0000004D',
          disabled: '#F5F7F7',
          inverse: { primary: '#000', secondary: '# 323333' },
          accent: '#276EF1',
          negative: '#E11900',
          negativeLight: '#FFEFED',
          positive: '#048848',
          positiveLight: '#E6F2ED',
          warning: '#FFC043',
        },
        border: {
          default: 'hsl(var(--border))',
          primary: '#E1E3E3',
          inversePrimary: '#323333',
          selected: '#323333',
          focus: '#323333',
          accent: '#A0BFF8',
          negative: '#E11900',
          positive: '#66D19E',
          warning: '#FFE3AC',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gray: {
          50: '#F5F7F7',
          100: '#EAEDED',
          200: '#E1E3E3',
          300: '#CACCCC',
          400: '#B1B2B2',
          500: '#747575',
          600: '#535454',
          700: '#323333',
          800: '#1F1F1F',
          900: '#141414',
        },
        orange: {
          50: '#FFF0E9',
          100: '#FFAC8A',
          200: '#FFAC8A',
          300: '#FF8C61',
          400: '#FF7140',
          500: '#E55C2E',
          600: '#A64221',
          700: '#662A14',
          900: '#422E28',
        },
        blue: {
          50: '#EFF3FE',
          100: '#D4E2FC',
          200: '#A0BFF8',
          300: '#5B91F5',
          400: '#276EF1',
          500: '#1E54B7',
          600: '#174291',
          700: '#143166',
          900: '#262F40',
        },
        green: {
          50: '#E6F2ED',
          100: '#ADDEC9',
          200: '#66D19E',
          300: '#06C167',
          400: '#048848',
          500: '#03703C',
          600: '#03582F',
          700: '#10462D',
          900: '#24332C',
        },
        yellow: {
          50: '#FFFAF0',
          100: '#FFF2D9',
          200: '#FFE3AC',
          300: '#06C167',
          400: '#FFC043',
          500: '#E49E15',
          600: '#996F00',
          700: '#674D1B',
          900: '#332E24',
        },
        red: {
          50: '#FFEFED',
          100: '#FED7D2',
          200: '#F1998E',
          300: '#E85C4A',
          400: '#E11900',
          500: '#AB1300',
          600: '#870F00',
          700: '#5A0A00',
          900: '#402926',
        },
        indigo: {
          50: '#F3F2FE',
          100: '#C6C0F9',
          200: '#C6C0F9',
          300: '#7163E8',
          400: '#4A38DB',
          500: '#483AB8',
          600: '#443997',
          700: '#3D3678 ',
          900: '#2C2942',
        },
        // TODO: check with desing code color are wrong
        purple: {
          50: '#FFEFED',
          100: '#FED7D2',
          200: '#F1998E',
          300: '#E85C4A',
          400: '#E11900',
          500: '#AB1300',
          600: '#870F00',
          700: '#5A0A00 ',
          900: '#402926',
        },
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
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
