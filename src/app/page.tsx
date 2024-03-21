import { Book } from '@/components/home/book';

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-4">Current books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}
