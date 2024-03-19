'use client';

import { Input } from '@/components/ui/input';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { forwardRef } from 'react';
import { Textarea } from '../ui/textarea';

const bookSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Book name must be at least 1 character long.',
    })
    .max(100, {
      message: 'Book name must be shorter than 100 characters long.',
    }),
  description: z
    .string()
    .min(1, {
      message: 'Book description must be at least 1 character long.',
    })
    .max(150, {
      message: 'Book description must be shorter than 150 characters long.',
    }),
});

const NameFormField = forwardRef(
  (
    props: ControllerRenderProps<
      {
        name: string;
      },
      'name'
    >,
    ref
  ) => {
    return (
      <FormItem>
        <FormLabel>Book's Name</FormLabel>
        <FormControl>
          <Input placeholder="Ex. The Way of Kings" {...props} />
        </FormControl>
        <FormDescription>
          This is the book's name as it will appear on the site.
        </FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

NameFormField.displayName = 'NameFormField';

const DescriptionFormField = forwardRef(
  (
    props: ControllerRenderProps<
      {
        description: string;
      },
      'description'
    >,
    ref
  ) => {
    return (
      <FormItem>
        <FormLabel>Book's Description</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Ex. A book about a guy with a big sword"
            {...props}
          />
        </FormControl>
        <FormDescription>
          This is the book's description as it will appear on the site.
        </FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

export default function CreateBookForm() {
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof bookSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => <NameFormField {...field} />}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => <DescriptionFormField {...field} />}
        />
        <Button type="submit">Create Book</Button>
      </form>
    </Form>
  );
}
