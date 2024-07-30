import { type ClassValue, clsx } from 'clsx';
import { format, isValid } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function formatDate(date: number | Date) {
  return isValid(date) ? format(date, 'do MMMM yyyy') : 'N/A';
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ICountDown {
  value: number;
  fn: (val: number) => void;
  delay?: number;
}

// cooldown recursive functionality
// recorsion stops when value reaches 0
const countDown = ({ value, fn, delay = 1000 }: ICountDown) => {
  fn(value);
  return value > 0
    ? setTimeout(() => {
        countDown({ value: value - 1, fn, delay });
      }, delay)
    : value;
};

const deepPick = <T, K extends keyof T>(fields: string, object: T): T[K] => {
  const [first, ...remaining] = fields.split('.');
  const value = object[first as keyof T];
  if (typeof value === 'undefined') {
    throw new Error(`Property '${first}' not found in object`);
  }
  if (remaining.length === 0) {
    return value as T[K];
  }
  if (typeof value !== 'object' || value === null) {
    throw new Error(`Invalid property '${first}'`);
  }
  return deepPick(remaining.join('.'), value as unknown) as T[K];
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export { capitalize, countDown, deepPick };

/**
 * Converts a number to a Persian formatted price string.
 * @param value The number to format.
 * @returns The formatted price string in Persian.
 */
export function formatPriceToPersian(value: number): string {
  // Convert the number to a string and add commas as thousand separators
  const formattedValue = value.toLocaleString('fa-IR', {
    style: 'currency',
    currency: 'IRR',
  });

  // Return the formatted value
  return formattedValue;
}

export function formatNumberToPersian(value: number): string {
  // Convert the number to a string with Persian digits and add commas as thousand separators
  const formattedValue = value.toLocaleString('fa-IR');

  // Return the formatted value
  return formattedValue;
}
