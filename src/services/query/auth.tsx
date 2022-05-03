import { useMutation } from "react-query";
import { IUserLoginDetails } from "../../types";
import { userLogin } from "../api/auth";

export const useLogin = (options = {}) => {
  const { mutate, isLoading, isError } = useMutation(userLogin, {
    mutationKey: "login",
    ...options,
  });

  return { mutate, isLoading, isError };
};
