import { Button } from "@/features/ui/button";
import { useProductFilters } from "../product-filters/product-filters-context";
import FilterIcon from "@/features/ui/icons/FilterIcon";
import "./filter-toggle-button.css";

export function FilterToggleButton() {
    const { openFilters } = useProductFilters();

    return (
        <Button
            variant="secondary"
            size="sm"
            className="filter-toggle-btn"
            onClick={openFilters}
            aria-label="Open filters"
        >
            <FilterIcon />
        </Button>
    );
}
