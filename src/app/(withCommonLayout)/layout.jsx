"use client";

import Footer from "@/Shared/Footer/Footer";
import NavigationBar from "@/shared/NavigationBars/NavigationBar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
