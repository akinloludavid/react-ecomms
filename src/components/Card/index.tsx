import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { convertPriceToNaira, trimString } from "../../utils/helper";

interface CardProps {
  productName: string;
  productPrice: string | number;
  productImage: string;
}

const CardComp = ({ productName, productPrice, productImage }: CardProps) => {
  const addToCart = (e: any) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <Box
      width={"100%"}
      shadow="md"
      maxWidth={"360px"}
      border="1px solid lightgray"
      borderRadius={"4px"}
      cursor="pointer"
    >
      <Flex width={"100%"} flexDirection="column" height="100%">
        <Box p={1} display="flex" justifyContent="center">
          <Image
            //  objectFit="contain"
            width={"100"}
            height="300"
            src={productImage}
          />
        </Box>
        <Flex justify={"space-between"} p={2}>
          <Text>{trimString(productName)}</Text>
          <Text fontWeight={600}>{convertPriceToNaira(productPrice)}</Text>
        </Flex>
        <Box p={2} display="flex" flexDirection={"column"} mt="auto">
          <Button
            onClick={(e) => addToCart(e)}
            mt="auto"
            width={"100%"}
            leftIcon={<FaShoppingCart />}
          >
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardComp;
