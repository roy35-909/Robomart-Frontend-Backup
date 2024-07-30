"use client";

import NavigationBar from "@/shared/NavigationBars/NavigationBar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />

      {children}
    </>
  );
};

export default CommonLayout;
