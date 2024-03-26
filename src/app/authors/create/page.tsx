import CreateAuthorForm from '@/components/forms/author';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CreateAuthor() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">Create author</h1>
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
      <div className="mt-4 max-w-lg">
        <CreateAuthorForm />
      </div>
    </div>
  );
}
