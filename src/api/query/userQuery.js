import { User_Url } from "../../constants/constants";
import Axios from "../axios";

export const signIn = async ({ email, password }) => {
  try {
    const response = await Axios.post("http://localhost:9000/user/signin", {
      email,
      password,
    });
    return response;
  } catch (err) {
    throw new Error(err.response?.data?.message || "An error occurred");
  }
};

export const signUp = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await Axios.post("http://localhost:9000/user/signUp", {
      firstName,
      lastName,
      email,
      password,
    });
    return response;
  } catch (err) {
    throw new Error(err.response?.data?.message || "An error occurred");
  }
};

export const registerEmailVerification = async (email) => {
  try {
    const response = await Axios.post(
      "http://localhost:9000/user/send-verification-mail",
      {
        email,
      }
    );
    return response;
  } catch (err) {
    throw new Error(err.response?.data?.message || "An error occurred");
  }
};

export const registerEmailVerify = async (token) => {
  try {
    const response = await Axios.post(
      "http://localhost:9000/user/verfiy-user-mail",
      {
        token,
      }
    );
    return response;
  } catch (err) {
    throw new Error(err.response?.data?.message || "An error occurred");
  }
};

export const forgotPasswordEmail = async (email) => {
  try {
    const response = await Axios.post(
      "http://localhost:9000/user//forgot-password",
      {
        email,
      }
    );
    return response;
  } catch (err) {
    throw new Error(err.response?.data?.message || "An error occurred");
  }
};
