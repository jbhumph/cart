import "./header.css";
import { ShoppingCart} from 'lucide-react';

function Header() {
  return (
    <div className="header">
        <div className="logo">
            <h1>My Store</h1>
        </div>
        <div className="nav">
            <a href="/">Home</a>
            <a href="/products">Products</a>
        </div>
        <div className="cartIcon">
            <ShoppingCart size={24} color="var(--Color-C)" />
        </div>
    </div>
  );
}
export default Header;