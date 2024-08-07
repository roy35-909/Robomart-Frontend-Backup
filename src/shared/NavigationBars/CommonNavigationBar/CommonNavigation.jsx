import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { AppBar, Box, Container, Grid } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import { useGetUserQuery } from "../../../redux/api/api";
import AvaterBtnMeny from "../HeroNavigationBar/AvaterBtnMeny";
import PageNavigationBar from "../PageNavigationBar.jsx/PageNavigationBar";
import styles from "./CommnNavigation.module.scss";
// this navigation is  use in blogs and forum page
const CommonNavigation = () => {
  const { data, isLoading, isError } = useGetUserQuery();

  return (
    <AppBar
      sx={{ backgroundColor: "var(--primaryColor)", boxShadow: "unset" }}
      component=""
      position="relative"
    >
      <Container maxWidth="lg" className={styles.heroNavigation_Container}>
        <Grid
          container
          display={`flex`}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={2}
            id="branding-section"
            display={`flex`}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="image"
                  width={200}
                  height={70}
                />
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
          >
            <PageNavigationBar />
          </Grid>
          <Grid item md={2}>
            <div
              className={styles.loginSectionNav}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data && data[0]?.email && (
                <>
                  <AvaterBtnMeny data={data[0]} />
                </>
              )}
              <div>
                {!data && <PermIdentityIcon className={styles.profileIcon} />}
              </div>{" "}
              <br />
              {!data && (
                <>
                  <Link href="/auth/login">
                    <p>Login</p>
                  </Link>
                  <p style={{ margin: "0px 3px" }}>/</p>
                  <Link href="/auth/register">Register</Link>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default CommonNavigation;
