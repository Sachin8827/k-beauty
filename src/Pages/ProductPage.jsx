import { useParams } from "react-router-dom";
import "../assets/styles/ProductPage.css";
import ProductDetail from "../components/ProductDetail";
import ViewProducts from "../components/Products";
import productData from "../utils/constant/data";

function ProductPage() {

  return (
    <>
      <ProductDetail id={useParams().id}/>
      <ViewProducts data={productData.slice(0, 4)} heading="YOU MAY ALSO LIKE" className={"product-list"}/>
      <hr style={{border: "1px solid #E2E2E2"}}/>
      <ViewProducts data={productData.slice(0, 4)} heading="RECENTLY VIEWED PRODUCTS" className={"product-list"}/>
    </>
  );
}
export default ProductPage;
