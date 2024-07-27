import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'fa'],
    defaultLocale: 'default',
    localeDetection: false,
  },
};

export default withNextIntl(nextConfig);
