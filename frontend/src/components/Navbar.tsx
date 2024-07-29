import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthContext();
  const logout = useLogout();
  return (
    <header className="bg-buttonColor py-4 px-6 font-myFont absolute top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">mlogs</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              {authUser ? (
                <button onClick={logout} className="hover:underline">
                  Logout
                </button>
              ) : (
                <Link to="/signin" className="hover:underline">
                  Signin
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
