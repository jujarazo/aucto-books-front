import CreateBookForm from '@/components/forms/book';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CreateBook() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">Create book</h1>
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
      <div className="mt-4 max-w-lg">
        <CreateBookForm />
      </div>
    </div>
  );
}
