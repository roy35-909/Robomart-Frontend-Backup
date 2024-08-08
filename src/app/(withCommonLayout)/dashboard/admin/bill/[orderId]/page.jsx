"use client"
import PayBillSlip from "../../order_summary/[orderId]/PayBillSlip";

const OrderBillDetails = ({ params }) => {
  return (
    <>
      <PayBillSlip params={params} />
    </>
  );
};

export default OrderBillDetails;
