import ProductDetailsPageSkeleton from "@/components/Skeletons/ProductDetailsPageSkeleton";
import RecentView from "@/Shared/RecntView/RecentView";
import { Box, Button, Container, Divider, Grid, Rating } from "@mui/material";
import AddToCartButton from "./AddToCartButton";
import BottomTabs from "./BottomTabs";
import LeftImageCom from "./LeftImageCom";
import styles from "./ProductDetail.module.scss";
import RelatedProducts from "./RelatedProducts";
const ProductDetailsPage = ({ productDetails }) => {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  return (
    <div>
      {!productDetails ? (
        <ProductDetailsPageSkeleton />
      ) : (
        <Container sx={{ py: "5vh" }}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item md={6} className={styles.left}>
              <LeftImageCom productDetails={productDetails} />
            </Grid>
            <Grid item md={6}>
              <div className={styles.right}>
                <h1>{productDetails?.name}</h1>
                <h3 style={{ marginBottom: "10px" }}>
                  Product code: {productDetails?.product_code}
                </h3>
                <div className={styles.rate}>
                  <Rating
                    name="read-only"
                    size="small"
                    value={productDetails?.ratting}
                    readOnly
                  />
                  <p>({productDetails?.total_review})</p>
                </div>
                <p className={styles.price}>
                  BDT
                  <span style={{ margin: "0 3px" }}>
                    {" "}
                    {productDetails?.price}
                  </span>
                  <small>
                    {" "}
                    <del>{productDetails?.after_discount}</del>
                  </small>
                  {productDetails?.stock === 0 ? (
                    <Button
                      sx={{
                        marginLeft: "20px",
                        backgroundColor: "red",
                        "&:hover": {
                          backgroundColor: "red",
                          cursor: "auto",
                        },
                      }}
                      size={"small"}
                      variant="contained"
                      disableElevation
                    >
                      Out of Stock
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        marginLeft: "20px",
                        backgroundColor: "var(--primaryColor)",
                        "&:hover": {
                          backgroundColor: "var(--primaryColor)",
                          cursor: "auto",
                        },
                      }}
                      size={"small"}
                      variant="contained"
                      disableElevation
                    >
                      In Stock ({productDetails?.stock})
                    </Button>
                  )}
                </p>
                <Box></Box>
                <p className={styles.description}>
                  {productDetails?.discription}
                </p>
                <AddToCartButton productDetails={productDetails} />
              </div>
            </Grid>
          </Grid>

          <BottomTabs productDetails={productDetails} />
          <RecentView />
          <Divider />
          <RelatedProducts categoriesId={productDetails?.catagorys} />
        </Container>
      )}
    </div>
  );
};

export default ProductDetailsPage;
