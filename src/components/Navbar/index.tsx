import React from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      justify={"space-between"}
      align="center"
      width={"100vw"}
      height="60px"
      px={20}
      backgroundColor="cyan.600"
    >
      <Box>
        <Link to={"/"}>
          <Text fontSize={"32px"} fontWeight="500">
            E=COMMS
          </Text>
        </Link>
      </Box>
      <Box display={"flex"} gap={24}>
        <Link to="/cart">
          <Text>Cart</Text>
        </Link>
        <Link to="/signin">
          <Text>Login / Signup</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
