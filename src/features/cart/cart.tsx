import { useShoppingCart } from "./cart-context";
import { CartItem } from "./cart-item";
import "./cart.css";

export function Cart() {
    const { cartItems } = useShoppingCart();

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.productQuantity * item.price,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <div className="cart-empty-icon">🛒</div>
                <p className="cart-empty-text">Your cart is empty</p>
                <p className="cart-empty-subtext">
                    Add some products to get started
                </p>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-list">
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>

            <hr className="cart-divider" />

            <div className="cart-total">
                <span>Total amount</span>
                <strong>Rs. {totalAmount}</strong>
            </div>
        </div>
    );
}
