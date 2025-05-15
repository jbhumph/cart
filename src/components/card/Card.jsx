import picture from '../../assets/react.svg';
import './Card.css';

function Card({ product, addToCart }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} width='90px'/>
            <div className='card-box'>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
}
export default Card;