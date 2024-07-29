// src/pages/BlogDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import useUnitBlog from "../hooks/useUnitBlog";
import Navbar from "../components/Navbar";
import formatDate from "../utils/dateExtractor";
import unitBlogSkeleton from "../utils/untiBlogSkeleton";

const UnitBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  // console.log(id)
  const { blog, loading, error } = useUnitBlog(id!);

  if (loading) {
    return unitBlogSkeleton();
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!blog) {
    return <p>No blog found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-backgroundDark font-myFont py-8 px-12 mt-16 min-h-screen text-primary-foreground">
        <h1 className="text-3xl font-bold pb-2">{blog.title}</h1>
        <p>{formatDate(blog.createdAt)}</p>
        <p className="pt-5">{blog.content}</p>
      </div>
    </>
  );
};

export default UnitBlogPage;
