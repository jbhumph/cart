import picture from '../../assets/react.svg';

function Card({ product }) {
    return (
        <div className="card">
        <img src={picture} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
        </div>
    );
}
export default Card;