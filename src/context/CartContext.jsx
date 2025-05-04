import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
}
