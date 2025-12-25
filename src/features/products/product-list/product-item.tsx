import { Button } from "@/features/ui/button";
import type { Product } from "../types";
import "./product-item.css";

interface ProductItemProps {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
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
                        <Button size="sm">Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
