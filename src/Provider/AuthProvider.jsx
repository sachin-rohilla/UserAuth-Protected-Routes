import { jwtDecode } from "jwt-decode";
import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies();
  // const navigate = useNavigate();

  const login = (data) => {
    setToken(data);
    const storeToken = jwtDecode(data);
    setCookie("jwt", storeToken, {
      path: "/",
      maxAge: exp,
      sameSite: true,
    });
    setUser(storeToken);
  };
  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt");
    window.location.href = "/signIn";
    console.log("hello");
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
