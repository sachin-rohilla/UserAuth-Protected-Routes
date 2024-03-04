import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AlreadyLogin = ({ children }) => {
  const { token } = useContext(AuthContext);
  return <div>{!token && children}</div>;
};

export default AlreadyLogin;
