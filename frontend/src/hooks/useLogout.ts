import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    setAuthUser(null);
  };
  return logout;
};

export default useLogout;
