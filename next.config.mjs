/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/*",
      },
      {
        protocol: "https",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/*",
      },
      {
        protocol: "http",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/All_Product_Additional_Photo/*",
      },
      {
        protocol: "https",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/All_Product_Additional_Photo/*",
      },
      {
        protocol: "http",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/OurSupplier/*",
      },
      {
        protocol: "https",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/OurSupplier/*",
      },
      {
        protocol: "http",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/OurClient/*",
      },
      {
        protocol: "https",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/OurClient/*",
      },
      {
        protocol: "http",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/CategoryImage/*",
      },
      {
        protocol: "https",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/CategoryImage/*",
      },
      {
        protocol: "http",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/SubCategoryImage/*",
      },
      {
        protocol: "https",
        hostname: "api.robomartbd.com",
        port: "",
        pathname: "/uploads/SubCategoryImage/*",
      },
    ],
  },
};

export default nextConfig;
