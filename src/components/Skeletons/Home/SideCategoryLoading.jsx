import { Box, Skeleton } from "@mui/material";

const SideCategoryLoading = () => {
  return (
    <>
      <Box>
        <Skeleton height={50} />
        <Skeleton height={50} animation="wave" />
        <Skeleton height={50} animation="wave" />
        <Skeleton height={50} animation="wave" />
        <Skeleton height={50} animation={false} />
      </Box>
    </>
  );
};

export default SideCategoryLoading;
