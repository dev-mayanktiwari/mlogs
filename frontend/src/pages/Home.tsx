// src/pages/Home.tsx
import React from "react";
import Navbar from "../components/Navbar";
import BlogFooter from "../components/BlogFooter";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-backgroundDark font-myFont py-8 px-12 mt-16 min-h-screen text-primary-foreground">
        <h1 className="text-2xl italic mb-4">Hello everyone,</h1>
        <p className="text-lg mb-4 text-justify">
          Take your cup of coffee, sit down, and relax. Read the easiest to
          begin, beginner blogs on tech, college, and life.
        </p>
        <p className="text-lg mb-4 text-justify">
          I am <span className="font-semibold">dev Mayank Tiwari</span>, here to
          make your life easier, even if mine is challenging... haha ;-D
        </p>
        <p className="text-lg mb-4 text-justify">
          I will share my experiences about building things, college life, and
          learning new stuff. Just click on that boring signin button, do some
          formality and enjoy the best ever tech blogs.
        </p>
        <p className="text-lg mb-4 text-justify">
          So, let's go on a journey to grow together...
        </p>
        <p className="text-lg mb-4 text-justify">
          If you want to connect with me, you can reach out on:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <a
              href="https://www.linkedin.com/in/devmayank-tiwari"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dev-mayanktiwari"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://x.com/devmayanktiwari"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/1165637746480664646"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>

      <BlogFooter />
    </>
  );
};

export default Home;
