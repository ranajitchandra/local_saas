import { useMemo, useState } from "react";

import VendorCard from "./VendorCard";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { vendors } from "@/Mock_Data/vendor";

const categories = [
    "All Vendors",
    "Electronics",
    "Fashion",
    "Home & Living",
    "Fresh Produce",
];

const ITEMS_PER_PAGE = 6;

export default function Vendors() {
    const [activeCategory, setActiveCategory] =
        useState("All Vendors");

    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        if (activeCategory === "All Vendors")
            return vendors;

        return vendors.filter(
            (v) =>
                v.category === activeCategory
        );
    }, [activeCategory]);

    const totalPages = Math.ceil(
        filtered.length / ITEMS_PER_PAGE
    );

    const paginated = filtered.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCategory(cat);
                            setPage(1);
                        }}
                        className={`
                            px-4 py-2 rounded-lg text-sm
                            transition-colors
                            ${activeCategory === cat
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {paginated.map((vendor) => (
                    <VendorCard
                        key={vendor.id}
                        vendor={vendor}
                    />
                ))}
            </div>

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();

                                if (page > 1) {
                                    setPage(page - 1);
                                }
                            }}
                            className={
                                page === 1
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }
                        />
                    </PaginationItem>

                    {Array.from({
                        length: totalPages,
                    }).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                isActive={page === index + 1}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(index + 1);
                                }}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();

                                if (page < totalPages) {
                                    setPage(page + 1);
                                }
                            }}
                            className={
                                page === totalPages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}