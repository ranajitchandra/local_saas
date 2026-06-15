

import type { CartItem } from "@/types/cart.types";
import type { Category } from "@/types/category";
import type { FeatureItem } from "@/types/features";
import type { Offer } from "@/types/offer";
import type { ElectronicsProduct, FashionProduct, FeaturedProduct, GroceryProduct } from "@/types/product";
import { ShoppingCart, Cross, Monitor, Shirt, House, PawPrint, Smartphone, BookOpen, Baby, Dumbbell, Gamepad2, Sofa, Car, Sparkles, UtensilsCrossed, Flower2, Watch, Briefcase, Ticket, Gem } from "lucide-react";
import { Zap, ShieldCheck, Lock, Headphones } from "lucide-react";




export const categories: Category[] = [
    {
        id: "1",
        name: "Grocery",
        icon: ShoppingCart,
    },
    {
        id: "2",
        name: "Medical",
        icon: Cross,
    },
    {
        id: "3",
        name: "Electronics",
        icon: Monitor,
    },
    {
        id: "4",
        name: "Fashion",
        icon: Shirt,
    },
    {
        id: "5",
        name: "Household",
        icon: House,
    },
    {
        id: "6",
        name: "Pet Care",
        icon: PawPrint,
    },
    {
        id: "7",
        name: "Mobiles",
        icon: Smartphone,
    },
    {
        id: "8",
        name: "Books",
        icon: BookOpen,
    },
    {
        id: "9",
        name: "Baby Care",
        icon: Baby,
    },
    {
        id: "10",
        name: "Fitness",
        icon: Dumbbell,
    },
    {
        id: "11",
        name: "Gaming",
        icon: Gamepad2,
    },
    {
        id: "12",
        name: "Furniture",
        icon: Sofa,
    },
    {
        id: "13",
        name: "Automotive",
        icon: Car,
    },
    {
        id: "14",
        name: "Beauty",
        icon: Sparkles,
    },
    {
        id: "15",
        name: "Food",
        icon: UtensilsCrossed,
    },
    {
        id: "16",
        name: "Garden",
        icon: Flower2,
    },
    {
        id: "17",
        name: "Accessories",
        icon: Watch,
    },
    {
        id: "18",
        name: "Office",
        icon: Briefcase,
    },
    {
        id: "19",
        name: "Tickets",
        icon: Ticket,
    },
    {
        id: "20",
        name: "Jewelry",
        icon: Gem,
    },
];

export const featuredProducts: FeaturedProduct[] = [
    {
        id: "1",
        name: "Premium Noise-Cancelling Headphones",
        category: "Electronics",
        price: 249,
        oldPrice: 310,
        rating: 4.8,
        reviews: 124,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        badge: "20% OFF",
    },
    {
        id: "2",
        name: "Executive Minimalist Watch",
        category: "Fashion",
        price: 189,
        rating: 4.9,
        reviews: 86,
        image:
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    },
    {
        id: "3",
        name: "Pro Edition Ultra Thin Laptop",
        category: "Electronics",
        price: 1299,
        rating: 4.7,
        reviews: 210,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        badge: "NEW",
    },
    {
        id: "4",
        name: "Premium Noise-Cancelling Headphones",
        category: "Electronics",
        price: 249,
        oldPrice: 310,
        rating: 4.8,
        reviews: 124,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        badge: "20% OFF",
    },
    {
        id: "5",
        name: "Executive Minimalist Watch",
        category: "Fashion",
        price: 189,
        rating: 4.9,
        reviews: 86,
        image:
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
    },
    {
        id: "6",
        name: "Pro Edition Ultra Thin Laptop",
        category: "Electronics",
        price: 1299,
        rating: 4.7,
        reviews: 210,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        badge: "NEW",
    },
    {
        id: "7",
        name: "Pro Edition Ultra Thin Laptop",
        category: "Electronics",
        price: 1299,
        rating: 4.7,
        reviews: 210,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        badge: "NEW",
    },

];

