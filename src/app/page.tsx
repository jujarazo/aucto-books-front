import { Book } from './utils/types';
import { Button } from '@/components/ui/button';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import Link from 'next/link';
import Books from './books';

export const getBooks = async (): Promise<Book[]> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch('books/api', options);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data;
};

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['books'],
    queryFn: async () => await getBooks(),
  });

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-4">Current books</h1>
        <div className="hidden md:flex gap-4">
          <Button asChild>
            <Link href="/books/create">Add a book</Link>
          </Button>
          <Button asChild>
            <Link href="/authors/create">Add an author</Link>
          </Button>
        </div>
      </div>
      <div className="fixed md:hidden bottom-4 right-4">
        <Button className="rounded-full font-bold" asChild>
          <Link href="/books/create">+</Link>
        </Button>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Books />
      </HydrationBoundary>
    </div>
  );
}
