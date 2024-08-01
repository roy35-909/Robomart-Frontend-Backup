import { Grid } from "@mui/material";
import ProductCardSckeleton from "../ProductCardSckeleton/ProductCardSckeleton";

const TopTutorialsSkeleton = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3} marginY={2}>
          <ProductCardSckeleton />
        </Grid>
        <Grid item xs={6} sm={3} marginY={2}>
          <ProductCardSckeleton />
        </Grid>
        <Grid item xs={6} sm={3} marginY={2}>
          <ProductCardSckeleton />
        </Grid>
        <Grid item xs={6} sm={3} marginY={2}>
          <ProductCardSckeleton />
        </Grid>
       
      </Grid>
    </>
  );
};

export default TopTutorialsSkeleton;
