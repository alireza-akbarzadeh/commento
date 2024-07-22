import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

interface TypographyStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  fontFamily: string;
}

const typographyPlugin = plugin(({ addUtilities, theme }) => {
  const newUtilities: Record<string, TypographyStyle> = {};
  const typography = theme('typography') as Record<
    string,
    [string, Omit<TypographyStyle, 'fontSize'>]
  >;

  Object.entries(typography).forEach(([key, value]) => {
    newUtilities[`.text-${key}`] = {
      fontSize: value[0],
      lineHeight: value[1].lineHeight,
      fontWeight: value[1].fontWeight,
      fontFamily: value[1].fontFamily,
    };
  });

  addUtilities(newUtilities as unknown as CSSRuleObject);
});

export default typographyPlugin;
