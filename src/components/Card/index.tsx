import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { convertPriceToNaira, trimString } from "../../utils/helper";
import { useCartStore } from "../../zust/store";
import { IGetAllProducts } from "../../types";
import AddToCartButton from "../AddToCart/Button";

const CardComp = ({ product }: any) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddProductToCart = (e: any, product: IGetAllProducts) => {
    e.preventDefault();
    addToCart(product);
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
            src={product.image}
          />
        </Box>
        <Flex justify={"space-between"} p={2}>
          <Text>{trimString(product.title)}</Text>
          <Text fontWeight={600}>{convertPriceToNaira(product.price)}</Text>
        </Flex>
        <Box p={2} display="flex" flexDirection={"column"} mt="auto">
          <AddToCartButton product={product} />
        </Box>
      </Flex>
    </Box>
  );
};

export default CardComp;
