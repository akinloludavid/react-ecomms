import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import CardComp from "../../components/Card";
import { useGetAllProducts } from "../../services/query/products";
import { IGetAllProducts } from "../../types";
import { Link } from "react-router-dom";
import LoadingCards, {
  HomePageCardLoaders,
} from "../../components/Loaders/LoadingCards";
import FilterSection from "../../components/filter-section";
import { useStore } from "../../zust/store";

const getFilteredProducts = (arr: any[], query: string) => {
  return arr?.filter((row: any) => {
    return Object.values(row).some((el) =>
      String(el).toLowerCase().includes(query)
    );
  });
};
const Home = () => {
  const category = useStore((state) => state.category);
  const searchTerm = useStore((state) => state.searchTerm);

  const { data: productsData, isLoading } = useGetAllProducts(category);
  if (isLoading) {
    return <HomePageCardLoaders />;
  }

  const allProducts = getFilteredProducts(productsData, searchTerm);
  return (
    <Box>
      <FilterSection />

      <Text mt={6} ml={4} fontWeight={"semibold"} fontSize="24px">
        All Products
      </Text>
      <Grid
        justifyContent={"center"}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
        p={4}
      >
        {allProducts?.map((product: IGetAllProducts) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <CardComp
              productName={product.title}
              productPrice={product.price}
              productImage={product.image}
            />
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
