import axios from "axios";
import { useEffect, useState } from "react";
import BACKEND_URL from "../backendUrl";

interface Blog {
  id: string;
  createdAt: Date;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}

const useUnitBlog = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const authToken = "Bearer " + token;
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: authToken,
          },
        });
        if (response) {
          setBlog(response.data.post);
        }
      } catch (error: any) {
        setError(error.message || "Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  return { blog, loading, error };
};

export default useUnitBlog;
