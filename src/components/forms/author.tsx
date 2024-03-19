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

const authorSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Author name must be at least 2 characters long.',
    })
    .max(100, {
      message: 'Author name must be shorter than 100 characters long',
    }),
});

const NameFormField = (
  props: ControllerRenderProps<
    {
      name: string;
    },
    'name'
  >
) => {
  return (
    <FormItem>
      <FormLabel>Author's Name</FormLabel>
      <FormControl>
        <Input placeholder="Ex. Brandon Sanderson" {...props} />
      </FormControl>
      <FormDescription>
        This is the author's name as it will appear on the site.
      </FormDescription>
      <FormMessage />
    </FormItem>
  );
};

export default function CreateAuthorForm() {
  const form = useForm<z.infer<typeof authorSchema>>({
    resolver: zodResolver(authorSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (values: z.infer<typeof authorSchema>) => {
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
        <Button type="submit">Create author</Button>
      </form>
    </Form>
  );
}
