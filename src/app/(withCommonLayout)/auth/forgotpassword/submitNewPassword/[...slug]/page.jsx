"use client"
import ProvideNewPassForget from "../../../_AuthPages/ProvideNewPassForget";

const SubmitNewPassword = ({ params }) => {
  const newPasswordParams = {
    email: params?.slug[0],
    code: params?.slug[1],
    };

  return (
    <div>
      <ProvideNewPassForget params={newPasswordParams} />
    </div>
  );
};

export default SubmitNewPassword;
