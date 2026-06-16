"use client";

import { useMemo, useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import InventoryModal from "./Modals/InventoryModal";
import { inventoryProducts } from "@/Mock_Data/inventoryData";
import type { Product } from "@/types/inventory";

export default function InventoryList() {
    const [products, setProducts] =
        useState<Product[]>(inventoryProducts);

    const [open, setOpen] = useState(false);
    const [editing, setEditing] =
        useState<Product | null>(null);

    const [search, setSearch] = useState("");
    const [category, setCategory] =
        useState("All Categories");
    const [status, setStatus] =
        useState("All Status");

    const [page, setPage] = useState(1);

    const perPage = 5;

    const categories = [
        "All Categories",
        ...new Set(products.map((p) => p.category)),
    ];

    const filteredProducts = useMemo(() => {
        return products.filter((item) => {
            const matchSearch =
                item.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.sku
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchCategory =
                category === "All Categories" ||
                item.category === category;

            const matchStatus =
                status === "All Status" ||
                item.status === status;

            return (
                matchSearch &&
                matchCategory &&
                matchStatus
            );
        });
    }, [products, search, category, status]);

    const totalPages = Math.ceil(
        filteredProducts.length / perPage
    );

    const paginatedProducts =
        filteredProducts.slice(
            (page - 1) * perPage,
            page * perPage
        );

    const handleSave = (product: Product) => {
        if (editing) {
            setProducts((prev) =>
                prev.map((item) =>
                    item.id === product.id
                        ? product
                        : item
                )
            );
        } else {
            setProducts((prev) => [
                ...prev,
                {
                    ...product,
                    id: Date.now(),
                },
            ]);
        }

        setEditing(null);
    };

    const handleDelete = (id: number) => {
        setProducts((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const getStatusBadge = (
        status: string
    ) => {
        switch (status) {
            case "In Stock":
                return (
                    <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200">
                        In Stock
                    </Badge>
                );

            case "Low Stock":
                return (
                    <Badge className="bg-red-100 text-red-600 border border-red-200">
                        Low Stock
                    </Badge>
                );

            default:
                return (
                    <Badge className="bg-slate-100 text-slate-600 border border-slate-200">
                        Out of Stock
                    </Badge>
                );
        }
    };

    return (
        <div className="quickmart-theme">
            <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">

                {/* Filters */}
                <div className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-3">

                        <Input
                            placeholder="Search product..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="w-62.5"
                        />

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="h-10 rounded-lg border bg-background px-3"
                        >
                            {categories.map((cat) => (
                                <option
                                    key={cat}
                                    value={cat}
                                >
                                    {cat}
                                </option>
                            ))}
                        </select>

                        <select
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                            className="h-10 rounded-lg border bg-background px-3"
                        >
                            <option>
                                All Status
                            </option>
                            <option>
                                In Stock
                            </option>
                            <option>
                                Low Stock
                            </option>
                            <option>
                                Out of Stock
                            </option>
                        </select>
                    </div>

                    <Button
                        className="bg-primary text-primary-foreground"
                        onClick={() => {
                            setEditing(null);
                            setOpen(true);
                        }}
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Product
                    </Button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-225">
                        <thead className="bg-muted">
                            <tr>
                                <th className="p-4 text-left">
                                    Product & SKU
                                </th>

                                <th className="text-left">
                                    Category
                                </th>

                                <th className="text-left">
                                    Price
                                </th>

                                <th className="text-left">
                                    Stock
                                </th>

                                <th className="text-left">
                                    Status
                                </th>

                                <th className="text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedProducts.map(
                                (product) => (
                                    <tr
                                        key={product.id}
                                        className="border-t"
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-14 w-14 rounded-lg object-cover"
                                                />

                                                <div>
                                                    <h4 className="font-semibold">
                                                        {product.name}
                                                    </h4>

                                                    <p className="text-sm text-muted-foreground">
                                                        SKU:
                                                        {" "}
                                                        {product.sku}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            {product.category}
                                        </td>

                                        <td className="font-semibold">
                                            $
                                            {product.price.toFixed(
                                                2
                                            )}
                                        </td>

                                        <td>
                                            {product.stock}
                                        </td>

                                        <td>
                                            {getStatusBadge(
                                                product.status
                                            )}
                                        </td>

                                        <td>
                                            <div className="flex justify-center gap-2">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    onClick={() => {
                                                        setEditing(
                                                            product
                                                        );
                                                        setOpen(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    <Pencil
                                                        size={
                                                            18
                                                        }
                                                    />
                                                </Button>

                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    onClick={() =>
                                                        handleDelete(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    <Trash2
                                                        size={
                                                            18
                                                        }
                                                    />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-4 border-t p-5 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-muted-foreground">
                        Showing{" "}
                        {(page - 1) *
                            perPage +
                            1}{" "}
                        to{" "}
                        {Math.min(
                            page *
                            perPage,
                            filteredProducts.length
                        )}{" "}
                        of{" "}
                        {
                            filteredProducts.length
                        }{" "}
                        results
                    </p>

                    <div className="flex items-center gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            disabled={
                                page === 1
                            }
                            onClick={() =>
                                setPage(
                                    page - 1
                                )
                            }
                        >
                            <ChevronLeft />
                        </Button>

                        <div className="rounded-md border px-4 py-2 text-sm font-medium">
                            {page}
                        </div>

                        <Button
                            size="icon"
                            variant="outline"
                            disabled={
                                page ===
                                totalPages
                            }
                            onClick={() =>
                                setPage(
                                    page + 1
                                )
                            }
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>

            <InventoryModal
                open={open}
                onOpenChange={setOpen}
                product={editing}
                onSave={handleSave}
            />
        </div>
    );
}