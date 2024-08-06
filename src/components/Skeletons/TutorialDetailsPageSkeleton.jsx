import { Box, Container, Grid, Skeleton } from '@mui/material';
import React from 'react';

const TutorialDetailsPageSkeleton = () => {
    return (
      <>
        <Container
          maxWidth={"md"}
          style={{ minHeight: "100vh", paddingTop: "10px" }}
        >
          <Grid container spacing={8}>
            <Grid item xs={8}>
              <div>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{ width: "50px", height: "50px", marginRight: "5px" }}
                  >
                    <Skeleton
                      variant="circular"
                      width={"50px"}
                      height={"50px"}
                    />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                    <Skeleton width="100%" />
                  </Box>
                </Box>
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
                <Skeleton variant="rectangular" height={30} />
                <br />
                <Skeleton variant="rectangular" height={30} />
                <br />
                <Skeleton variant="rectangular" height={30} />
                <br />
                <Skeleton variant="rectangular" height={30} />
                <br />
                <Skeleton variant="rectangular" height={30} />
                <br />
                <Skeleton variant="rectangular" height={30} />
                <br />
                <Skeleton variant="rectangular" height={30} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
};

export default TutorialDetailsPageSkeleton;