export const groceryproducts: GroceryProduct[] = [
    {
        id: "g-1",
        name: "Organic Fuji Apples",
        category: "Produce",
        rating: 4.9,
        reviewsCount: 42,
        price: "$4.99",
        unit: "lb",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-2",
        name: "Whole Farm Milk 1Gal",
        category: "Dairy",
        rating: 4.8,
        reviewsCount: 128,
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-3",
        name: "Premium Hass Avocados",
        category: "Produce",
        rating: 4.7,
        price: "$1.80",
        unit: "pc",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-4",
        name: "Artisan Sourdough Bread",
        category: "Bakery",
        rating: 5.0,
        price: "$6.25",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-5",
        name: "Premium Dark Roast Coffee",
        category: "Beverages",
        rating: 4.9,
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-6",
        name: "Organic Fuji Apples",
        category: "Produce",
        rating: 4.9,
        reviewsCount: 42,
        price: "$4.99",
        unit: "lb",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-7",
        name: "Whole Farm Milk 1Gal",
        category: "Dairy",
        rating: 4.8,
        reviewsCount: 128,
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-8",
        name: "Premium Hass Avocados",
        category: "Produce",
        rating: 4.7,
        price: "$1.80",
        unit: "pc",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-9",
        name: "Artisan Sourdough Bread",
        category: "Bakery",
        rating: 5.0,
        price: "$6.25",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "g-10",
        name: "Premium Dark Roast Coffee",
        category: "Beverages",
        rating: 4.9,
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=80"
    }
]

export const electronicsproducts: ElectronicsProduct[] = [
    {
        id: "e-1",
        name: "Noise Cancelling Pro",
        category: "Audio",
        rating: 4.8,
        price: "$249.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "e-2",
        name: "Creative Pad 12\"",
        category: "Computing",
        rating: 4.7,
        price: "$799.00",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "e-3",
        name: "ProMax X-1 Phone",
        category: "Mobile",
        rating: 4.9,
        price: "$999.00",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "e-4",
        name: "Smart Track Series 5",
        category: "Wearables",
        rating: 4.6,
        price: "$199.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "e-5",
        name: "HomeSync Voice Hub",
        category: "Home Tech",
        rating: 4.5,
        price: "$129.00",
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&auto=format&fit=crop&q=80"
    }
]

export const fashionproducts: FashionProduct[] = [
    {
        id: "f-1",
        name: "Velocity Running Shoes",
        category: "Footwear",
        rating: 4.8,
        price: "$125.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "f-2",
        name: "Minimalist Silver Watch",
        category: "Accessories",
        rating: 4.9,
        price: "$189.00",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "f-3",
        name: "Premium Leather Biker Jacket",
        category: "Outerwear",
        rating: 4.7,
        price: "$210.00",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "f-4",
        name: "Classic Tote Handbag",
        category: "Accessories",
        rating: 4.8,
        price: "$95.00",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: "f-5",
        name: "Slim Fit Raw Denim",
        category: "Apparel",
        rating: 4.9,
        price: "$78.00",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80"
    }
]

export const offers: Offer[] = [
    {
        id: 1,
        title: "Up to 40% Off Fresh Groceries",
        subtitle: "WEEKLY FRESHNESS",
        description:
            "Get the freshest farm-to-table produce delivered within 2 hours of your order.",
        image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e",
        buttonText: "Claim Discount",
        size: "large",
    },
    {
        id: 2,
        title: "Tech Clearance",
        subtitle: "Flash sale on previous gen electronics.",
        description: "",
        image:
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
        buttonText: "Shop Now",
        size: "small",
    },
    {
        id: 3,
        title: "Fashion Forward",
        subtitle: "Exclusive autumn collection now live.",
        description: "",
        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        buttonText: "View Collection",
        size: "small",
    },
];

export const features: FeatureItem[] = [
    {
        id: 1,
        title: "Fast Delivery",
        description: "Get your orders within 60 minutes for local stores.",
        icon: Zap,
    },
    {
        id: 2,
        title: "Verified Vendors",
        description: "We only partner with trusted and certified businesses.",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Secure Payment",
        description: "Multiple encrypted payment gateways available.",
        icon: Lock,
    },
    {
        id: 4,
        title: "24/7 Support",
        description: "Our dedicated team is always here to help you.",
        icon: Headphones,
    },
];

export const initialCartItems: CartItem[] = [
    {
        id: 1,
        name: "Pro Runner X1",
        details: "Size: 42 | Color: Aurora Teal",
        price: 129,
        qty: 1,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
        id: 2,
        name: "CyberPack 2.0",
        details: "Capacity: 25L | Material: Cordura",
        price: 85,
        qty: 1,
        image:
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400",
    },
];



















