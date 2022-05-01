import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../zust/store";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore((state) => state);
  useEffect(() => {
    if (!user) {
      navigate("/signin");
      return;
    }
  }, []);
  return <Text>Checkout page</Text>;
};

export default CheckoutPage;
