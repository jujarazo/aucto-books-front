import { NextRequest } from 'next/server';

export async function GET(request: Request) {
  const queryParams = new URLSearchParams(request.url.split('?')[1]);
  const url =
    process.env.BACKEND_URL + '/api/authors' + '?' + queryParams.toString();
  const response = await fetch(url);

  const data = await response.json();

  return Response.json(data);
}

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
