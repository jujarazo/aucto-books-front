'use client';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField } from '../ui/form';
import { Button } from '../ui/button';
import { CustomFormField } from './field';
import { useToast } from '../ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { AuthorPostData, authorSchema } from '@/types';
import { postAuthor } from '@/services';

export default function CreateAuthorForm() {
  const { toast } = useToast();

  const form = useForm<AuthorPostData>({
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

  const onSubmit = (values: AuthorPostData) => {
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
