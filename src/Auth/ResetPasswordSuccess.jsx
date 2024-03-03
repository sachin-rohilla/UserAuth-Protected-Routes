import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const ResetPasswordSuccess = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-lg rounded-lg p-8 flex flex-col gap-2 items-center w-96">
          <FaCircleCheck className="text-5xl text-yellow-400" />

          <h1 className="text-xl font-bold">Password Reset Done</h1>
          <p className="text-xs text-gray-500">
            {" "}
            Now you can access your account.
          </p>
          <Link
            to="/signIn"
            className="block bg-yellow-400 text-white rounded-lg w-full py-2 mt-2 text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
