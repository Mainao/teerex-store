import { PRODUCTS_URL } from "../constants";
import type { Product } from "../types";

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = (await response.json()) as Product[];
    return data;
}
