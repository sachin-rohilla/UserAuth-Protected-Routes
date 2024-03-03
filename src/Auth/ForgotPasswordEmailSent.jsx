import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ForgotPasswordEmailSent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg rounded-lg p-8 flex flex-col items-center gap-2">
        <FaCircleCheck className="text-5xl text-yellow-400" />
        <h1 className="text-xl font-bold">Successfully Sent</h1>
        <p className="text-xs text-gray-500">we have sent</p>
      </div>
    </div>
  );
};

export default ForgotPasswordEmailSent;
