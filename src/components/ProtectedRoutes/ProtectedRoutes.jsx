import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }
  }, []);
  return <div>{token && children}</div>;
};

export default ProtectedRoutes;
