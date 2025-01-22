import BlogList from "./components/Blog/BlogList";
import ShareBlog from "./blog/create/ShareBlog";
import Header from "./components/Header/Header";

// Blog interface definition now includes 'id'
interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
}

interface HomeProps {
  searchParams: Promise <{
    query?: string;
  }> 
}

async function fetchBlogs(searchQuery = ""): Promise<Blog[]> {
  const res = await fetch("https://6787e220c4a42c9161089db1.mockapi.io/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const blogs: Blog[] = await res.json();
  return blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

export default async function Home({ searchParams }: HomeProps) {
  const searchParamsValue = await searchParams ;  
const searchQuery = searchParamsValue.query || "";
  const blogs = await fetchBlogs(searchQuery);

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <Header />
      </div>
      <ShareBlog />
      <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Website</h1>
      <BlogList blogs={blogs} />
    </main>
  );
}
