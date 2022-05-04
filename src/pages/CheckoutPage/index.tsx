import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore, useUserStore } from "../../zust/store";
import { usePaystackPayment } from "react-paystack";
import * as Yup from "yup";
import { useFormik } from "formik";
import { paystackPublicKey } from "../../config/config";
import { convertPriceToNaira } from "../../utils/helper";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    isOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const [reference, setReference] = useState({});

  const { saveUserSignupDetails, user }: any = useUserStore((state) => state);
  const { totalAmt, emptyCart } = useCartStore((state) => state);
  const initialValues = {
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().min(11).max(11).required("Required"),
    address: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const { getTotalAmount } = useCartStore((state) => state);
  useEffect(() => {
    getTotalAmount();
  }, []);

  const config = {
    reference: new Date().getTime().toString(),
    email: formik.values.email,
    fullName: formik.values.firstname + " " + formik.values.lastname,
    address: formik.values.address,
    amount: 10000 * totalAmt.toFixed(2),
    publicKey: paystackPublicKey,
  };
  const initializePayment = usePaystackPayment(config);
  const handleSubmit = (userDetails: any) => {
    saveUserSignupDetails(userDetails);
    initializePayment(onSuccess, onClose);
  };

  // you can call this function anything
  const onSuccess = (ref: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    setReference(ref);
    onModalOpen();
    emptyCart();
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

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
        <Text mb={2} fontSize={["lg", " -0xl"]} fontWeight="bold">
          Fill in your details
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Flex gap={[0, 4]} direction={["column", "row"]}>
            <Box w="100%">
              <Input
                mb="4"
                name="firstname"
                placeholder="firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <Text fontSize={"12px"} mb={2} mt={-4} color={"tomato"}>
                  {formik.errors.firstname}
                </Text>
              ) : null}
            </Box>
            <Box w="100%">
              <Input
                mb="4"
                name="lastname"
                placeholder="lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <Text fontSize={"12px"} mb={2} mt={-4} color={"tomato"}>
                  {formik.errors.lastname}
                </Text>
              ) : null}
            </Box>
          </Flex>

          <Input
            mb="4"
            name="phone"
            placeholder="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <Text fontSize={"12px"} mb={2} mt={-4} color={"tomato"}>
              {formik.errors.phone}
            </Text>
          ) : null}
          <Input
            name="email"
            mb="4"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text fontSize={"12px"} mb={2} mt={-4} color={"tomato"}>
              {formik.errors.email}
            </Text>
          ) : null}
          <Input
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            mb="4"
            placeholder="No 25, Smith Rowe Street, North London, Osapa, Lagos"
          />
          {formik.touched.address && formik.errors.address ? (
            <Text fontSize={"12px"} mb={2} mt={-4} color={"tomato"}>
              {formik.errors.address}
            </Text>
          ) : null}

          <Button type="submit" w="100%">
            PROCEED TO PAY {convertPriceToNaira(totalAmt)}
          </Button>
        </form>
        <Flex mt={3} gap={2}>
          <Text>Already have an account?</Text>
          <Link to="/signin" style={{ textDecoration: "underline" }}>
            Sign In
          </Link>
        </Flex>
      </Flex>
      <Modal
        isCentered
        onClose={onModalClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>
                Thank you <strong>{user?.firstname}</strong>{" "}
              </Text>
              <Text>Your order has been placed successfully.</Text>
              <Text>You'll receive delivery in the next 48hrs.</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CheckoutPage;
