export type Product = {
    id: number;
    name: string;
    price: number;
    color: string;
    gender: string;
    type: string;
    imageURL: string;
    quantity: number;
};

export type ProductFilterState = {
    colour: Record<string, boolean>;
    gender: Record<string, boolean>;
    type: Record<string, boolean>;
    priceRange: Record<string, boolean>;
};
