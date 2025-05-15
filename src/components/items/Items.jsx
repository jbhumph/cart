function Items({ product, removeFromCart }) {
    return (
        <>
            <div className="item-image">
                <img src={product.image} alt={product.name} width='30px'/>
            </div>
            <div className="item-details">
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
            <div className="item-actions">
                <button onClick={() => removeFromCart(product)} className="remove-from-cart">Remove</button>
            </div>
        </>
    );
}
export default Items;