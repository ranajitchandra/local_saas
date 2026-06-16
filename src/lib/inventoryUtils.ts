import type { Product, ProductStatus } from "@/types/inventory";


export function getProductStatus(
    stock: number
): ProductStatus {
    if (stock === 0) {
        return "Out of Stock";
    }

    if (stock <= 10) {
        return "Low Stock";
    }

    return "In Stock";
}

export function calculateStats(
    products: Product[]
) {
    return {
        totalProducts: products.length,

        lowStock: products.filter(
            (item) =>
                item.status === "Low Stock"
        ).length,

        outOfStock: products.filter(
            (item) =>
                item.status ===
                "Out of Stock"
        ).length,

        activeVendors: 42,
    };
}