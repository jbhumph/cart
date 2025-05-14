import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { ShoppingCart } from 'lucide-react';

function Header({ count }) {
  return (
    <div className="header">
        <div className="logo">
            <h1>My Store</h1>
        </div>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </div>
        <div className="cartIcon">
            <Link to="/cart"><ShoppingCart size={24} color="var(--Color-C)" /></Link>
            <span className="cartCount">{count}</span>
        </div>
    </div>
  );
}
export default Header;