/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "robomartbd.com",
        port: "",
        pathname: "/uploads/*",
      },
      {
        protocol: "https",
        hostname: "robomartbd.com",
        port: "",
        pathname: "/uploads/*",
      },
      {
        protocol: "http",
        hostname: "robomartbd.com",
        port: "",
        pathname: "/uploads/All_Product_Additional_Photo/*",
      },
      {
        protocol: "https",
        hostname: "robomartbd.com",
        port: "",
        pathname: "/uploads/All_Product_Additional_Photo/*",
      },
    ],
  },
};

export default nextConfig;
