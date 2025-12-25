import type { Product, ProductFilterState } from "../types";

type CollectedFilters = {
    [K in keyof ProductFilterState]: string[];
};

export function collectFilters(filters: ProductFilterState): CollectedFilters {
    const collected = {} as CollectedFilters;

    for (const key in filters) {
        const filterKey = key as keyof ProductFilterState;
        const options = filters[filterKey];

        collected[filterKey] = Object.keys(options).filter(
            (item) => options[item]
        );
    }

    return collected;
}

export function multiPropsFilter(
    products: Product[],
    filters: CollectedFilters
): Product[] {
    return products.filter((product) =>
        Object.entries(filters).every(([key, values]) => {
            if (values.length === 0) return true;

            if (key === "priceRange") {
                return values.some((range) => {
                    const [min, max] =
                        range === "450+"
                            ? [450, Infinity]
                            : range.split("-").map(Number);

                    return product.price >= min && product.price <= max;
                });
            }

            return values.includes(product[key as keyof Product] as string);
        })
    );
}
