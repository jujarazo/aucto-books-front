import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type propTypes = {
  title: string;
  description: string;
  author: string;
};

export function Book({ title, description, author }: propTypes) {
  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>{author}</p>
      </CardFooter>
    </Card>
  );
}
