import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./AuthPage.module.scss";
const LoginWithGoogle = () => {
  const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTH_LINK;
  const [authUrl, setAuthUrl] = useState("");

  const openNewTab = (url) => {
    window.location.replace(url);
  };
  const authLoginGoogle = async () => {
    try {
      const response = await fetch(apiUrl, {
        credentials: "include",
      });
      const data = await response.json();
      setAuthUrl(data?.authorization_url);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    if (authUrl?.length > 0) {
      openNewTab(authUrl);
    }
  }, [authUrl]);

  return (
    <>
      <Button
        onClick={() => authLoginGoogle()}
        disableElevation
        sx={{
          color: "white",
          width: "100%",
          padding: "7px",
        }}
        className={styles.googleBtn}
      >
        <GoogleIcon />{" "}
        <span style={{ margin: "0px 5px" }}> Login with google</span>
      </Button>
    </>
  );
};

export default LoginWithGoogle;
