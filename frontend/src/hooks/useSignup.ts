import axios from "axios";
import BACKEND_URL from "../backendUrl";
import { SignupInput } from "inputschemas";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

interface ValidInputTypes {
  name: string;
  username: string;
  email: string;
  password: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    name,
    username,
    email,
    password,
    role,
  }: SignupInput) => {
    const trimmedInputs = {
      name: name.trim(),
      username: username.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
    };
    const validationError = validateInputs(trimmedInputs);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        {
          name,
          username,
          email,
          password,
          role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        setAuthUser(response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || "Signup failed");
      } else {
        setError((error as Error).message || "Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, signup };
};

const validateInputs = ({
  name,
  username,
  email,
  password,
}: ValidInputTypes): string | null => {
  if (!name || !username || !email || !password) {
    return "All fields are required.";
  }
  if (password.length < 8) {
    return "Password must be atleast 8 characters long.";
  }
  if (username.length < 5) {
    return "Username must be atleast 5 characters long.";
  }
  return null;
};

export default useSignup;
