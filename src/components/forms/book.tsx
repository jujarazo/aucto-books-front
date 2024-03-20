'use client';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField } from '../ui/form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { CustomFormField } from './field';
import { Combobox } from './combobox';

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
          render={({ field }) => (
            <CustomFormField
              label="Book's Name"
              description="This is the book's name as it will appear on the site."
            >
              <Input placeholder="Ex. The Way of Kings" {...field} />
            </CustomFormField>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <CustomFormField
              label="Book's Description"
              description="This is the book's description as it will appear on the site."
            >
              <Textarea
                placeholder="Ex. A book about a guy with a big sword"
                {...field}
              />
            </CustomFormField>
          )}
        />
        <Combobox />
        <Button type="submit">Create Book</Button>
      </form>
    </Form>
  );
}
