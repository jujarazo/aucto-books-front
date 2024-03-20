import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Book() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Book title</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Description</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Author name</p>
      </CardFooter>
    </Card>
  );
}
