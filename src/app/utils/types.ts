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
