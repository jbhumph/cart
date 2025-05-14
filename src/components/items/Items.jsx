function Items({ product, quantity }) {
    return (
        <>
            <div className="item-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="item-details">
                <h2>{product.name}</h2>
                <p>${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
            <div className="item-actions">
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </>
    );
}
export default Items;