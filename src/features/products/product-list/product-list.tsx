import type { Product } from "../types";
import { useProductList } from "./use-product-list";
import { useProductFilters } from "../product-filters/product-filters-context";
import { useProductSearch } from "../product-search/product-search-context";
import {
    collectFilters,
    multiPropsFilter,
} from "../utils/product-filter-utils";
import { ProductItem } from "./product-item";
import "./product-list.css";

export function ProductList() {
    const { products, loading, error } = useProductList();
    const { filters } = useProductFilters();
    const { searchTerm } = useProductSearch();

    if (loading) {
        return <div className="loading-text">Loading products…</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const activeFilters = collectFilters(filters);
    const filteredProducts = multiPropsFilter(products, activeFilters);

    const finalProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (finalProducts.length === 0) {
        return <div className="empty-text">No products found</div>;
    }

    return (
        <main className="product-page-content">
            <div className="product-list">
                {finalProducts.map((product: Product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
