'use client';

import { Book } from '@/components/home/book';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBooks } from './page';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function Books() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ['books'],
    queryFn: async () => getBooks(),
  });

  useEffect(() => {
    // Set up the SSE connection for receiving new book notifications
    const eventSource = new EventSource(
      `http://localhost:8080/api/books/subscribe`
    );

    eventSource.onmessage = () => {
      toast({
        title: 'New book added',
        description:
          'A new book has been added to the library by another user.',
      });
      queryClient.invalidateQueries({ queryKey: ['books'] });
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    // Clean up the SSE connection when the component unmounts
    return () => {
      eventSource.close();
    };
  }, [queryClient]);

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
