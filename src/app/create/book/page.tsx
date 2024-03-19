import CreateBookForm from '@/components/forms/book';

export default function CreateBook() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Create book</h1>
      <div className="mt-4">
        <CreateBookForm />
      </div>
    </div>
  );
}
