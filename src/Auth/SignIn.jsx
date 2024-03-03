import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../FormSchema/formSchema";
import InputComp from "../components/InputComp";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { PiSpinner } from "react-icons/pi";
import Spinner from "../components/Spinner";

const SignIn = () => {
  const navigate = useNavigate();
  const { login, token } = useContext(AuthContext);
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: signIn,
    mutationKey: ["signIn"],
    onSuccess: (data) => {
      // window.location.href = "/";
      navigate("/");
      if (data?.data?.token) {
        login(data?.data?.token);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96  shadow-lg rounded-lg  p-8">
        <h1 className="font-semibold text-xl mb-2">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComp
            label="Email"
            id="email"
            type="text"
            register={register}
            error={errors.email}
          />
          <InputComp
            label="Password"
            id="password"
            type="password"
            register={register}
            error={errors.password}
          />
          <Link
            className="text-sm mt-2 text-yellow-400 font-bold"
            to="/forgot-password"
          >
            Forgot Password
          </Link>

          <button
            type="submit"
            className="bg-yellow-400 text-white rounded-lg w-full py-2 mt-2 mb-2  "
          >
            {isPending ? <Spinner /> : "Sign In"}
          </button>
        </form>

        <Link to="/signUp" className="text-sm">
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
