import logo from '../../public/images/logo.png'
import {calculatePrice} from '../components/Common/CommanFunctions'
function GenerateInvoice({user}){
    let currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    let newDate = currentDate.toLocaleDateString();
    return <>
            <table>
                    <tr className="top">
                        <td colSpan="4">
                            <table>
                                <tr>
                                    <td className="title">
                                        <img src={logo} alt="Company logo" style={{ width: "100%", maxWidth: "220px", imageRendering : "pixelated" }} />
                                    </td>

                                    <td style={{textAlign : 'right'}}>
                                        Invoice #: 123<br />
                                        Created: {new Date().toLocaleDateString()}<br />
                                        Due: {newDate}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr className="information">
                        <td colSpan="4">
                            <table>
                                <tr style={{borderBottom : '1px solid #555'}}>
                                    <td>
                                        K-Beauty, Inc.<br />
                                        12345 Sunny Road<br />
                                        Sunnyville, TX 12345
                                    </td>

                                    <td style={{textAlign : 'right'}}>
                                        Acme Corp.<br />
                                        {user.firstName + " " + user.lastName}<br />
                                        {user.email}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr className="invoice-heading">
                        <th>Payment Method</th>
                        <th colSpan={2}>Check #</th>
                        <th></th>
                        <th></th>
                    </tr>

                    <tr className="invoice-details">
                        <td>Dummy</td>
                        <td>1000</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr className="invoice-heading">
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    {user.cart.map((item, index) =><tr className="item" key={index}>
                        <td>{item.product.name}</td>
                        <td>${item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.product.price*item.quantity}</td>
                    </tr>)}

                    <tr className="total">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: ${calculatePrice(user.cart)}</td>
                    </tr>
                </table>

    </>
}
export default GenerateInvoice