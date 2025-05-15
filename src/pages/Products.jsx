import { useState, useEffect } from 'react';
import Card from '../components/card/Card.jsx';
import axios from 'axios';

function Products({ addToCart }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.99, image: '/api/placeholder/200/150' },
    { id: 2, name: 'Smartphone', price: 699.99, image: '/api/placeholder/200/150' },
    { id: 3, name: 'Headphones', price: 199.99, image: '/api/placeholder/200/150' },
    { id: 4, name: 'Tablet', price: 499.99, image: '/api/placeholder/200/150' },
    { id: 5, name: 'Smartwatch', price: 299.99, image: '/api/placeholder/200/150' },
    { id: 6, name: 'Camera', price: 799.99, image: '/api/placeholder/200/150' },
    { id: 7, name: 'Monitor', price: 299.99, image: '/api/placeholder/200/150' },
    { id: 8, name: 'Keyboard', price: 99.99, image: '/api/placeholder/200/150' },
    { id: 9, name: 'Mouse', price: 49.99, image: '/api/placeholder/200/150' },
    { id: 10, name: 'Printer', price: 199.99, image: '/api/placeholder/200/150' }
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=10');
        const data = response;
        console.log(data);
        setProducts(data.data.map(product => ({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image
        })));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  
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