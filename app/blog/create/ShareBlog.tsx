 "use client";

import Link from "next/link";
import { useAuth } from "../../lib/contexts/AuthContext";

export default function ShareBlog() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="mb-4">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="mb-4">
      {user ? (
        <Link
          href="/blog/create"
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
        >
          Share Your Blog
        </Link>
      ) : (
        <p className="text-gray-700 text-lg">
          Please sign in to share a blog.
        </p>
      )}
    </div>
  );
}
