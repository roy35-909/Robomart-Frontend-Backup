import { Box, Container, Grid, Skeleton } from "@mui/material";
import ProductCardSckeleton from "../ProductCardSckeleton/ProductCardSckeleton";

const CategoryWiseProductLoading = () => {
  return (
    <Container maxWidth>
      <Box paddingY={1} marginY={2}>
        <Box borderBottom={"1px solid #d1d1d1"}>
          <Skeleton width={300} height={30} />
        </Box>
        <br />
        <Box paddingY={2} display={"flex"} justifyContent={"space-around"}>
          <Grid container spacing={2}>
            <Grid
              key={1} // Assuming product has an id
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              xl={2}
              display={"flex"}
              justifyContent={"center"}
            >
              <ProductCardSckeleton />
            </Grid>
            <Grid
              key={2} // Assuming product has an id
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              xl={2}
              display={"flex"}
              justifyContent={"center"}
            >
              <ProductCardSckeleton />
            </Grid>
            <Grid
              key={3} // Assuming product has an id
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              xl={2}
              display={"flex"}
              justifyContent={"center"}
            >
              <ProductCardSckeleton />
            </Grid>
            <Grid
              key={3} // Assuming product has an id
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              xl={2}
              display={"flex"}
              justifyContent={"center"}
            >
              <ProductCardSckeleton />
            </Grid>
            <Grid
              key={3} // Assuming product has an id
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              xl={2}
              display={"flex"}
              justifyContent={"center"}
            >
              <ProductCardSckeleton />
            </Grid>
            <Grid
              key={3} // Assuming product has an id
              item
              xs={6}
              sm={6}
              md={3}
              lg={2}
              xl={2}
              display={"flex"}
              justifyContent={"center"}
            >
              <ProductCardSckeleton />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryWiseProductLoading;
