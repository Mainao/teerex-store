import {
    ProductFilters,
    ProductFiltersProvider,
} from "@/features/products/product-filters";
import { ProductList } from "@/features/products/product-list";
import { ProductSearch } from "@/features/products/product-search/product-search";
import { ProductSearchProvider } from "@/features/products/product-search/product-search-context";
import { FilterToggleButton } from "@/features/products/ui/FilterToggleButton";

export default function ProductsPage() {
    return (
        <ProductFiltersProvider>
            <ProductSearchProvider>
                <section className="products-page">
                    <div className="products-search">
                        <ProductSearch />
                        <FilterToggleButton />
                    </div>

                    <div className="products-layout">
                        <ProductFilters />

                        <main className="products-content">
                            <ProductList />
                        </main>
                    </div>
                </section>
            </ProductSearchProvider>
        </ProductFiltersProvider>
    );
}
