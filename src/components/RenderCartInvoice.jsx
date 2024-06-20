function RenderCartInvoice({user}){
    return<>
        {user.cart.map((item, index) =><tr className="item" key={index}>
                        <td>{item.product.name}</td>
                        <td>${item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.product.price*item.quantity}</td>
                    </tr>)}
    </>
}
export default RenderCartInvoice;