import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const TopBlogListSkeleton = () => {
    return (
      <>
        <Grid container display="flex" spacing={2}>
          <Grid item>
            <Skeleton variant="rectanguler" width={200} height={100} />
          </Grid>
          <Grid item>
            <Skeleton variant="rectanguler" width={200} height={20} />
            <br />
            <Skeleton variant="rectanguler" width={150} height={20} />
            <br />
            <Skeleton variant="rectanguler" width={100} height={20} />
            <br />
          </Grid>
        </Grid>
        <Grid container display="flex" spacing={2}>
          <Grid item>
            <Skeleton variant="rectanguler" width={200} height={100} />
          </Grid>
          <Grid item>
            <Skeleton variant="rectanguler" width={200} height={20} />
            <br />
            <Skeleton variant="rectanguler" width={150} height={20} />
            <br />
            <Skeleton variant="rectanguler" width={100} height={20} />
            <br />
          </Grid>
        </Grid>
        <Grid container display="flex" spacing={2}>
          <Grid item>
            <Skeleton variant="rectanguler" width={200} height={100} />
          </Grid>
          <Grid item>
            <Skeleton variant="rectanguler" width={200} height={20} />
            <br />
            <Skeleton variant="rectanguler" width={150} height={20} />
            <br />
            <Skeleton variant="rectanguler" width={100} height={20} />
            <br />
          </Grid>
        </Grid>
      </>
    );
};

export default TopBlogListSkeleton;