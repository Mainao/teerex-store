import { useShoppingCart } from "./cart-context";
import type { CartItem } from "./types";
import { Button } from "../ui/button";
import "./cart.css";

export function CartItem(item: CartItem) {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
        useShoppingCart();

    return (
        <div className="cart-item">
            <img
                src={item.imageURL}
                alt={item.name}
                className="cart-item-image"
            />

            <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">Rs. {item.price}</p>
            </div>

            <div className="cart-item-actions">
                <div className="cart-item-qty">
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => decreaseCartQuantity(item.id)}
                    >
                        -
                    </Button>
                    <span>{item.productQuantity}</span>
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => increaseCartQuantity(item)}
                    >
                        +
                    </Button>
                </div>

                <Button
                    variant="secondary"
                    size="md"
                    onClick={() => removeFromCart(item.id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
