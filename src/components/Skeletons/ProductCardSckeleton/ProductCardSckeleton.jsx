import { Box, Skeleton } from "@mui/material";

const ProductCardSckeleton = () => {
  return (
    <>
      <Box>
        <Skeleton variant="rectangular" width={200} height={180} /> <br />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="70%" />
          <Skeleton width="60%" />
        </Box>
      </Box>
    </>
  );
};

export default ProductCardSckeleton;
