import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import BACKEND_URL from "../backendUrl";

interface ValidInputTypes {
  email: string;
  password: string;
}

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setAuthUser } = useAuthContext();

  const signin = async ({ email, password }: ValidInputTypes) => {
    const trimmedInputs = {
      email: email.trim(),
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
        `${BACKEND_URL}/api/v1/user/signin`,
        {
          email: trimmedInputs.email,
          password: trimmedInputs.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        localStorage.setItem("currentUser", JSON.stringify(response.data))
        localStorage.setItem("token", response.data.token);
        setAuthUser(response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || "Signin failed.");
      } else {
        setError((error as Error).message || "Signin failed.");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, signin };
};

const validateInputs = ({
  email,
  password,
}: ValidInputTypes): string | null => {
  if (!email || !password) {
    return "All fields are required.";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  return null;
};

export default useSignIn;