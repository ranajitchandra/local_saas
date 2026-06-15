import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/hooks/useCart"

export interface Product {
  id: string
  name: string
  category: string
  rating: number
  reviewsCount?: number
  reviews?: number
  price: string | number
  unit?: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()
  const formattedPrice = typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price
  const numericPrice = typeof product.price === "number"
    ? product.price
    : Number(product.price.replace(/[^0-9.]/g, ""))
  const reviewsCount = product.reviewsCount ?? product.reviews

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      details: product.unit ? `${product.category} | Unit: ${product.unit}` : product.category,
      price: Number.isFinite(numericPrice) ? numericPrice : 0,
      image: product.image,
    })
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-teal-100/50 bg-card hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300 flex flex-col h-full">
      
      {/* Product Image Section */}
      <div className="relative overflow-hidden aspect-square w-full bg-teal-50/10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Wishlist Button Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsWishlisted(!isWishlisted)
          }}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer z-10"
        >
          <Heart 
            className={`h-4.5 w-4.5 transition-colors ${
              isWishlisted 
                ? "fill-red-500 text-red-500" 
                : "text-zinc-600 hover:text-red-500"
            }`} 
          />
        </button>
      </div>

      {/* Info Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-1">
          {/* Category Tag */}
          <span className="text-[9px] font-bold text-primary tracking-wider uppercase">
            {product.category}
          </span>
          
          {/* Product Title */}
          <h4 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h4>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-[11px] font-bold text-foreground mt-0.5">
              {product.rating.toFixed(1)}
            </span>
            {reviewsCount !== undefined && (
              <span className="text-[10px] text-muted-foreground mt-0.5">
                ({reviewsCount})
              </span>
            )}
          </div>
        </div>

        {/* Pricing Actions Row */}
        <div className="mt-4 flex items-center justify-between pt-1">
          <div>
            <span className="text-base font-extrabold text-[#0a685c]">
              {formattedPrice}
            </span>
            {product.unit && (
              <span className="text-[10px] text-muted-foreground font-medium">
                /{product.unit}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            className="h-8 w-8 rounded-lg bg-primary hover:bg-[#08534a] active:translate-y-px text-primary-foreground flex items-center justify-center shadow-sm transition-all cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

      </div>

    </div>
  )
}
