import TopBlogHeroSkeleton from "@/components/Skeletons/Home/TopBlogHeroSkeleton";
import TopBlogListSkeleton from "@/components/Skeletons/Home/TopBlogListSkeleton";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import SingleBlogList from "./Components/BlogList/SingleBlogList";
import SingleHeroBlog from "./Components/SingleHeroBlog/SingleHeroBlog";
import styles from "./TopBlogs.module.scss";
const TopBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${backendUrl}/blog/get_blog?page=1`)
      .then((res) => res.json())
      .then((data) => {
        setBlogsData(data?.results.slice(0, 4));
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Container className={styles.topBlogsWrapper}>
        <Typography
          variant="h5"
          className={styles.topBlogsTitle}
          align="center"
          fontWeight={"bold"}
          borderBottom={"1px solid #f2f2f2"}
        >
          Top Blogs
        </Typography>
        <Grid
          container
          spacing={2}
          paddingTop={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={6}>
            {isLoading ? (
              <TopBlogHeroSkeleton />
            ) : (
              <SingleHeroBlog blog={blogsData[0]} />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {isLoading ? (
              <TopBlogListSkeleton />
            ) : (
              <>
                {" "}
                <SingleBlogList blog={blogsData[1]} /> <br />
                <SingleBlogList blog={blogsData[2]} /> <br />
                <SingleBlogList blog={blogsData[3]} /> <br />
              </>
            )}
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"end"} paddingY={3}>
          <Link href={`/blogs`}>
            <Button className={styles.blogSectionBtn}>
              <i>Explore More Blogs{` >>`}</i>
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default TopBlogs;
