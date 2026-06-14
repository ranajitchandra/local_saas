import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";


import { ProductCard } from "@/components/landing/ProductCard";
import type { FeaturedProduct } from "@/types/product";
import { SwiperNavigation } from "@/components/landing/SwiperNavigation";

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

export function FeaturedProducts() {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Featured Products
                    </h2>

                    <p className="text-muted-foreground mt-1">
                        Top picks curated for you
                    </p>
                </div>

                <SwiperNavigation
                    prevElClass="featured-prev"
                    nextElClass="featured-next"
                />
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: ".featured-prev",
                    nextEl: ".featured-next",
                }}
                spaceBetween={16}
                slidesPerView={1.2}
                breakpoints={{
                    480: {
                        slidesPerView: 1.5,
                    },
                    640: {
                        slidesPerView: 2.2,
                    },
                    768: {
                        slidesPerView: 3.2,
                    },
                    1024: {
                        slidesPerView: 4.2,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
            >
                {featuredProducts.map((product) => (
                    <SwiperSlide
                        key={product.id}
                        className="h-auto"
                    >
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}