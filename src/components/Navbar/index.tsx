import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../zust/store";
import { MdShoppingCart } from "react-icons/md";
const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <Flex
      justify={"space-between"}
      align="center"
      width={"100vw"}
      height="60px"
      px={10}
      backgroundColor="cyan.600"
    >
      <Box>
        <Link to={"/"}>
          <Text fontSize={"32px"} fontWeight="500">
            E=COMMS
          </Text>
        </Link>
      </Box>

      <Flex align={"center"} display={"flex"} gap={4}>
        <Link to="/cart">
          {cart.length > 0 && (
            <Box
              display={"flex"}
              alignItems="center"
              position={"relative"}
              gap={1}
              p={3}
            >
              <MdShoppingCart />
              <Text>Cart</Text>
              <Box
                width={"16px"}
                height="16px"
                right={1}
                top={1}
                bgColor={"#fff"}
                borderRadius="50%"
                position={"absolute"}
              >
                <Text fontSize={"xs"} textAlign="center">
                  {cart.length}
                </Text>
              </Box>
            </Box>
          )}
        </Link>
        <Link to="/signin">
          <Text>Login / Signup</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
