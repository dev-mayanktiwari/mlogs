import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { useNavigate } from "react-router-dom";
import blogSkeleton from "../utils/blogSkeleton";
import formatDate from "../utils/dateExtractor";
import BlogFooter from "../components/BlogFooter";

const BlogPage = () => {
  const { loading, error, blogs } = useFetchBlogs();
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/blog/${id}`);
  };
  // console.log(blogs);
  return (
    <>
      <Navbar />
      <div className="bg-backgroundDark font-myFont py-8 px-12 mt-16 min-h-screen text-primary-foreground">
        {loading && blogSkeleton()}
        {error && <p className="text-red-500 text-center"> {error} </p>}
        {!loading && !error && blogs.length === 0 && (
          <p className="text-red-500 text-center">No blogs to fetch.</p>
        )}
        {blogs.map((blog) => (
          <div key={blog.id} onClick={() => handleClick(blog.id)} className="cursor-pointer">
            <Blog title={blog.title} date={formatDate(blog.createdAt)} />
          </div>
        ))}
      </div>

      <BlogFooter />
    </>
  );
};

export default BlogPage;
