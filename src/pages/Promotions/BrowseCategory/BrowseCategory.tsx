import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight } from "lucide-react";
import { SwiperNavigation } from "@/components/landing/SwiperNavigation";
import { browseCategoryItems } from "@/Mock_Data/data";
import { CategoryCard } from "./CategoryCard";

export function BrowseCategory() {
    return (
        <section className="space-y-10">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold text-foreground">
                        Browse by Category
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        Carefully curated deals across our most popular
                        departments.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <SwiperNavigation
                        prevElClass="category-prev"
                        nextElClass="category-next"
                    />

                    <a
                        href="#"
                        className="group hidden items-center gap-2 text-sm font-semibold text-primary lg:flex"
                    >
                        View All

                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: ".category-prev",
                    nextEl: ".category-next",
                }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {browseCategoryItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CategoryCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}