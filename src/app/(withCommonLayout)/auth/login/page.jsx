import AuthPages from "../_AuthPages/AuthPages";
export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: "Login - Robomartbd ",
    alternates: {
      canonical: `https://www.robomartbd.com/login`,
    },
  };
  return metaData;
}

const AuthLoginPage = () => {
  return (
    <>
      <AuthPages />
    </>
  );
};

export default AuthLoginPage;
