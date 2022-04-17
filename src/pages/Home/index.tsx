import React from "react";
import { Grid } from "@chakra-ui/react";
import CardComp from "../../components/Card";
import { useGetAllProducts } from "../../services/query/products";
import { IGetAllProducts } from "../../types";
import { Link } from "react-router-dom";
import LoadingCards, {
  HomePageCardLoaders,
} from "../../components/Loaders/LoadingCards";

const Home = () => {
  const { data: productsData, isLoading } = useGetAllProducts();

  if (isLoading) {
    return <HomePageCardLoaders />;
  }
  return (
    <div>
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
        {productsData?.map((product: IGetAllProducts) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <CardComp
              productName={product.title}
              productPrice={product.price}
              productImage={product.image}
            />
          </Link>
        ))}
      </Grid>
      home
    </div>
  );
};

export default Home;
