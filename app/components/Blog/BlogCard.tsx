import Image from 'next/image';  // Import Image from next/image
import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
}

export default function BlogCard({
  title,
  description,
  author,
  date,
  thumbnail,
}: BlogCardProps) {
  return (
    <div className={styles.card}>
      {/* Replace <img> with <Image> */}
      <Image
        src={thumbnail || "https://via.placeholder.com/150"}
        alt={title}
        className={styles.thumbnail}
        width={150} // Set an explicit width
        height={150} // Set an explicit height
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <span className={styles.author}>By {author}</span>
          <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
