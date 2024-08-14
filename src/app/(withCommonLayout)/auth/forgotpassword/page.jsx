import ForgetPassword from "../_AuthPages/ForgetPassword";
export async function generateMetadata({ params }, parent) {
  const metaData = {
    title: "Forgot password - Robomartbd ",
    alternates: {
      canonical: `https://www.robomartbd.com/forgotpassword`,
    },
  };
  return metaData;
}
const AuthForgotPassword = () => {
  return (
    <>
      <ForgetPassword />
    </>
  );
};

export default AuthForgotPassword;
