import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Monitor, ArrowRight } from "lucide-react"
import { ProductCard } from "./ProductCard"
import { SwiperNavigation } from "./SwiperNavigation"
import "swiper/css"
import { electronicsproducts as _electronicsproducts } from "@/data/products"
import type { ElectronicsProduct } from "@/types/product";
const electronicsproducts = _electronicsproducts as ElectronicsProduct[];

export function ElectronicsCategory() {
   

    return (
        <div className="space-y-4">
            {/* Category Section Header Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-3">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center text-primary border border-secondary/20">
                        <Monitor className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-bold text-foreground">Tech & Electronics</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Cutting-edge devices and smart home solutions</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <SwiperNavigation prevElClass="electronics-prev" nextElClass="electronics-next" />
                    <div className="h-4 w-px bg-teal-100/50" />
                    <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline group">
                        View All Tech
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Swiper Slider Wrapper */}
            <div className="w-full py-2">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".electronics-prev",
                        nextEl: ".electronics-next",
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
                    {electronicsproducts.map((product) => (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
