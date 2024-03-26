'use client';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField } from '../ui/form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { CustomFormField } from './field';
import { Combobox } from './combobox';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from '@/hooks';
import { useToast } from '../ui/use-toast';
import { BookPostData, bookSchema } from '@/types';
import { getAuthors, postBook } from '@/services';

export default function CreateBookForm() {
  const { toast } = useToast();

  const form = useForm<BookPostData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: '',
      description: '',
      authorId: '',
    },
  });

  // State for the author search query
  const [authorQuery, setAuthorQuery] = useState('');
  const [selectedAuthorName, setSelectedAuthorName] = useState('');

  // Debounce the author query to avoid making too many requests
  const debouncedAuthorQuery = useDebounce(authorQuery, 500);

  const queryClient = useQueryClient();

  // Fetch authors based on the debounce search query
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

  const onSubmit = (values: BookPostData) => {
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
