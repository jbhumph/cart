import React from 'react';
import Checkout from '../components/checkout/Checkout.jsx';
import Items from '../components/items/Items.jsx';


function Cart({ cart }) {
  return (
    <div className="page">
        <h1>Cart</h1>
        <div className="split">
            <div className="left">
                <h2>Items in Cart</h2>
                <div className="items">{cart.map((item) => (
                    <div key={item.id} className="item">
                        <Items product={item} quantity={item.quantity} />
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