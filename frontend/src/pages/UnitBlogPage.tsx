import { useParams } from "react-router-dom";
import useUnitBlog from "../hooks/useUnitBlog";
import Navbar from "../components/Navbar";
import formatDate from "../utils/dateExtractor";
import BlogFooter from "../components/BlogFooter";
import "react-loading-skeleton/dist/skeleton.css";
import FullBlogSkeleton from "../utils/FullBlogSkeleton";

const UnitBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const { blog, loading, error } = useUnitBlog(id!);

  return (
    <>
      <Navbar />
      <div className="bg-backgroundDark font-myFont py-8 px-12 mt-16 min-h-screen text-primary-foreground">
        {loading ? (
          FullBlogSkeleton()
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : blog ? (
          <>
            <h1 className="text-3xl font-bold pb-2">{blog.title}</h1>
            <p>{formatDate(blog.createdAt)}</p>
            <p className="pt-5">{blog.content}</p>
          </>
        ) : (
          <p className="text-red-500 text-center">No blog found.</p>
        )}
      </div>
      <BlogFooter />
    </>
  );
};

export default UnitBlogPage;
