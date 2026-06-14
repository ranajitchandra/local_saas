import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Monitor, ArrowRight } from "lucide-react"
import { ProductCard } from "./ProductCard"
import { SwiperNavigation } from "./SwiperNavigation"
import "swiper/css"
import type { ElectronicsProduct } from "@/types/product"

export function ElectronicsCategory() {
  const products: ElectronicsProduct[] = [
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

  return (
    <div className="space-y-4">
      {/* Category Section Header Row */}
      <div className="flex items-center justify-between border-b border-teal-100/50 pb-3">
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
