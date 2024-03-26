import { NextRequest } from 'next/server';

export async function GET() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const url = process.env.BACKEND_URL + '/api/books';
  // Add query parameter to include author name (1 = true, 0 = false)
  const queryParams = new URLSearchParams({ withAuthorName: '1' });
  const response = await fetch(`${url}?${queryParams.toString()}`, options);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return Response.json(data);
}

export async function POST(req: NextRequest) {
  const url = process.env.BACKEND_URL + '/api/books';
  const body = await req.json();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data);
}
