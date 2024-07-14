import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef } from 'react';
import { useUnmount } from '@/shared/hooks';

type DebounceOptions = {
  loading?: boolean;
  trailing?: boolean;
  maxWait?: number;
};

type ControllFunctions = {
  cancel: () => void;
  flush: () => void;
  isPending: () => boolean;
};

export type DebounceState<T extends (...args: any) => ReturnType<T>> = ((
  ...args: Parameters<T>
) => ReturnType<T> | undefined) &
  ControllFunctions;

export function useDebounceCallback<T extends (...args: any) => ReturnType<T>>(
  func: T,
  delay: number = 500,
  options?: DebounceOptions,
): DebounceState<T> {
  const debouncedFunc = useRef<ReturnType<typeof debounce>>();

  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });
  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(func, delay, options);

    const wrappedFunc: DebounceState<T> = (...args: Parameters<T>) =>
      debouncedFuncInstance(...args);
    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel();
    };

    wrappedFunc.isPending = () => !!debouncedFunc.current;

    wrappedFunc.flush = () => debouncedFuncInstance.flush();

    return wrappedFunc;
  }, [delay, func, options]);

  // Update the debounced function ref whenever func, wait, or options change
  useEffect(() => {
    debouncedFunc.current = debounce(func, delay, options);
  }, [func, delay, options]);

  return debounced;
}
