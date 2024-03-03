import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../FormSchema/formSchema";
import InputComp from "../components/InputComp";
import { Link } from "react-router-dom";

const SignUp = () => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96  shadow-lg rounded-lg  p-8">
        <h1 className="font-semibold text-xl mb-2">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComp
            label="First Name"
            id="firstName"
            type="text"
            register={register}
            error={errors.firstName}
          />
          <InputComp
            label="Last Name"
            id="lastName"
            type="text"
            register={register}
            error={errors.lastName}
          />
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
            Sign Up
          </button>
        </form>
        <Link to="/signIn" className="text-sm ">
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
