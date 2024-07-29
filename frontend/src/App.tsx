import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UnitBlogPage from "./pages/UnitBlogPage";

function App() {
  const { authUser } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/blog" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/blog" /> : <Signin />}
        />
        <Route path="/blog" element={authUser ? <BlogPage /> : <Signin />} />
        <Route
          path="/blog/:id"
          element={authUser ? <UnitBlogPage /> : <Signin />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
