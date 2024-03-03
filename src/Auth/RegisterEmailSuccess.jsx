import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const RegisterEmailSuccess = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-lg rounded-lg p-8 flex flex-col gap-2 items-center w-96">
          <MdMarkEmailRead className="text-yellow-400 text-7xl" />
          <h1 className="text-xl font-bold">Successfully Registration</h1>
          <Link
            to="/signIn"
            className="block bg-yellow-400 text-white rounded-lg w-full py-2 mt-2 text-center"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmailSuccess;
