import { Author, AuthorPostData, Book, BookPostData } from '@/types';

// Home page
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

// Create author page
export async function postAuthor(authorData: AuthorPostData) {
  const response = await fetch('/authors/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authorData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create author');
  }

  return response.json();
}

// Create book page
export async function getAuthors(nameFilter: string): Promise<Author[]> {
  const response = await fetch(
    `/authors/api?name=${encodeURIComponent(nameFilter)}`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch authors');
  }

  return response.json();
}

export async function postBook(bookData: BookPostData) {
  const response = await fetch('/books/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create book');
  }

  return response.json();
}
