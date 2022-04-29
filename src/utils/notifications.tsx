import { useToast } from "@chakra-ui/react";
const useCustomToast = () => {
  const toast = useToast();

  const successToast = (successMsg: string = "Operation successful") => {
    return toast({
      status: "success",
      title: "Success",
      description: successMsg,
      position: "bottom-right",
      isClosable: true,
    });
  };
  const errorToast = (errorMessage: string = "Error occurred") => {
    return toast({
      status: "error",
      title: "Error",
      description: errorMessage,
      position: "bottom-right",
      isClosable: true,
    });
  };
  return {
    successToast,
    errorToast,
  };
};

export default useCustomToast;
