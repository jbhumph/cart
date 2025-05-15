import Checkout from '../components/checkout/Checkout.jsx';
import Items from '../components/items/Items.jsx';


function Cart({ cart, removeFromCart }) {
  return (
    <div className="page">
        <h1>Cart</h1>
        <div className="split">
            <div className="left">
                <div className="items">{cart.map((item) => (
                    <div key={item.id} className="item">
                        <Items product={item} removeFromCart={removeFromCart} />
                    </div>
                ))}</div>
            </div>
            <div className="right">
                <Checkout cart={cart} />
            </div>
        </div>
    </div>
  );
}
export default Cart;