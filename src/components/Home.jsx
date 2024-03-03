import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button
        className="bg-yellow-400 text-white py-2 px-4 rounded-lg"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
