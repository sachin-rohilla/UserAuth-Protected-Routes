import { useMutation, useQueries } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { registerEmailVerify } from "../api/query/userQuery";
import { toast } from "react-toastify";

const RegisterEmailSuccess = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { mutate } = useMutation({
    mutationFn: registerEmailVerify,
    mutationKey: ["registerEmailVerify"],
    onSuccess: (data) => {
      toast.success(data?.data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
      navigate("/signIn");
    },
  });

  useEffect(() => {
    if (token) {
      mutate(token);
    }
  }, []);
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
