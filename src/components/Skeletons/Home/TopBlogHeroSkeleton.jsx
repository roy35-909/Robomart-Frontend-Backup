import { Skeleton } from "@mui/material";

const TopBlogHeroSkeleton = () => {
  return (
    <>
      <Skeleton variant="rectanguler" width={500} height={300} /> <br />
      <Skeleton variant="rectanguler" width={290} height={30} />
      <br />
      <Skeleton variant="rectanguler" width={240} height={30} />
      <br />
      <Skeleton variant="rectanguler" width={140} height={30} />
    </>
  );
};

export default TopBlogHeroSkeleton;
