/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useVerifyToken } from "../hooks/useVerifyToken";
import { isJwtToken } from "../utils/utils";
import { useAuth } from "../../store/authStore";

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { decodeToken } = useVerifyToken();
  const { setIsAuth } = useAuth();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token && token.length > 0 && isJwtToken(token)) {
      decodeToken(token);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className="bg-slate-800 w-full h-[100vh] text-['Raleway']">
      {children}
    </div>
  );
};
