export type ProductStatus =
    | "In Stock"
    | "Low Stock"
    | "Out of Stock";

export interface Product {
    id: number
    name: string
    sku: string
    category: string
    price: number
    stock: number
    image: string
    status: string
}

export interface ProductForm {
    image: string;
    name: string;
    sku: string;
    category: string;
    price: number;
    stock: number;
}