import { Grid, Skeleton } from "@mui/material";

const PartnerClientSkeleton = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={2} marginY={2}>
          <Skeleton variant="rectangular"  height={150} />
        </Grid>
        <Grid item xs={6} sm={2} marginY={2}>
          <Skeleton variant="rectangular"  height={150} />
        </Grid>
        <Grid item xs={6} sm={2} marginY={2}>
          <Skeleton variant="rectangular"  height={150} />
        </Grid>
        <Grid item xs={6} sm={2} marginY={2}>
          <Skeleton variant="rectangular" height={150} />
        </Grid>
        <Grid item xs={6} sm={2} marginY={2}>
          <Skeleton variant="rectangular"  height={150} />
        </Grid>
        <Grid item xs={6} sm={2} marginY={2}>
          <Skeleton variant="rectangular"  height={150} />
        </Grid>
      </Grid>
    </>
  );
};

export default PartnerClientSkeleton;
