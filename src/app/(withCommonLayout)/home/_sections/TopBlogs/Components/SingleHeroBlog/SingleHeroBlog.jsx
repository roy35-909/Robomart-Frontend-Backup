import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import styles from "./SingleHeroBolg.module.scss";
const SingleHeroBlog = ({ blog }) => {
  return (
    <>
      <Card className={styles.cardWrapper}>
        <Link href={`/blogs/${blog?.id}/${blog?.title?.replace(/ /g, "_")}`}>
          {" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              style={{ maxHeight: "500px" }}
              src={blog?.image ? `${blog?.image}` : "/assets/no-img.jpg"}
              alt={blog?.title}
              height={300}
              width={300}
            />
          </div>
        </Link>

        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="h2">
            <Link
              href={`/blogs/${blog?.id}/${blog?.title?.replace(/ /g, "_")}`}
              className={styles.blogTitle}
            >
              {" "}
              {blog?.title}
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight={"bold"}>
            Written by : {blog?.created_by?.first_name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary">
            Date Published
          </Typography> */}
          <Box display={"flex"} justifyContent={"flex-end"}>
            {" "}
            <Link
              href={`/blogs/${blog?.id}/${blog?.title?.replace(/ /g, "_")}`}
            >
              <Button
                variant="contained"
                size="small"
                className={styles.buyThisBtn}
              >
                <Typography variant="body">Details</Typography>
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleHeroBlog;
