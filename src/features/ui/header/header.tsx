import CartIcon from "../icons/CartIcon";
import "./header.css";

export function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <h3 className="header-title">TeeRex Store</h3>

                <nav className="header-nav">
                    <div className="header-nav-link">
                        <CartIcon />
                        {/* <span className="header-cart-badge">2</span> */}
                    </div>
                </nav>
            </div>
        </header>
    );
}
