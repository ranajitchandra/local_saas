import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { bannerSlides } from "@/data/bannerData";

export default function Banner() {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop
            >
                {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-86 sm:h-112 lg:h-138 overflow-hidden">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full items-center">
                                <div className="max-w-2xl px-6 md:px-12">
                                    <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                        Quick Delivery
                                    </span>

                                    <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-4 max-w-xl text-white/80 text-sm md:text-lg">
                                        {slide.subtitle}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <button className="bg-primary text-primary-foreground px-6 py-1.5 md:py-2 lg:py-3 rounded-lg font-semibold">
                                            Shop Now
                                        </button>

                                        <button className="border border-white/40 text-white px-6 py-1.5 md:py-2 lg:py-3 rounded-lg font-semibold backdrop-blur-sm">
                                            Explore More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}