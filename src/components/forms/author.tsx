'use client';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField } from '../ui/form';
import { Button } from '../ui/button';
import { CustomFormField } from './field';
import { useToast } from '../ui/use-toast';
import { useMutation } from '@tanstack/react-query';

export const authorSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Author name must be at least 2 characters long.',
    })
    .max(100, {
      message: 'Author name must be shorter than 100 characters long',
    }),
});

async function postAuthor(authorData: z.infer<typeof authorSchema>) {
  const response = await fetch('/authors/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authorData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create author');
  }

  return response.json();
}

export default function CreateAuthorForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof authorSchema>>({
    resolver: zodResolver(authorSchema),
    defaultValues: {
      name: '',
    },
  });

  const mutation = useMutation({
    mutationFn: postAuthor,
    onSuccess: () => {
      toast({
        title: 'Author created',
        description: 'The author has been created successfully',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Error creating author',
        description: error.message,
      });
    },
  });

  const onSubmit = (values: z.infer<typeof authorSchema>) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <CustomFormField
              label="Author's Name"
              description="This is the author's name as it will appear on the site."
            >
              <Input placeholder="Ex. Brandon Sanderson" {...field} />
            </CustomFormField>
          )}
        />
        <Button type="submit" className="font-semibold">
          Create author
        </Button>
      </form>
    </Form>
  );
}
