import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Props for the SwiperNavigation component.
 * Uses strict TypeScript typing to ensure clean integration.
 */
export interface SwiperNavigationProps {
  /** The unique CSS class name for the previous button */
  prevElClass: string
  /** The unique CSS class name for the next button */
  nextElClass: string
  /** Optional container CSS class overrides */
  className?: string
}

/**
 * A highly reusable, beautifully styled navigation arrow button component
 * designed specifically for custom Swiper sliders.
 * 
 * Leverage Tailwind's arbitrary variant selection to automatically style disabled buttons:
 * `[&.swiper-button-disabled]:opacity-40` & `[&.swiper-button-disabled]:pointer-events-none`
 */
export function SwiperNavigation({ prevElClass, nextElClass, className = "" }: SwiperNavigationProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <button
        className={`${prevElClass} flex items-center justify-center w-8 h-8 rounded-full border border-teal-100/80 bg-white text-teal-800 hover:bg-teal-50 transition-all duration-200 shadow-xs cursor-pointer [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        className={`${nextElClass} flex items-center justify-center w-8 h-8 rounded-full border border-teal-100/80 bg-white text-teal-800 hover:bg-teal-50 transition-all duration-200 shadow-xs cursor-pointer [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none`}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
