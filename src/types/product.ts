// Product category types
export type ElectronicsCategoryType = "Audio" | "Computing" | "Mobile" | "Wearables" | "Home Tech";
export type FashionCategoryType = "Footwear" | "Accessories" | "Outerwear" | "Apparel";
export type GroceryCategoryType = "Produce" | "Dairy" | "Bakery" | "Beverages";

// Generic Product interface
export interface Product {
    id: string;
    name: string;
    category: ElectronicsCategoryType | FashionCategoryType | GroceryCategoryType;
    rating: number;
    price: string;
    image: string;
    reviewsCount?: number;
    unit?: string;
}

// Category-specific product interfaces
export interface ElectronicsProduct extends Product {
    category: ElectronicsCategoryType;
}

export interface FashionProduct extends Product {
    category: FashionCategoryType;
}

export interface GroceryProduct extends Product {
    category: GroceryCategoryType;
}

// types/featured-product.ts

export type FeaturedProduct = {
    id: string;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
};

export interface DealProduct {
    id: number;
    category: string;
    title: string;
    image: string;
    discount: number;
    price: number;
    oldPrice: number;
}