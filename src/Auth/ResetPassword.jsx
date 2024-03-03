import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../FormSchema/formSchema";
import InputComp from "../components/InputComp";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/query/userQuery";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const { mutate } = useMutation({
    mutationFn: resetPassword,
    mutationKey: ["resetPassword"],
    onSuccess: (data) => {
      navigate("/reset-password-success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    mutate({
      token: token,
      password: data.newPassword,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="shadow-lg rounded-lg p-8 flex flex-col gap-2">
        <h1 className="text-xl font-bold ">Reset Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComp
            label="New Password"
            id="newPassword"
            type="newPassword"
            register={register}
            error={errors.newPassword}
          />
          <InputComp
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword}
          />

          <button
            type="submit"
            className="bg-yellow-400 text-white rounded-lg w-full py-2 mt-2 mb-2"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
