import BlogDetails from "../../components/Blog/BlogDetails";
import styles from "./Page.module.css";

// Define types for the blog details
interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  [key: string]: unknown;
}

// Fetch blog details based on the dynamic ID
async function fetchBlogDetails(id: string): Promise<Blog> {
  const res = await fetch(`https://6787e220c4a42c9161089db1.mockapi.io/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }
  return res.json();
}

interface BlogPageProps {
  params: Promise< { id: string }>
} ;


export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = await fetchBlogDetails(id);

  return (
    <div className={styles.container}>
      <BlogDetails blog={blog} />
    </div>
  );
}
