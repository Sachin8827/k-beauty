import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import RenderCartInvoice from "../components/RenderCartInvoice";
import RenderProductInvoice from "../components/RenderProductInvoice";
import GenerateInvoice from "../components/GenerateInvoice";
import { calculatePrice } from "../components/Common/CommanFunctions";
import "../assets/styles/Invoice.css";

function Invoice({ user }) {
  
  const { buyNowProduct } = useSelector((state) => state.user);

  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  let newDate = currentDate.toLocaleDateString();

  const invoiceRef = useRef(null);

  const downloadPDF = () => {
    const input = invoiceRef.current
    console.log(input)
    html2canvas(input).then((canvas) => {
      console.log(canvas);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "px", [800,800]);
      const imgWidth = 800;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    }).catch(error => {
      console.error("Error generating PDF:", error);
    });
  };

  const invoiceHTML = `
<style>
  .invoice {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    border-collapse: collapse;
  }
  .top{
    border : 1px solid red;
  }
  .title{
    border : 1px solid green
  }
  .invoice img {
    width: 100%;
    max-width: 220px;
    image-rendering: pixelated;
  }
  .invoice .title {
    text-align: left;
  }
  .invoice .information {
    border-bottom: 1px solid #555;
  }
  .invoice .invoice-heading {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  .invoice .invoice-details {
    border-bottom: 1px solid #ddd;
  }
  .invoice .total {
    font-size: 18px;
    text-align: right;
    font-weight: bold;
  }
</style>

<table class="invoice">
  <tr class="top">
    <td colspan="4">
      <table>
        <tr>
          <td class="title">
            <img src="logo.png" alt="Company logo">
          </td>
          <td style="text-align: right;">
            Invoice #: 123<br>
            Created: ${new Date().toLocaleDateString()}<br>
            Due: ${newDate}
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr class="information">
    <td colspan="4">
      <table>
        <tr>
          <td>
            K-Beauty, Inc.<br>
            12345 Sunny Road<br>
            Sunnyville, TX 12345
          </td>
          <td style="text-align: right;">
            Acme Corp.<br>
            ${user.firstName + " " + user.lastName}<br>
            ${user.email}
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr class="invoice-heading">
    <th>Payment Method</th>
    <th colspan="2">Check #</th>
  </tr>

  <tr class="invoice-details">
    <td>Dummy</td>
    <td>1000</td>
    <td></td>
  </tr>

  <tr class="invoice-heading">
    <th>Item</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total Price</th>
  </tr>
  ${typeof buyNowProduct == "object" ? (
      RenderProductInvoice(buyNowProduct)
    ) : (
      RenderCartInvoice(user.cart)
    )
  }

  <tr class="total">
    <td colspan="3"></td>
    <td>Total: ${typeof buyNowProduct == "object"
      ? buyNowProduct.quantity * buyNowProduct.product.price
      : calculatePrice(user.cart)}
    </td>
  </tr>
</table>
`;
function RenderProductInvoice(product) {
  return `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.quantity * product.price}</td>
    </tr>
  `;
}
function RenderCartInvoice(cart) {
  console.log(cart)
  let html = '';
  cart.forEach(item => {
    html += `
      <tr>
        <td>${item.product.name}</td>
        <td>${item.product.price}</td>
        <td>${item.quantity}</td>
        <td>${item.quantity * item.product.price}</td>
      </tr>
    `;
  });
} 

  return (
    <>
      <section className='invoice'>
        <div className='invoice-box'>
          <GenerateInvoice user={user} />
        </div>
        <div style={{ position: 'absolute', top: '-10000px', left: '-10000px' }}>
          <div
            className='dummy-invoice'
            ref={invoiceRef}
            dangerouslySetInnerHTML={{ __html: invoiceHTML }}
          ></div>
        </div>
      </section>
      <div className='downloadpdf'>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </>
  );
}


export default Invoice;
