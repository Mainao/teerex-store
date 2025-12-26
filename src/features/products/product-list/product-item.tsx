import type { Product } from "../types";
import { useShoppingCart } from "@/features/cart/cart-context";
import { Button } from "@/features/ui/button";
import "./product-item.css";

interface ProductItemProps {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
        useShoppingCart();

    const productQuantity = getItemQuantity(product.id);

    const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageURL: product.imageURL,
        quantity: product.quantity,
        productQuantity: 1,
    };

    return (
        <div className="product-card">
            <div className="product-card-image-wrapper">
                <img
                    src={product.imageURL}
                    alt={product.name}
                    className="product-card-image"
                />
            </div>

            <div className="product-card-content">
                <h4 className="product-card-title">{product.name}</h4>

                <div className="product-card-footer">
                    <div className="product-card-info">
                        <p className="product-card-price">
                            Rs. {product.price}
                        </p>
                    </div>

                    <div className="product-card-actions">
                        {productQuantity === 0 ? (
                            <Button
                                size="sm"
                                onClick={() =>
                                    increaseCartQuantity(cartProduct)
                                }
                            >
                                Add to cart
                            </Button>
                        ) : (
                            <div className="product-card-quantity">
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    onClick={() =>
                                        decreaseCartQuantity(product.id)
                                    }
                                >
                                    −
                                </Button>

                                <span>{productQuantity}</span>

                                <Button
                                    size="sm"
                                    variant="secondary"
                                    onClick={() =>
                                        increaseCartQuantity(cartProduct)
                                    }
                                >
                                    +
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
