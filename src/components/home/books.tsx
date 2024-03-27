'use client';

import { Book } from '@/components/home/bookCard';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBooks } from '@/services';
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Plus, User } from 'lucide-react';

export default function Books() {
  // State for the navigation buttons on mobile
  const [showButtons, setShowButtons] = useState(false);

  const { toast } = useToast();

  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ['books'],
    queryFn: async () => getBooks(),
  });

  // Improve: Refactor the SSE connection to Nextjs API routes to not expose BE URL
  // Subscribe to the SSE endpoint for new book notifications
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

  const toggleButtons = () => setShowButtons(!showButtons);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Books components */}
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

      {/* Mobile Navigation Buttons */}
      {showButtons && (
        <div className="fixed md:hidden bottom-16 right-4 flex flex-col items-center gap-2">
          {/* Navigate to create book route */}
          <Button
            className="rounded-full font-bold"
            asChild
            onClick={toggleButtons}
          >
            <Link href="/books/create">
              <BookOpen size={18} />
            </Link>
          </Button>

          {/* Navigate to create author route */}
          <Button
            className="rounded-full font-bold"
            asChild
            onClick={toggleButtons}
          >
            <Link href="/authors/create">
              <User size={18} />
            </Link>
          </Button>
        </div>
      )}

      {/* Toggle navigation buttons */}
      <div className="fixed md:hidden bottom-4 right-4">
        <Button
          className="rounded-full font-bold"
          onClick={toggleButtons}
          asChild
        >
          <a className="flex items-center justify-center">
            <Plus size={18} />
          </a>
        </Button>
      </div>
    </div>
  );
}
