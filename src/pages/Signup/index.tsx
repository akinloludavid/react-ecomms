import React from "react";
import { Box, Input, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
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
          Create Account
        </Text>
        <Flex gap={[0, 4]} direction={["column", "row"]}>
          <Input mb="4" placeholder="firstname" />
          <Input mb="4" placeholder="lastname" />
        </Flex>
        <Input mb="4" placeholder="username" />
        <Input mb="4" placeholder="phone" />
        <Input mb="4" placeholder="email" />
        <Input mb="4" placeholder="password" />

        <Button>SIGN UP</Button>

        <Flex mt={3} gap={2}>
          <Text>Already have an account?</Text>
          <Link to="/signin" style={{ textDecoration: "underline" }}>
            Sign In
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
