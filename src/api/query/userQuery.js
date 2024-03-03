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
