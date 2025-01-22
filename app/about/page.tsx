import React from "react";
import styles from "./about.module.css";
import { User, Star, Mail } from "lucide-react";
import Header from "../components/Header/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>About Us</h1>
          <p>Sharing stories, insights, and inspiration for everyone.</p>
        </header>

        <section className={styles.section}>
          <h2>
            <User className={styles.icon} /> About Me
          </h2>
          <p>
            I created this blog to share knowledge, experiences, and inspiration
            with like-minded individuals. It’s a space to connect, learn, and
            grow together.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            <Star className={styles.icon} /> My Mission
          </h2>
          <p>
            This blog focuses on engineering innovations, sports insights, and
            personal growth stories. My mission is to inspire readers to pursue
            their dreams and achieve their full potential.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            <Mail className={styles.icon} /> Contact Me
          </h2>
          <p>
            Have questions or want to connect? Feel free to reach out at{" "}
            <a href="mailto:youremail@example.com" className={styles.link}>
              youremail@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
