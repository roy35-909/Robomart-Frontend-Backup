"use client";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./AuthPage.module.scss";
import Login from "./Login";
import Register from "./Register";
const AuthPages = () => {
  const [showPass, setShowPass] = useState(false);
  const [component, setComponent] = useState("login");
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/auth/login") {
      setComponent("login");
    } else {
      setComponent("register");
    }
  }, [pathName]);

  return (
    <div style={{ backgroundColor: "#ededed" }}>
      <Container sx={{ minHeight: "70vh", paddingBottom: "10vh" }}>
        <Box sx={{ py: 7, display: "flex", justifyContent: "center" }}>
          <Link
            style={{
              textDecoration: "none",
              color: component === "login" ? "black" : "#c7c7c7",
            }}
            href="/auth/login"
          >
            <Typography
              variant="h3"
              className={styles.authTitle}
              sx={{
                fontWeight: "bold",
                px: 3,
                borderBottom:
                  component === "login" && "5px solid var(--primaryColor)",
                transition: "all 0.3s ease-in",
              }}
            >
              Login
            </Typography>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: component === "register" ? "black" : "#c7c7c7",
            }}
            href="/auth/register"
          >
            <Typography
              className={styles.authTitle}
              variant="h3"
              sx={{
                fontWeight: "bold",
                px: 3,
                borderBottom:
                  component === "register" && "5px solid var(--primaryColor)",
                transition: "all 0.3s ease-in",
              }}
            >
              Register
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{ py: 3 }}
          display={"flex"}
          justifyContent={"center"}
          className={styles.loginWrapper}
        >
          {component === "login" && (
            <Login showPass={showPass} setShowPass={setShowPass} />
          )}
          {component === "register" && (
            <Register showPass={showPass} setShowPass={setShowPass} />
          )}
        </Box>
      </Container>
    </div>
  );
};

export default AuthPages;
