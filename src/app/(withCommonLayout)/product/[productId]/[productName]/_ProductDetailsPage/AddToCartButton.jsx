"use client";

import {
  useGetCartQuery,
  useGetUserQuery,
  usePostToCartMutation,
} from "@/redux/api/api";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import toast from "react-hot-toast";

const loadingNotify = () => toast.loading("Adding...");
const successNotify = () => toast.success("Successfully added !");
const errorNotify = () => toast.error("Something went wrong !");

const AddToCartButton = (productDetails) => {
  const [check, setCheck] = useState(false);
  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useGetUserQuery();
  const { data: cartData } = useGetCartQuery();
  const [postToCart, { isLoading, isError, isSuccess }] =
    usePostToCartMutation();
  const [amount, setAmount] = useState(1);
  const addToCart = () => {
    setCheck(true);
    if (!userData) {
      router.push("/auth/login");
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Please Login First !",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const options = {
        product: { product: productDetails?.id, quantity: amount },
      };
      postToCart(options);
    }
  };

  if (isSuccess && check) {
    successNotify();
    setCheck(false);
  }
  if (isError && check) {
    errorNotify();
    setCheck(false);
  }
  const changeAmount = (qty) => {
    if (qty + amount >= 1) {
      setAmount((prevState) => prevState + qty);
    }
  };

  return (
    <>
      <div style={{ display: "inline-block", marginRight: "5px" }}>
        <div className={styles.quantity}>
          <div>
            <button onClick={(event) => changeAmount(-1)}>
              <RemoveIcon />
            </button>
            <input type={"number"} min={1} value={amount} readOnly />
            <button onClick={(event) => changeAmount(+1)}>
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
      <span style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
        X<span style={{ margin: "0 5px" }}> {productDetails?.price}</span> =
        <span style={{ margin: "0 5px" }}>
          {" "}
          {amount * productDetails?.price}
        </span>
      </span>
      <div className={styles.buttons}>
        {isLoading ? (
          <button className={styles.addToCardBtn}>Loading ...</button>
        ) : (
          <button className={styles.addToCardBtn} onClick={addToCart}>
            <AddShoppingCartIcon />
            ADD TO CART
          </button>
        )}

        {/* <button
                  className={styles.addToWishlist}
             
                >
                  <FavoriteBorderIcon />
                  <p>Add to Wishlist</p>
                </button> */}
      </div>
    </>
  );
};

export default AddToCartButton;
