import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useGetHomeDataQuery } from "@/redux/api/api";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CategorySideMenu.module.scss";
import SubCategorySideMenu from "./SubCategorySideMenu";

export const metadata = {
  title: "RobomartBD-Home",
  description:
    "Welcome to RoboMartBD, your premier destination for all things robotics. Discover a vast array of high-quality components including sensors, parts, and equipment, carefully curated to power your innovative projects. From servos to cutting-edge sensors, we offer a diverse selection to cater to every robotics enthusiast. Our commitment to quality, affordability, and expert curation sets us apart. Shop with confidence knowing you'll find the best deals and fast shipping on components engineered for excellence. Join our global community of robotics enthusiasts and embark on your DIY journey with RoboMartBD, where creativity meets technical excellence.",
};

const AllCategorySideMenu = ({ category }) => {
  const [viewAll, setViewAll] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setViewAll(true);
    }
  }, [pathname]);
  const { data: homeData1, isLoading: homeLoading } = useGetHomeDataQuery();
  if (homeLoading) {
    return (
      <>
        <div className={styles.sideMenu}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e2e2e2",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.7vh 0",
                borderRadius: "5px 5px 0px 0px",
              }}
            >
              <Typography
                variant="h6"
                textAlign={"center"}
                style={{ fontFamily: "Poppins" }}
              >
                Categories
              </Typography>
            </div>
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
            {viewAll && (
              <div
                style={{
                  padding: "0.7vh 0",
                  borderRadius: "0px 0px 5px 5px",
                }}
              >
                <Link
                  href={"/products"}
                  style={{ textDecoration: "none", color: "black" }}
                  className={styles.link}
                >
                  <Typography
                    variant="subtitle1"
                    textAlign={"center"}
                    style={{ fontFamily: "Poppins" }}
                  >
                    Show All
                  </Typography>
                </Link>
              </div>
            )}
          </Box>
        </div>
      </>
    );
  }

  return (
    <div className={styles.sideMenu}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e2e2e2",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0.7vh 0",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            style={{ fontFamily: "Poppins" }}
          >
            Categories
          </Typography>
        </div>
        {category &&
          category?.map((scat) => (
            <>
              <div className={styles.menu_item}>
                <Link
                  href={`/products/categories/${scat?.id}/${encodeURIComponent(
                    scat?.name
                  )}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span style={styles.menuName}>{scat?.name}</span>
                </Link>
                {scat?.sub_category?.length > 0 && (
                  <SubCategorySideMenu items={scat?.sub_category} />
                )}
              </div>
              <Divider />
            </>
          ))}
        {viewAll && (
          <div
            style={{
              padding: "0.7vh 0",
              borderRadius: "0px 0px 5px 5px",
            }}
          >
            <Link
              href={"/products"}
              style={{ textDecoration: "none", color: "black" }}
              className={styles.link}
            >
              <Typography
                variant="subtitle1"
                textAlign={"center"}
                style={{ fontFamily: "Poppins" }}
              >
                Show All
              </Typography>
            </Link>
          </div>
        )}
      </Box>
    </div>
  );
};

export default AllCategorySideMenu;
