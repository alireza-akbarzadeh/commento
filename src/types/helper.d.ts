export type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> &
  TOverridden;

declare const brand: unique symbol;

declare type Brand<T, TBrand> = T & { [brand]: TBrand };

declare type Expect<T extends true> = T;
declare type IsTrue<T extends true> = T;
declare type IsFalse<T extends false> = T;
