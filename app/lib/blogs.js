export async function getAllBlogs() {
  const res = await fetch('https://6787e220c4a42c9161089db1.mockapi.io/blogs');
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return await res.json();
}
