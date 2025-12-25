import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ProductSearchContextValue = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
};

const ProductSearchContext = createContext<ProductSearchContextValue | null>(
    null
);

export function ProductSearchProvider({ children }: { children: ReactNode }) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <ProductSearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </ProductSearchContext.Provider>
    );
}

export function useProductSearch() {
    const context = useContext(ProductSearchContext);

    if (!context) {
        throw new Error(
            "useProductSearch must be used within ProductSearchProvider"
        );
    }

    return context;
}
