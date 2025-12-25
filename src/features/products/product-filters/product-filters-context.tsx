import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProductFilterState } from "../types";
import { INITIAL_FILTERS } from "../constants";

type ProductFiltersContextValue = {
    filters: ProductFilterState;
    showFilters: boolean;
    openFilters: () => void;
    closeFilters: () => void;
    toggleFilter: (filter: keyof ProductFilterState, value: string) => void;
};

const ProductFiltersContext = createContext<ProductFiltersContextValue | null>(
    null
);

export function ProductFiltersProvider({ children }: { children: ReactNode }) {
    const [filters, setFilters] = useState<ProductFilterState>(INITIAL_FILTERS);
    const [showFilters, setShowFilters] = useState(false);

    function toggleFilter(filterProp: keyof ProductFilterState, value: string) {
        setFilters((prev) => ({
            ...prev,
            [filterProp]: {
                ...prev[filterProp],
                [value]: !prev[filterProp][value],
            },
        }));
    }

    return (
        <ProductFiltersContext.Provider
            value={{
                filters,
                showFilters,
                openFilters: () => setShowFilters(true),
                closeFilters: () => setShowFilters(false),
                toggleFilter,
            }}
        >
            {children}
        </ProductFiltersContext.Provider>
    );
}

export function useProductFilters() {
    const context = useContext(ProductFiltersContext);

    if (!context) {
        throw new Error(
            "useProductFilters must be used within ProductFiltersProvider"
        );
    }

    return context;
}
