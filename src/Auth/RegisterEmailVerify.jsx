import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import { registerEmailVerification } from "../api/query/userQuery";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const RegisterEmailVerify = () => {
  const { email } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: registerEmailVerification,
    mutationKey: ["registerEmailVerification"],
    onSuccess: (data) => {
      console.log(data?.data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const handleClick = () => {
    mutate(email);
  };

  useEffect(() => {
    if (email) {
      mutate(email);
    }
  }, []);

  if (!email) {
    return <h1>Something went wrong!</h1>;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-lg rounded-lg p-8 flex flex-col gap-2 items-center w-96">
        <MdMarkEmailRead className="text-yellow-400 text-7xl" />
        <h1 className="text-xl font-bold">Email Verification</h1>
        <p className="text-xs text-gray-500">
          we have sent you an email verfication to{" "}
          <span className="font-bold text-black">
            {email ?? "test@gmail.com"}.
          </span>{" "}
          If you didn't receive it, click the button below.
        </p>
        <button
          onClick={handleClick}
          className="border border-yellow-400 text-yellow-400 rounded-lg w-full py-2 mt-2"
        >
          {isPending ? <Spinner /> : "Re-Send Email"}
        </button>
      </div>
    </div>
  );
};

export default RegisterEmailVerify;
