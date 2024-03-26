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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Author } from '@/app/utils/types';
import { useState } from 'react';
import { useDebounce } from '@/hooks';
import { useToast } from '../ui/use-toast';

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

async function getAuthors(nameFilter: string): Promise<Author[]> {
  const response = await fetch(
    `/authors/api?name=${encodeURIComponent(nameFilter)}`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch authors');
  }

  return response.json();
}

async function postBook(bookData: z.infer<typeof bookSchema>) {
  const response = await fetch('/books/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create book');
  }

  return response.json();
}

export default function CreateBookForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: '',
      description: '',
      authorId: '',
    },
  });

  const [authorQuery, setAuthorQuery] = useState('');
  const [selectedAuthorName, setSelectedAuthorName] = useState('');

  const debouncedAuthorQuery = useDebounce(authorQuery, 500);

  const queryClient = useQueryClient();

  const { data: authors } = useQuery({
    queryKey: ['authors', debouncedAuthorQuery],
    queryFn: async () => getAuthors(debouncedAuthorQuery),
    enabled: debouncedAuthorQuery.length > 0,
  });

  const mutation = useMutation({
    mutationFn: postBook,
    onSuccess: () => {
      toast({
        title: 'Book created',
        description: "The book's been created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error creating book',
        description: error.message,
      });
    },
  });

  const onSubmit = (values: z.infer<typeof bookSchema>) => {
    mutation.mutate(values);
    form.reset();
  };

  const handleAuthorSearchChange = (value: string) => {
    setAuthorQuery(value);
  };

  const handleSelectAuthor = (authorId: string, authorName: string) => {
    setSelectedAuthorName(authorName);
    form.setValue('authorId', authorId);
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
                options={
                  authors?.map((author) => ({
                    value: author._id,
                    label: author.name,
                  })) || []
                }
                onChange={handleSelectAuthor}
                onInputChange={handleAuthorSearchChange}
                selectedLabel={selectedAuthorName}
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
