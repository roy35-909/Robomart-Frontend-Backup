"use client";
import { backendUrl } from "@/utils/backendApiUrlProvider";
import CreditScore from "@mui/icons-material/CreditScore";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Button, CircularProgress, Container, Divider } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import OrderSummaryFooter from "./_Components/OrderSummaryFooter";
import OrderSummaryHeader2 from "./_Components/OrderSummaryHeader2";
import OrderSummaryProducts from "./_Components/OrderSummaryProducts";
const OrderSummaryPrint = ({ params }) => {
  const [orderData, setOrderData] = useState({});
  const [allUserData, setAllUserData] = useState([]);
  const [customerData, setCustomerData] = useState({});
  const printPageArea = (areaID) => {
    let printContent = document.getElementById(areaID).innerHTML;
    let originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };
  const getCustomerInfo = () => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);

    fetch(`${backendUrl}/api/auth/users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllUserData(data);
      });
  };

  useEffect(() => {
    const customer = allUserData?.find((item) => item?.id === orderData?.user);
    setCustomerData(customer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allUserData]);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(`${backendUrl}/order_management/get_order/${params?.orderId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
        /* if (data?.user) {
          getCustomerInfo();
        } */
      });
  }, [params]);

  return (
    <>
      <Container
        maxWidth={"lg"}
        style={{
          minHeight: "80vh",
          padding: "5vh 0",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "10px 0",
            justifyContent: "space-between",
          }}
        >
          <Link href={`/dashboard/admin/bill/${params?.orderId}`}>
            <Button
              startIcon={<CreditScore />}
              variant="contained"
              disableElevation
              marginY={2}
              style={{ backgroundColor: "green" }}
            >
              Delivery Bill Slip
            </Button>
          </Link>

          <Button
            startIcon={<LocalPrintshopIcon />}
            variant="contained"
            disableElevation
            marginY={2}
            style={{ backgroundColor: "green" }}
            onClick={() => printPageArea("printAbleArea")}
          >
            Print
          </Button>
        </div>
        {!orderData?.invoiceId?.id ? (
          <CircularProgress />
        ) : (
          <div
            style={{ border: "1px dashed #e2e2e2", padding: "10px" }}
            id="printAbleArea"
          >
            <OrderSummaryHeader2
              ordersInfo={orderData}
              // customerInfo={customerData}
            />
            <Divider color={"black"} />
            <div>
              <OrderSummaryProducts ordersInfo={orderData} />
            </div>
            <OrderSummaryFooter />
          </div>
        )}
      </Container>
    </>
  );
};

export default OrderSummaryPrint;
