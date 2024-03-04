import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ProtectedRoutes = ({ children }) => {
  const { token } = useContext(AuthContext);
  console.log(token);
  return <div>ProtectedRoutes</div>;
};

export default ProtectedRoutes;
