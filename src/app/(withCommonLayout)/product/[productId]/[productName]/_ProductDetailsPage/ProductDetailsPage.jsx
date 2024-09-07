import ProductDetailsPageSkeleton from "@/components/Skeletons/ProductDetailsPageSkeleton";
import RecentView from "@/Shared/RecntView/RecentView";
import { Box, Button, Container, Divider, Grid, Rating } from "@mui/material";
import Head from "next/head";
import AddToCartButton from "./AddToCartButton";
import BottomTabs from "./BottomTabs";
import LeftImageCom from "./LeftImageCom";
import styles from "./ProductDetail.module.scss";
import RelatedProducts from "./RelatedProducts";
const ProductDetailsPage = ({ productDetails }) => {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  function addProductJsonLd(productDetails) {
    const photos = productDetails?.media?.map((img) => img?.photo);
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "${productDetails?.name}",
      "image": [${photos}],
      "description": "${productDetails?.discription}",
      "sku": "${productDetails?.product_code}",
      "mpn": "",
      "brand": {
        "@type": "Brand",
        "name": "RobomartBd"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "${productDetails?.ratting}",
        },
        "author": {
          "@type": "Person",
          "name": "Md Hafizud Rahman"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "${productDetails?.ratting}",
        "reviewCount": "${productDetails?.total_review}"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.robomartbd.com/product/${
          productDetails?.id
        }/${encodeURI(productDetails?.name)}",
        "priceCurrency": "BDT",
        "price": "${productDetails?.after_discount}",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
    };
  }

  return (
    <>
      {!productDetails ? (
        <ProductDetailsPageSkeleton />
      ) : (
        <Container sx={{ py: "5vh" }}>
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={addProductJsonLd(productDetails)}
              key="product-jsonld"
            />
          </Head>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item md={6} className={styles.left}>
              {productDetails?.media !== undefined && (
                <LeftImageCom productDetails={productDetails} />
              )}
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
    </>
  );
};

export default ProductDetailsPage;
