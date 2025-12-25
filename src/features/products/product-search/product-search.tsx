import { useState } from "react";
import { useProductSearch } from "./product-search-context";
import "./product-search.css";
import { Button } from "@/features/ui/button";

export function ProductSearch() {
    const { setSearchTerm } = useProductSearch();
    const [term, setTerm] = useState("");

    function handleSubmit() {
        setSearchTerm(term.trim());
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search products..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="search-bar-input"
                aria-label="Search products"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
            />

            <Button size="md" onClick={handleSubmit}>
                Search
            </Button>
        </div>
    );
}
