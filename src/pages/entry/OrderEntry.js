import Options from "./Options";
import { useOrderDetails } from "../../context/orderDetails";
import { formatCurrency } from "../../utilities";

const OrderEntry = () => {
  const { totals } = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
};

export default OrderEntry;
