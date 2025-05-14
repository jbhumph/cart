import './checkout.css';

function Checkout({ cart }) {
    let total = 0
    let price = 0

    cart.map((item) => {
        total += item.quantity
        price += (item.price * item.quantity)
    })
    
    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <table className="checkout-items">
                <thead>
                    <tr>
                        <th>Qty</th>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.quantity}</td>
                            <td>{item.name}</td>
                            <td>{(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="final-items">
                <thead>
                    <tr>
                        <th>Total Items</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{total}</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Checkout;