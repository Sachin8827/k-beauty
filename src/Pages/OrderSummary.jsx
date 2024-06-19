import "../assets/styles/Summary.css";
import { useSelector } from "react-redux";
import Summary from "../components/Summary";
function OrderSummary() {
  const { user } = useSelector((state) => state.user);
  
  return (
    <>
      <Summary user={user} />      
    </>
  );
}
export default OrderSummary;
