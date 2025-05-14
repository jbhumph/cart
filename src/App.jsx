import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Header from './components/header/Header.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const addToCart = (product) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id)
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart]
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1
        }
        return updatedCart
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  return (
    <Router>
      <div className="App">
        <Header count={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cart={cart}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
