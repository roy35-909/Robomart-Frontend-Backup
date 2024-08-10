import Image from "next/image";

const NotfoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Image
        width={400}
        height={250}
        src="/assets/page-not-found.jpg"
        alt=""
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
};

export default NotfoundPage;
