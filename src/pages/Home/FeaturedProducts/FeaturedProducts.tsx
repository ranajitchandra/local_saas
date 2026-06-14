import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ProductCard } from "@/components/landing/ProductCard";
import { SwiperNavigation } from "@/components/landing/SwiperNavigation";
import { featuredProducts } from "@/Mock_Data/data";

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