import React, { forwardRef } from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

type FormFieldProps = {
  label: string;
  description: string;
  // Use ReactElement instead of ReactNode to ensure it's a single element
  children: React.ReactElement;
};

// Use forwardRef to forward refs to the child
export const CustomFormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, description, children, ...props }, ref) => {
    // Clone the child to inject props and ref
    const childWithProps = React.cloneElement(children, {
      ...props,
      ref,
    });

    return (
      <FormItem>
        <FormLabel className="font-bold text-xl">{label}</FormLabel>
        <FormControl>{childWithProps}</FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

CustomFormField.displayName = 'CustomFormField';
