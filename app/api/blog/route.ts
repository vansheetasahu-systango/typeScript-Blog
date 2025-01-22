 // File: blog-website-main/app/api/blogs/route.ts

import { NextResponse } from "next/server";

const API_URL = "https://6787e220c4a42c9161089db1.mockapi.io/blogs";

// Define a type for the blog structure
interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  [key: string]: unknown; // Using `unknown` instead of `any`
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = await searchParams.get("query")?.toLowerCase() || "";

  try {
    const response = await fetch(API_URL);
    const blogs: Blog[] = await response.json();

    // Filter blogs based on title, description, or content
    const filteredBlogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(query) ||
      blog.description.toLowerCase().includes(query) ||
      blog.content.toLowerCase().includes(query)
    );

    return NextResponse.json(filteredBlogs);
  } catch {
    // Removed unused `error` variable
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
