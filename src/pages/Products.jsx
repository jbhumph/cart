import { useState, useEffect } from 'react';
import Card from '../components/card/Card.jsx';

function Products({ addToCart }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.99, image: '/api/placeholder/200/150' },
    { id: 2, name: 'Smartphone', price: 699.99, image: '/api/placeholder/200/150' },
    { id: 3, name: 'Headphones', price: 199.99, image: '/api/placeholder/200/150' },
    { id: 4, name: 'Tablet', price: 499.99, image: '/api/placeholder/200/150' }
  ]);
  
  return (
    <div className="page">
      <h1>Products</h1>
      <p>Here are some of our products.</p>
      <div className="product-grid">
        {products.map(product => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
export default Products;