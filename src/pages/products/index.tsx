import {
    ProductFilters,
    ProductFiltersProvider,
} from "@/features/products/product-filters";
import { ProductList } from "@/features/products/product-list";
import { ProductSearch } from "@/features/products/product-search/product-search";
import { ProductSearchProvider } from "@/features/products/product-search/product-search-context";

export default function ProductsPage() {
    return (
        <ProductFiltersProvider>
            <ProductSearchProvider>
                <section className="products-page">
                    <div className="products-search">
                        <ProductSearch />
                    </div>

                    <div className="products-layout">
                        <aside className="products-filters">
                            <ProductFilters />
                        </aside>

                        <main className="products-content">
                            <ProductList />
                        </main>
                    </div>
                </section>
            </ProductSearchProvider>
        </ProductFiltersProvider>
    );
}
