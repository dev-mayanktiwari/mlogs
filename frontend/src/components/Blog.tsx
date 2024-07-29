import React from "react";

interface BlogProps {
  date: string;
  title: string;
}

const Blog: React.FC<BlogProps> = ({ date, title }) => {
  return (
    <article className="mb-12 font-myFont flex items-center justify-between mx-1">
      <div className="text-sm">
        <span>{date}</span>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </article>
  );
};

export default Blog;
