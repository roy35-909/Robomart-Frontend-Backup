import AuthPages from "../_AuthPages/AuthPages";

export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: "Register - Robomartbd ",
    alternates: {
      canonical: `https://www.robomartbd.com/register`,
    },
  };
  return metaData;
}

const AuthRegisterPage = () => {
  return (
    <>
      <AuthPages />
    </>
  );
};

export default AuthRegisterPage;
