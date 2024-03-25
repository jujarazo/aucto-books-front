export async function GET() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const url = process.env.BACKEND_URL + '/api/books';
  const queryParams = new URLSearchParams({ withAuthorName: '1' });
  const response = await fetch(`${url}?${queryParams.toString()}`, options);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return Response.json(data);
}
