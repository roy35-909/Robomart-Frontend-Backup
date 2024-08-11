import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../../AllProductsPage.module.scss";
const CategorySection = ({ categoryList }) => {
  return (
    <>
      <div>
        <Typography variant="h6"> Categories & Sub categories</Typography>
        <Divider />
      </div>
      <div>
        <Grid container spacing={3} paddingY={2}>
          {categoryList &&
            categoryList?.map((singleCategory,id) => (
              <>
                <Grid key={id} item xs={6} sm={3} md={2}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      href={`/products/categories/${
                        singleCategory?.id
                      }/${encodeURIComponent(singleCategory?.name)}`}
                      style={{
                        minWidth: "100px",
                        maxWidth: "150px",
                        height: "150px",
                        border: "1px solid #d6d4d4",
                      }}
                    >
                      {" "}
                      <Image
                        src={`${
                          singleCategory?.image
                            ? singleCategory?.image
                            : "/assets/no-img.jpg"
                        }`}
                        className={styles.category}
                        style={{
                          minWidth: "100px",
                          maxWidth: "150px",
                          height: "150px",
                          // border: "1px solid #d6d4d4",
                        }}
                        alt="category-image"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </div>
                  <Typography
                    variant="subtitle1"
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    {singleCategory?.name}
                  </Typography>
                </Grid>
                <>
                  {singleCategory?.sub_category?.map((item,idx) => (
                    <>
                      {" "}
                      <Grid key={idx} item xs={6} sm={3} md={2}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            href={`/products/scategories/${
                              item?.id
                            }/${item?.name?.replace(/ /g, "_")}`}
                            style={{
                              width: "150px",
                              height: "150px",
                              border: "1px solid #d6d4d4",
                            }}
                          >
                            <Image
                              className={styles.category}
                              src={`${
                                item?.image ? item?.image : "/assets/no-img.jpg"
                              }`}
                              style={{
                                width: "150px",
                                height: "150px",
                                // border: "1px solid #d6d4d4",
                              }}
                              alt="category-image"
                              width={150}
                              height={150}
                            />
                          </Link>
                        </div>
                        <Typography
                          variant="subtitle1"
                          textAlign={"center"}
                          fontWeight={"bold"}
                        >
                          {item?.name}
                        </Typography>
                      </Grid>
                    </>
                  ))}
                </>
              </>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default CategorySection;
