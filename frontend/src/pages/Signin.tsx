import { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import useSignIn from "../hooks/useSignIn";
import BlogFooter from "../components/BlogFooter";

export default function Signin() {
  const { error, loading, signin } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signin({ email, password });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundDark">
        <div className="bg-backgroundDark p-8 rounded-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center font-myFont">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <InputBox
              type="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              type="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <div className="mt-4 text-center text-red-500 mb-2">{error}</div>
            )}
            <Button type="submit" text="Sign in" disabled={loading} />
          </form>
          <div className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <BlogFooter />
    </>
  );
}
