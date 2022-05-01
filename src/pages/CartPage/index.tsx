import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdDelete, MdOutlineArrowBack } from "react-icons/md";
import { useCartStore } from "../../zust/store";
import { convertPriceToNaira } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const { cart, increaseProductQty, reduceProductQuantity, removeFromCart } =
    useCartStore((state) => state);

  const totalAmount = cart
    .map((pro: any) => pro.totalPrice)
    .reduce((acc: any, curr: any) => acc + curr, 0);

  const handleIncreaseProductQuantity = (prod: any) => {
    increaseProductQty(prod);
  };

  const handleDecreaseProductQuantity = (prod: any) => {
    reduceProductQuantity(prod);
  };
  const handleProductDeleteFromCart = (prod: any) => {
    removeFromCart(prod);
  };

  const cartLength = cart.length;
  return (
    <Box p={[2, 20]}>
      <Flex align={"center"} gap={2}>
        <Box
          display="flex"
          alignItems={"center"}
          gap={2}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        >
          <MdOutlineArrowBack />
          <Text>Back To shopping</Text>
        </Box>
      </Flex>

      <Box mt={4}>
        <Text fontSize={24} fontWeight={"semibold"}>
          Shopping Cart:
          {cartLength > 0
            ? cartLength > 1
            : `${cartLength} items`
            ? `${cartLength} item`
            : null}
        </Text>
      </Box>

      {cart.length > 0 ? (
        cart.map((prod: any) => (
          <Grid
            shadow={"lg"}
            key={prod.id}
            templateColumns={["repeat(12, 1fr)"]}
            gap={6}
            p={[4]}
            mb={6}
          >
            <GridItem colSpan={[12, 2]}>
              <Box>
                <Text color={"gray.600"}>Product Image</Text>
                <Box width={["100%", "80%"]} borderRadius={"4px"}>
                  <Image src={prod.image} />
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={[12, 6]}>
              <Box width={"100%"} p={2}>
                <Text as="h1" fontWeight={600} fontSize={"18px"}>
                  Product Details
                </Text>
                <Text>Category: {prod.category}</Text>

                <Text>{prod.title}</Text>
                <Text>{prod.description}</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={[6, 1]}>
              <Box>
                <Text color={"gray.600"}>Unit Price</Text>
                {convertPriceToNaira(prod.price)}
              </Box>
            </GridItem>
            <GridItem colSpan={[6, 2]}>
              <Flex direction={"column"} height="100%">
                <Text color={"gray.600"} mb={2}>
                  Actions
                </Text>
                <ButtonGroup
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Button
                    disabled={prod.quantity === 1}
                    onClick={() => handleDecreaseProductQuantity(prod)}
                  >
                    -
                  </Button>
                  <Text>{prod.quantity}</Text>
                  <Button onClick={() => handleIncreaseProductQuantity(prod)}>
                    +
                  </Button>
                </ButtonGroup>
                <Button
                  mt="auto"
                  mb={2}
                  onClick={() => handleProductDeleteFromCart(prod)}
                >
                  <MdDelete /> Remove{" "}
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={[12, 1]}>
              <Box>
                <Text color={"gray.600"}>Sub total</Text>
                <Text fontWeight={"semibold"}>
                  {convertPriceToNaira(prod.totalPrice)}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        ))
      ) : (
        <Box>
          <Text>You don't have any products in your cart.</Text>
        </Box>
      )}

      <Flex flexDirection="column" align={"center"} justify={"center"}>
        <Button variant={"unstyled"} fontSize="12px" color={"gray.600"}>
          Continue Shopping to Add Items
        </Button>
        <Flex justify={"space-between"} w="100%">
          <Text color={"gray.600"}>Total Price: </Text>
          <Text>{convertPriceToNaira(totalAmount)}</Text>
        </Flex>
        <Button mt={4} width={"100%"} onClick={() => navigate("/checkout")}>
          CHECKOUT{" "}
        </Button>
      </Flex>
    </Box>
  );
};

export default CartPage;
