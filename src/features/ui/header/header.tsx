export function Header() {
    return (
        <header className="header">
            <h3>TeeRex Store</h3>
            <nav className="header-nav">
                {/* <NavLink to="/" className="header-nav-link">
                    Products
                </NavLink>

                <NavLink to="/cart" className="header-nav-link">
                    <CartIcon />
                    {cartQuantity > 0 && (
                        <span className="cart-badge">{cartQuantity}</span>
                    )}
                </NavLink> */}
            </nav>
        </header>
    );
}
