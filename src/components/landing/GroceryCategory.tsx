
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ShoppingBag, ArrowRight } from "lucide-react"
import { ProductCard } from "./ProductCard"
import { SwiperNavigation } from "./SwiperNavigation"
import "swiper/css"
import { groceryproducts as _groceryproducts } from "@/data/products"
import type { GroceryProduct } from "@/types/product";
const groceryproducts = _groceryproducts as GroceryProduct[];

export function GroceryCategory() {
  
    return (
        <div className="space-y-14">
            {/* Section Main Header */}
            <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    Shop by Category
                </h2>
                <p className="text-sm text-muted-foreground mt-1.5">
                    Explore our extensive catalog of quality products from local and global vendors.
                </p>
            </div>
            <div className="">
                {/* Category Section Header Row */}
                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center text-primary border border-secondary/20">
                            <ShoppingBag className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-bold text-foreground">Fresh Groceries</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Farm-fresh produce and daily essentials</p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start items-center gap-3">
                        <SwiperNavigation prevElClass="grocery-prev" nextElClass="grocery-next" />
                        <div className="h-4 w-px bg-teal-100/50" />
                        <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline group">
                            All Grocery
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Swiper Slider Wrapper */}
                <div className="w-full py-2">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".grocery-prev",
                            nextEl: ".grocery-next",
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
                        {groceryproducts.map((product) => (
                            <SwiperSlide key={product.id} className="h-auto">
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
