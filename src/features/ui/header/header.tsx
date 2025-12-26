import { useShoppingCart } from "@/features/cart/cart-context";
import CartIcon from "../icons/CartIcon";

import "./header.css";
import { NavLink } from "react-router-dom";

export function Header() {
    const { cartQuantity } = useShoppingCart();

    return (
        <header className="header">
            <div className="header-inner">
                <h3 className="header-title">TeeRex Store</h3>

                <nav className="header-nav">
                    <NavLink to="/" className="header-nav-link">
                        Products
                    </NavLink>

                    <NavLink to="/cart" className="header-nav-link">
                        <CartIcon />
                        {cartQuantity > 0 && (
                            <span className="cart-badge">{cartQuantity}</span>
                        )}
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
