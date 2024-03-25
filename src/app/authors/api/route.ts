import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const url = process.env.BACKEND_URL + '/api/authors';
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

export async function GET() {
  const url = process.env.BACKEND_URL + '/api/authors';
  const response = await fetch(url);

  const data = await response.json();

  return Response.json(data);
}
