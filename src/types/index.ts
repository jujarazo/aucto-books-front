import { z } from 'zod';

// Normal Types
export type Book = {
  _id: string;
  name: string;
  description: string;
  authorId: string;
  authorName: string;
};

export type Author = {
  _id: string;
  name: string;
};

// Schema for form validation
export const authorSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Author name must be at least 2 characters long.',
    })
    .max(100, {
      message: 'Author name must be shorter than 100 characters long',
    }),
});

export const bookSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Book's name must be at least 1 character long.",
    })
    .max(100, {
      message: "Book's name must be shorter than 100 characters long.",
    }),
  description: z
    .string()
    .min(1, {
      message: 'Book description must be at least 1 character long.',
    })
    .max(150, {
      message: 'Book description must be shorter than 150 characters long.',
    }),
  authorId: z.string().min(1, { message: 'Author must be selected' }),
});

// Infer types from schema
export type AuthorPostData = z.infer<typeof authorSchema>;

export type BookPostData = z.infer<typeof bookSchema>;
