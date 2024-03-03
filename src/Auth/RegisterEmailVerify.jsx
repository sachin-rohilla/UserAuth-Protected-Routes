import React from "react";
import { MdMarkEmailRead } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-lg rounded-lg p-8 flex flex-col gap-2 items-center w-96">
        <MdMarkEmailRead className="text-yellow-400 text-7xl" />
        <h1 className="text-xl font-bold">Email Verification</h1>
        <button className="border border-yellow-400 text-yellow-400 rounded-lg w-full py-2 mt-2">
          Re-Send Email
        </button>
      </div>
    </div>
  );
};

export default RegisterEmailVerify;
