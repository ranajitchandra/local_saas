
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Shirt, ArrowRight } from "lucide-react"
import { ProductCard } from "./ProductCard"
import { SwiperNavigation } from "./SwiperNavigation"
import "swiper/css"
import type { FashionProduct } from "@/types/product"

export function FashionCategory() {
    const products: FashionProduct[] = [
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

    return (
        <div className="space-y-4">
            {/* Category Section Header Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-teal-100/50 pb-3">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center text-primary border border-secondary/20">
                        <Shirt className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-bold text-foreground">Fashion & Style</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Elevate your wardrobe with the latest trends</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <SwiperNavigation prevElClass="fashion-prev" nextElClass="fashion-next" />
                    <div className="h-4 w-px bg-teal-100/50" />
                    <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline group">
                        Shop Fashion
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Swiper Slider Wrapper */}
            <div className="w-full py-2">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".fashion-prev",
                        nextEl: ".fashion-next",
                    }}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        480: { slidesPerView: 1.8, spaceBetween: 16 },
                        640: { slidesPerView: 2.3, spaceBetween: 16 },
                        768: { slidesPerView: 3.2, spaceBetween: 20 },
                        1024: { slidesPerView: 4.2, spaceBetween: 20 },
                        1200: { slidesPerView: 5, spaceBetween: 20 }
                    }}
                    className="w-full"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
