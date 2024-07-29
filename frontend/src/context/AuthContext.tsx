import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  FC,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  authUser: any; // Replace `any` with the actual type of your authUser
  setAuthUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider."
    );
  }
  return context;
};

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser") || "null");
    } catch (error) {
      console.error("Failed to parse authUser from localStorage:", error);
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
