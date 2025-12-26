import { useProductFilters } from "./product-filters-context";
import { Checkbox } from "@/features/ui/checkbox";
import "./product-filters.css";

export function ProductFilters() {
    const { filters, showFilters, closeFilters, toggleFilter } =
        useProductFilters();

    return (
        <aside
            className={`product-page-filters ${showFilters ? "visible" : ""}`}
        >
            <div className="filter-panel">
                <div className="filter-panel-header">
                    <h3 className="filter-title">Filters</h3>
                    <button className="filter-close-btn" onClick={closeFilters}>
                        ✕
                    </button>
                </div>

                <FilterSection
                    title="Colour"
                    values={filters.colour}
                    onToggle={(v) => toggleFilter("colour", v)}
                />

                <FilterSection
                    title="Gender"
                    values={filters.gender}
                    onToggle={(v) => toggleFilter("gender", v)}
                />

                <FilterSection
                    title="Category"
                    values={filters.type}
                    onToggle={(v) => toggleFilter("type", v)}
                />

                <FilterSection
                    title="Price"
                    values={filters.priceRange}
                    onToggle={(v) => toggleFilter("priceRange", v)}
                />
            </div>
        </aside>
    );
}

function FilterSection({
    title,
    values,
    onToggle,
}: {
    title: string;
    values: Record<string, boolean>;
    onToggle: (value: string) => void;
}) {
    return (
        <div className="filter-section">
            <h4>{title}</h4>
            {Object.entries(values).map(([key, checked]) => (
                <Checkbox
                    key={key}
                    label={key}
                    checked={checked}
                    onChange={() => onToggle(key)}
                    name={title}
                />
            ))}
        </div>
    );
}
