"use client";

const CommonLayout = ({ children }) => {
  return (
    <>
      {/* <NavigationBar />
      <MobileTopNavigation />
      <Toaster />
      <ScrollToTop /> */}
      {children}
      {/* <Footer />
      <MobileNavigation /> */}
    </>
  );
};

export default CommonLayout;
