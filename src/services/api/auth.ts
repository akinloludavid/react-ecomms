import axios from "axios";
import { IUserLoginDetails } from "../../types";

export const userLogin = async (userDetails: IUserLoginDetails) => {
  const res = await axios.post(
    "https://fakestoreapi.com/auth/login",
    userDetails
  );

  return res.data;
};
