import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ShoppingCart, Cross, Monitor, Shirt, House, PawPrint, Smartphone, BookOpen, Baby, Dumbbell, Gamepad2, Sofa, Car, Sparkles, UtensilsCrossed, Flower2, Watch, Briefcase, Ticket, Gem, ArrowRight } from "lucide-react";


import type { Category } from "@/types/category";
import { SwiperNavigation } from "@/components/landing/SwiperNavigation";

const categories: Category[] = [
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

export function ExploreCategories() {
    return (
        <section className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Explore Categories
                    </h2>

                    <p className="text-muted-foreground mt-1">
                        Find exactly what you're looking for
                    </p>
                </div>

                <div className="flex justify-center md:justify-start items-center gap-3">
                    <SwiperNavigation
                        prevElClass="category-prev"
                        nextElClass="category-next"
                    />
                    <button className="flex items-center gap-1 text-primary text-sm font-medium">
                        All Categories
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: ".category-prev",
                    nextEl: ".category-next",
                }}
                spaceBetween={16}
                slidesPerView={2.2}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
            >
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <SwiperSlide key={category.id}>
                            <button
                                className="
                                    w-full
                                    bg-card
                                    border
                                    rounded-2xl
                                    p-5
                                    hover:border-primary/30
                                    hover:shadow-md
                                    transition-all
                                    flex
                                    flex-col
                                    items-center
                                    gap-3
                                "
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <span className="text-sm font-medium">
                                    {category.name}
                                </span>
                            </button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}