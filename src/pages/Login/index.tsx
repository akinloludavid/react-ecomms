import React from "react";
import { Box, Input, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Flex
      flexDirection="column"
      justify={"center"}
      align="center"
      bgColor={"gray.200"}
      height="100vh"
      overflowY={"hidden"}
    >
      <Flex
        bgColor={"#FFF"}
        width={["90%", "60%"]}
        p={4}
        flexDirection="column"
      >
        <Text fontSize={["lg", "4xl"]} fontWeight="bold">
          Login
        </Text>
        <Input mb="4" placeholder="email" />
        <Input mb="4" placeholder="password" />
        <Button>SIGN IN</Button>

        <Flex mt={3} gap={2}>
          <Text>Dont have an account?</Text>
          <Link to="/signup" style={{ textDecoration: "underline" }}>
            Sign Up
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
