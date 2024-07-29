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

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found.");
      }
      // console.log(token)
      // console.log(typeof token);
      // console.log(token);
      // const str = "Bearer ";
      // const auth = str.concat(token);
      // console.log(auth);
      const authToken = "Bearer " + token;
      // console.log(authToken);
      //   const currentUser = localStorage.getItem("currentUser");
      //   console.log(JSON.parse(currentUser).token);
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: authToken,
        },
      });
      if (response.data) {
        setBlogs(response.data.posts);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { loading, error, blogs };
};

export default useFetchBlogs;
