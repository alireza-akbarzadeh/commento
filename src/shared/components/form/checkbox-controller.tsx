import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef } from 'react';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui';
import { Checkbox } from '@/shared/ui';
import { cn } from '@/shared/utils';

interface InputControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: string;
  description?: string;
  itemClassName?: string;
  checkboxControll: Omit<ControllerProps<TFieldValues, TName>, 'render'>;
  checkboxProps?: ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
}

export function CheckboxController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: InputControllerProps<TFieldValues, TName>) {
  const {
    checkboxControll,
    checkboxProps,
    label,
    itemClassName,
    description,
    ...rest
  } = props;

  return (
    <FormField
      render={({ field }) => (
        <FormItem
          className={cn(
            'flex flex-row items-start space-x-3 space-y-0',
            itemClassName,
          )}
        >
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              {...field}
              {...checkboxProps}
            />
          </FormControl>
          {label && (
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
            </div>
          )}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      {...checkboxControll}
      {...rest}
    />
  );
}

CheckboxController.defaultProps = {
  description: false,
  itemClassName: false,
  checkboxProps: {},
};
