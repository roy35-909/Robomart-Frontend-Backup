"use client";
import FormAddressFieldCheckout from "@/app/(withCommonLayout)/checkOut/FormAddressFieldCheckout";
import {
  useGetUserProfileQuery,
  useGetUserQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/api";
import CheckIcon from "@mui/icons-material/Check";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import {
  getAllDistrict,
  getAllDivision,
  getAllUnion,
  getAllUpazila,
} from "bd-divisions-to-unions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { data, isLoading, isError } = useGetUserQuery();

  const {
    data: userProfile,
    isLoading: profileLoading,
    isError: profileError,
    error,
  } = useGetUserProfileQuery();

  const [
    updateUserProfile,
    {
      isLoading: updateLoading,
      isError: updateError,
      isSuccess: profileUpdateSuccess,
    },
  ] = useUpdateUserProfileMutation();

  const [division, setDivision] = useState({});
  const [district, setDistrict] = useState({});
  const [upozila, setUpozila] = useState({});
  const [union, setUnion] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [mobile, setMobile] = useState(userProfile?.phone || "");
  const [fullAddress, setFullAddress] = useState(userProfile?.address || "");

  const divisionData = getAllDivision("en");
  const districtsData = getAllDistrict("en");
  const upozilaData = getAllUpazila("en");
  const unionData = getAllUnion("en");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {};
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/auth/login");
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Login Required",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (profileUpdateSuccess) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Update successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (updateError) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [updateError, profileUpdateSuccess]);

  const updateInformation = (updatedData) => {
    // console.log(updatedData);

    const options = { updatedData: updatedData };
    updateUserProfile(options)
      .then(() => {
        setIsUpdate(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Failed to update profile: ", error);
      });
  };

  const makeAddressString = () => {
    let updatedAddress = fullAddress;
    if (union.title) {
      updatedAddress += "," + union?.title + ",";
    }
    if (upozila.title) {
      updatedAddress += upozila?.title + ",";
    }
    if (district.title) {
      updatedAddress += district?.title + ",";
    }
    if (division.title) {
      updatedAddress += division?.title;
    }
    return updatedAddress;
  };

  const handleSaveBtn = () => {
    const updatedAddress = makeAddressString();
    const updatedData = {
      phone: mobile || userProfile?.phone,
      address: updatedAddress || userProfile?.address,
    };
    // console.log(updatedData);

    updateInformation(updatedData);
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 0",
      }}
    >
      <Container maxWidth="lg">
        {isLoading && <CircularProgress />}
        {data && data[0]?.first_name ? (
          <Grid
            container
            border="1px solid #ddd"
            padding="10vh 5vh"
            className={styles.profileContainer}
            borderRadius={2}
            display={"flex"}
            alignItems={"center"}
          >
            <Grid
              item
              sm={12}
              md={6}
              borderRight={"1px solid #ddd"}
              minHeight={"10vh"}
              className={styles.profileLeft}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/assets/user-profile-icon.png"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                {userProfile?.first_name} {userProfile?.last_name}{" "}
              </Typography>
              <Typography
                variant="h6"
                style={{ textAlign: "center", fontFamily: "Poppins" }}
              >
                {" "}
                {userProfile?.email}
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              padding={"4vh"}
              className={styles.profileRight}
            >
              <label htmlFor="title" className={styles.auth_label}>
                <Typography
                  variant="title1"
                  style={{
                    textAlign: "center",
                    padding: "5vh 0",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Balance : {userProfile?.balance}
                </Typography>
              </label>
              <br />
              <br />
              {updateLoading ? (
                <CircularProgress />
              ) : (
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title" className={styles.auth_label}>
                      <Typography
                        variant="title1"
                        style={{
                          textAlign: "center",
                          padding: "5vh 0",
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {isUpdate && "Update your"} Contact Number :
                      </Typography>
                    </label>
                    <input
                      type="text"
                      disabled={!isUpdate}
                      defaultValue={userProfile?.phone}
                      onChange={(e) => setMobile(e.target.value)}
                      className={styles.auth_form_inputField}
                    />
                    <label htmlFor="title" className={styles.auth_label}>
                      <Typography
                        variant="title1"
                        style={{
                          textAlign: "center",
                          padding: "5vh 0",
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {isUpdate && "Update your"} Address:
                      </Typography>
                    </label>
                    {!isUpdate && (
                      <textarea
                        rows={"5"}
                        type="text"
                        style={{
                          width: "100%",
                          fontSize: "16px",
                          padding: "5px",
                          fontFamily: "Roboto",
                        }}
                        disabled
                        value={userProfile?.address}
                      />
                    )}
                    {isUpdate && (
                      <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                          <FormAddressFieldCheckout
                            label={"Division"}
                            data={divisionData}
                            setSelectedData={setDivision}
                          />
                        </Grid>
                        <Grid item sm={12} md={6}>
                          {division?.title && (
                            <FormAddressFieldCheckout
                              label={"District"}
                              data={districtsData[division.value]}
                              setSelectedData={setDistrict}
                            />
                          )}
                        </Grid>
                        <Grid item sm={12} md={6}>
                          {district?.title && (
                            <FormAddressFieldCheckout
                              label={"Upozila"}
                              data={upozilaData[district?.value]}
                              setSelectedData={setUpozila}
                            />
                          )}
                        </Grid>
                        <Grid item sm={12} md={6}>
                          {upozila?.title && (
                            <FormAddressFieldCheckout
                              label={"Union"}
                              data={unionData[upozila?.value]}
                              setSelectedData={setUnion}
                            />
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="title1"
                            style={{
                              fontWeight: "bold",
                              fontFamily: "Poppins",
                              marginLeft: "10px",
                              padding: "10px 0px",
                            }}
                          >
                            <label htmlFor="">
                              Street/Vill/Sector (Provide in details)
                            </label>
                          </Typography>
                          <input
                            type="text"
                            defaultValue={userProfile?.address}
                            onChange={(e) => setFullAddress(e.target.value)}
                            className={styles.auth_form_inputField}
                          />
                        </Grid>
                      </Grid>
                    )}
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      {isUpdate ? (
                        <Button
                          onClick={handleSaveBtn}
                          variant="contained"
                          startIcon={<CheckIcon />}
                          disableElevation
                          style={{ backgroundColor: "var(--primaryColor" }}
                        >
                          Save
                        </Button>
                      ) : (
                        <Tooltip title="Update your profile">
                          <IconButton
                            variant="contained"
                            color="primary"
                            aria-label="update-button"
                            onClick={() => setIsUpdate(true)}
                            size="large"
                          >
                            <EditNoteIcon style={{ fontSize: "40px" }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </Grid>
          </Grid>
        ) : (
          <p>{!isLoading && "User is not valid"}</p>
        )}
      </Container>
    </div>
  );
};

export default Profile;
