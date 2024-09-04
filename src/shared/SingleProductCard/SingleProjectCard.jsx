import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./SingleProject.module.scss";
const SingleProjectCard = ({ product }) => {
  return (
    <>
      <Card className={styles.cardWrapper}>
        <Link
          href={`/product/${product?.id}/${encodeURIComponent(product?.name)}`}
        >
          {" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              style={{ maxHeight: "500px" }}
              src={product?.photo ? `${product?.photo}` : "/assets/no-img.jpg"}
              alt={`${product?.name ? product?.name : "product"} image`}
              height={300}
              width={300}
            />
          </div>
        </Link>

        <CardContent className={styles.cardContent}>
          <Typography variant="subtitle1" component="h5">
            <Link
              href={`/product/${product?.id}/${encodeURIComponent(
                product?.name
              )}`}
              className={styles.blogTitle}
            >
              {" "}
              {product?.name}
            </Link>
          </Typography>
          <Typography variant="subtitle3" component="h5">
            <Link
              href={`/product/${product?.id}/${encodeURIComponent(
                product?.name
              )}`}
              style={{ textDecoration: "none", color: "#d3d3d3" }}
            >
              {" "}
              {product?.discription.substring(0, 250) + "..."}
            </Link>
          </Typography>
          <Box display={"flex"} justifyContent={"flex-end"}>
            {" "}
            <Link
              href={`/product/${product?.id}/${encodeURIComponent(
                product?.name
              )}`}
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

export default SingleProjectCard;
