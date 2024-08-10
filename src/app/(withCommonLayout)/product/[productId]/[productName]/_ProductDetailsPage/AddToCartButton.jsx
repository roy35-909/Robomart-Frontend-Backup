"use client"
import React from 'react';

const AddToCartButton = () => {
    const {
      data: userData,
      isLoading: userLoading,
      isError: userError,
    } = useGetUserQuery();
    const { data: cartData } = useGetCartQuery();
    const [postToCart, { isLoading, isError, isSuccess }] =
      usePostToCartMutation();

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
    return (
        <div>
            
        </div>
    );
};

export default AddToCartButton;