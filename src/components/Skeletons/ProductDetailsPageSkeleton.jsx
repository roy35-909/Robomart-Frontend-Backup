import { Container, Grid, Skeleton } from "@mui/material";

const ProductDetailsPageSkeleton = () => {
  return (
    <>
      <Container
        maxWidth={"md"}
        style={{ minHeight: "100vh", paddingTop: "10px" }}
      >
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <div>
              <Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: "57%" }} />
              </Skeleton>
              <br />
              <Skeleton width="100%" height={"30px"} /> <br />
              <Skeleton width="70%" height={"30px"} /> <br />
              <Skeleton width="30%" height={"30px"} /> <br />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <br />
              <Skeleton variant="rectangular" height={20} width={"100%"}/>
              <br />
              <Skeleton variant="rectangular" height={20} width={"60%"}/>
              <br />
              <Skeleton variant="rectangular" height={20} width={"40%"}/>
              <br />
              <Skeleton variant="rectangular" height={20} width={"20%"}/>
            
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetailsPageSkeleton;
