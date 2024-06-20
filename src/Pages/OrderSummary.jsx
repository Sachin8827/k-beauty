import "../assets/styles/Summary.css";
import { useSelector } from "react-redux";
import Summary from "../components/Summary";
function OrderSummary() {
  const { user, buyNowProduct } = useSelector((state) => state.user);
  return (
    <>
      <Summary user={user} buyNowProduct={buyNowProduct} />      
    </>
  );
}
export default OrderSummary;
