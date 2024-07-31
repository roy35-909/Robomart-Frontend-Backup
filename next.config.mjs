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
    ],
  },
};

export default nextConfig;
