'use client';

import { Book } from '@/components/home/book';
import { useQuery } from '@tanstack/react-query';
import { getBooks } from './page';

export default function Books() {
  const { data, error } = useQuery({
    queryKey: ['books'],
    queryFn: async () => getBooks(),
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.length &&
        data?.map((book) => (
          <Book
            key={book._id}
            author={book.authorName}
            description={book.description}
            title={book.name}
          />
        ))}
    </div>
  );
}
