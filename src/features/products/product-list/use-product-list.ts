import { useEffect, useState } from "react";
import type { Product } from "../types";
import { fetchProducts } from "../services";

export function useProductList(): {
    products: Product[];
    loading: boolean;
    error: string | null;
} {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Error loading products");
                setLoading(false);
            });
    }, []);

    return { products, loading, error };
}
