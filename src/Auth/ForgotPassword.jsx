import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdArrowBack } from "react-icons/io";
import InputComp from "../components/InputComp";
import { forgotPasswordSchema } from "../FormSchema/formSchema";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordEmail } from "../api/query/userQuery";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPasswordEmail,
    mutationKey: ["forgotPasswordEmail"],
    onSuccess: (data) => {
      console.log(data?.data?.message);
      navigate(`/forgot-email-sent/${email}`);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    mutate(data?.email);
    setEmail(data?.email);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 shadow-lg rounded-lg p-8 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Link to="/signIn" title="Back to Sign In">
            <IoMdArrowBack className="text-2xl" />
          </Link>
          <h1 className="text-xl font-bold">Forgot Password</h1>
        </div>
        <p className="text-xs text-gray-600">
          Enter your email address for which account you want to reset your
          password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComp
            label="Email"
            id="email"
            type="text"
            register={register}
            error={errors.email}
          />

          <button
            type="submit"
            className="bg-yellow-400 text-white rounded-lg w-full py-2 mt-2 mb-2"
          >
            {isPending ? <Spinner /> : "Forgot Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
