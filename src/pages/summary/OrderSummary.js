import React from "react";
import SummaryForm from "./SummaryForm";

import { useOrderDetails } from "../../context/orderDetails";
import { formatCurrency } from "../../utilities";

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops); // [["chocolate", 2], ["vanilla"], 1]
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>{value}</li>
  ));

  const toppingsArray = Object.entries(optionCounts.toppings); // ["M&Ms, "Gummi bear"]
  const toppingsList = toppingsArray.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppins)}</h2>
      <ul>{toppingsList}</ul>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;
