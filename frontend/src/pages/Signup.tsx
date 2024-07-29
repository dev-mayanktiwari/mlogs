import { Link } from "react-router-dom";

import InputBox from "../components/InputBox"; // Adjust the path as necessary
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import useSignup from "../hooks/useSignup";
import { useState } from "react";
import BlogFooter from "../components/BlogFooter";

export default function Signup() {
  const { error, loading, signup } = useSignup();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "USER";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signup({ name, username, email, password, role });
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundDark">
        <div className="bg-backgroundDark  p-8 rounded-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center font-myFont">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <InputBox
              type="text"
              id="name"
              label="Full Name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
            <InputBox
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              placeholder="Enter your username"
            />
            <InputBox
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Enter your email"
            />
            <InputBox
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter your password"
            />
            {error && (
              <div className="mt-4 text-center text-red-500 mb-2">{error}</div>
            )}
            <Button type="submit" disabled={loading} text="Sign up" />
          </form>
          <div className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <BlogFooter />
    </>
  );
}
