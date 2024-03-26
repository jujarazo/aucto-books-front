import { Button } from '@/components/ui/button';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import Link from 'next/link';
import Books from '../components/home/books';
import { getBooks } from '@/services';

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
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Books />
      </HydrationBoundary>
    </div>
  );
}
