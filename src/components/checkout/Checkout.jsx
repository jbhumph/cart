import './checkout.css';

function Checkout({ cart }) {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const price = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
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
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${price.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <button className="checkout-button">Checkout</button>
        </div>
    )
}
export default Checkout;