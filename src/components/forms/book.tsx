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
      message: "Book's name must be at least 1 character long.",
    })
    .max(100, {
      message: "Book's name must be shorter than 100 characters long.",
    }),
  description: z
    .string()
    .min(1, {
      message: 'Book description must be at least 1 character long.',
    })
    .max(150, {
      message: 'Book description must be shorter than 150 characters long.',
    }),
  authorId: z.string().min(1, { message: 'Author must be selected' }),
});

export default function CreateBookForm() {
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: '',
      description: '',
      authorId: '',
    },
  });

  const onSubmit = (values: z.infer<typeof bookSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* BOOK'S NAME */}
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
        {/* BOOK'S DESCRIPTION */}
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
        {/* BOOK'S AUTHOR */}
        <FormField
          control={form.control}
          name="authorId"
          render={({ field }) => (
            <CustomFormField
              label="Book's Author"
              description="This is the author of the book."
            >
              <Combobox
                {...field}
                notFoundText="No author found"
                searchText="Search for an author"
                selectText="Select an author"
              />
            </CustomFormField>
          )}
        />
        <Button type="submit" className="font-semibold">
          Create Book
        </Button>
      </form>
    </Form>
  );
}
