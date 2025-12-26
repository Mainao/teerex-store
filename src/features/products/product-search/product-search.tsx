import { useState } from "react";
import { useProductSearch } from "./product-search-context";
import "./product-search.css";
import { Button } from "@/features/ui/button";
import SearchIcon from "@/features/ui/icons/SearchIcon";

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
                name="search"
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

            <Button
                size="md"
                className="search-button-container"
                onClick={handleSubmit}
            >
                <SearchIcon />
            </Button>
        </div>
    );
}
