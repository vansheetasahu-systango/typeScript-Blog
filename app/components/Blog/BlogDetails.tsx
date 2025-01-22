 "use client";

import styles from "./BlogDetails.module.css";
import authorBio from "./AuthorBio"; // Import author bio
// import Header from "../Header/Header";
import Image from "next/image"; // Import the Image component

interface Blog {
  title: string;
  author?: string; // Make author optional
  date?: string;   // Make date optional
  image?: string;  // Make image optional
  description: string;
  content: string;
}

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  // Handle back button click
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className={styles.container}>
        {/* Blog Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={blog.image || "/images/default-thumbnail.jpg"}
            alt={blog.title || "Blog Thumbnail"}
            className={styles.thumbnail}
            width={500} // Add width
            height={300} // Add height
          />
        </div>

        {/* Blog Content */}
        <div className={styles.contentWrapper}>
          {/* Blog Title */}
          <h1 className={styles.title}>{blog.title || "Untitled Blog"}</h1>

          {/* Metadata */}
          <p className={styles.meta}>
            <span>
              By <strong>{blog.author || "Anonymous"}</strong>
            </span>{" "}
            |{" "}
            <span>
              <em>
                {blog.date
                  ? new Date(blog.date).toLocaleDateString()
                  : "Unknown Date"}
              </em>
            </span>
          </p>

          {/* Blog Description */}
          <p className={styles.description}>
            {blog.description || "No description available."}
          </p>

          {/* Main Content */}
          <div className={styles.content}>
            <p>{blog.content || "No content available."}</p>
          </div>

          {/* Author Bio */}
          <div className={styles.authorBio}>
            <h3>About the Author</h3>
            <p>{authorBio[blog.author || ""] || "Author bio not available."}</p>
          </div>

          {/* Back Button */}
          <button className={styles.backButton} onClick={handleBack}>
            Back to Homepage
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;