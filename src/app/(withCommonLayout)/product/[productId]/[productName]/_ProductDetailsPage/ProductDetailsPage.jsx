import ProductDetailsPageSkeleton from "@/components/Skeletons/ProductDetailsPageSkeleton";
import {
  useGetCartQuery,
  useGetUserQuery,
  usePostToCartMutation,
} from "@/redux/api/api";
import RecentView from "@/Shared/RecntView/RecentView";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Container, Divider, Grid, Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import BottomTabs from "./BottomTabs";
import styles from "./ProductDetail.module.scss";
import RelatedProducts from "./RelatedProducts";
const loadingNotify = () => toast.loading("Adding...");
const successNotify = () => toast.success("Successfully added !");
const errorNotify = () => toast.error("Something went wrong !");
const ProductDetailsPage = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [checkDuplicate, setCheckDuplicate] = useState(false);

  const [productDetails, setProductDetails] = useState({});
  const [bgPosition, setBgPosition] = useState("50% 50%");
  const [amount, setAmount] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();
  

  if (isSuccess && check) {
    successNotify();
    setCheck(false);
  }
  if (isError && check) {
    errorNotify();
    setCheck(false);
  }

  const zoom = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  const revImgArr = [
    "https://i.ibb.co/109P1Zm/p1.jpg",
    "https://i.ibb.co/FYdfgW9/p2.jpg",
    "https://i.ibb.co/wrLn7wf/Arduino-Uno-R3-SMD-01.jpg",
  ];
  const changeMainImage = useCallback((event) => {
    const selectedImgIndex = Number(
      event.currentTarget.getAttribute("imgindex")
    );
    setImageIndex(selectedImgIndex);
  }, []);
  const changeAmount = (qty) => {
    if (qty + amount >= 1) {
      setAmount((prevState) => prevState + qty);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${backendUrl}/api/product/${params?.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setLoading(false);
        // recent view products
        const cacheRecentView = localStorage.getItem("recentViewProducts");
        if (!cacheRecentView) {
          const recentArr = [];
          recentArr.push(data);
          localStorage.setItem("recentViewProducts", JSON.stringify(recentArr));
        } else {
          const pastRecentArr = JSON.parse(cacheRecentView);

          const checkDuplicateInput = cacheRecentView.includes(
            JSON.stringify(data)
          );

          if (!checkDuplicateInput) {
            pastRecentArr.push(data);
            localStorage.setItem(
              "recentViewProducts",
              JSON.stringify(pastRecentArr)
            );
          }
        }
      });
  }, [params]);

  return (
    <div>
      {loading ? (
        <ProductDetailsPageSkeleton />
      ) : (
        <Container sx={{ py: "5vh" }}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item md={6} className={styles.left}>
              {productDetails?.media?.length > 0 && (
                <>
                  {" "}
                  <div className={styles.images}>
                    {productDetails?.media?.map((item, index) => (
                      <Image
                        onClick={changeMainImage}
                        imgindex={index}
                        className={
                          index === imageIndex
                            ? styles.activeImage
                            : styles.notActive
                        }
                        src={item?.photo ? item?.photo : "/assets/no-img.jpg"}
                        key={index}
                        alt={`${productDetails?.name} image`}
                        // objectFit="contain"
                        width={200}
                        height={200}
                      />
                    ))}
                  </div>
                  <div
                    className={styles.mainImage}
                    onMouseMove={zoom}
                    style={{
                      backgroundImage: `url(${
                        productDetails?.media &&
                        productDetails?.media[imageIndex]?.photo
                          ? productDetails?.media[imageIndex]?.photo
                          : "/assets/no-img.jpg"
                      })`,
                      backgroundPosition: bgPosition,
                    }}
                  >
                    <Image
                      src={`${
                        productDetails?.media &&
                        productDetails?.media[imageIndex]?.photo
                          ? productDetails?.media[imageIndex]?.photo
                          : "/assets/no-img.jpg"
                      }`}
                      alt={`${productDetails?.name} image`}
                      style={{
                        border: "1px solid #f2f2f2",
                        boxShadow: "1px 1px 20px #e1e1e185",
                        borderRadius: "5px",
                      }}
                      // layout="fill" // Or 'fill'
                      // objectFit="contain"
                      width={300}
                      height={300}
                    />
                  </div>
                </>
              )}

              {productDetails?.media?.length == 0 && (
                <>
                  {" "}
                  <div className={styles.images}></div>
                  <div
                    className={styles.mainImage}
                    onMouseMove={zoom}
                    style={{
                      backgroundImage: `url(${
                        productDetails?.photo
                          ? productDetails?.photo
                          : "/assets/no-img.jpg"
                      })`,
                      backgroundPosition: bgPosition,
                    }}
                  >
                    <Image
                      src={`${
                        productDetails?.photo
                          ? productDetails?.photo
                          : "/assets/no-img.jpg"
                      }`}
                      alt={`${productDetails?.name} image`}
                      style={{
                        border: "1px solid #f2f2f2",
                        boxShadow: "1px 1px 20px #e1e1e185",
                        borderRadius: "5px",
                      }}
                      width={100}
                      height={100}
                    />
                  </div>
                </>
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
                <div style={{ display: "inline-block", marginRight: "5px" }}>
                  <div className={styles.quantity}>
                    <div>
                      <button onClick={(event) => changeAmount(-1)}>
                        <RemoveIcon />
                      </button>
                      <input type={"number"} min={1} value={amount} readOnly />
                      <button onClick={(event) => changeAmount(+1)}>
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <span style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                  X
                  <span style={{ margin: "0 5px" }}>
                    {" "}
                    {productDetails?.price}
                  </span>{" "}
                  =
                  <span style={{ margin: "0 5px" }}>
                    {" "}
                    {amount * productDetails?.price}
                  </span>
                </span>
                <div className={styles.buttons}>
                  {isLoading ? (
                    <button className={styles.addToCardBtn}>Loading ...</button>
                  ) : (
                    <button className={styles.addToCardBtn} onClick={addToCart}>
                      <AddShoppingCartIcon />
                      ADD TO CART
                    </button>
                  )}

                  {/* <button
                  className={styles.addToWishlist}
             
                >
                  <FavoriteBorderIcon />
                  <p>Add to Wishlist</p>
                </button> */}
                </div>
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
