import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { lazy, Suspense, useEffect, useState } from "react";
import styles from "./CategoryProducts.module.scss";

const SingleProductCard = lazy(() =>
  import("@/Shared/SingleProductCard/SingleProductCard")
);

const SingleCategoryProducts = ({ title, fetchProducts, id }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [maxProductNum, setMaxProductNum] = useState(
    screenWidth > 1200 ? 6 : 4
  );
  const [products, setProducts] = useState(fetchProducts ? fetchProducts : []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    if (products?.length > maxProductNum) {
      setProducts(products?.slice(0, maxProductNum));
    } else {
      setProducts(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth>
      <Box paddingY={1} marginY={1}>
        <Box
          className={styles.topSeelingHeading}
          borderBottom={"1px solid #d1d1d1"}
        >
          <Typography
            variant="h5"
            style={{
              borderLeft: "4px solid var(--primaryColor)",
              textTransform: "uppercase",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            {" "}
            {title}
          </Typography>
        </Box>
        <Box paddingY={2} display={"flex"} justifyContent={"space-around"}>
          <Grid container spacing={2}>
            <Suspense fallback={<div>Loading Products...</div>}>
              {products?.map((product) => (
                <Grid
                  key={product.id} // Assuming product has an id
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  lg={2}
                  xl={2}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <SingleProductCard product={product} />
                </Grid>
              ))}
            </Suspense>
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          {" "}
          <Link href={`/products/categories/${id}/${title.replace(/ /g, "_")}`}>
            <Button variant="contained" className={styles.showMoreBtn}>
              Show More
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SingleCategoryProducts;
