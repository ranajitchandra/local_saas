import Banner from "./Banner"
import { GroceryCategory } from "@/components/landing/GroceryCategory"
import { ElectronicsCategory } from "@/components/landing/ElectronicsCategory"
import { FashionCategory } from "@/components/landing/FashionCategory"

export default function HomePage() {
  return (
    <main className="w-full flex flex-col bg-background transition-colors duration-200">
      {/* Landing page main hero banner */}
      <Banner />

      {/* Categories Swiper Sliders Section */}
      <section className="w-full py-12 md:py-16 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Main Header */}
          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Shop by Category
            </h2>
            <p className="text-sm text-muted-foreground mt-1.5">
              Explore our extensive catalog of quality products from local and global vendors.
            </p>
          </div>

          {/* 1. Fresh Groceries Swiper Slider */}
          <GroceryCategory />

          {/* 2. Tech & Electronics Swiper Slider */}
          <ElectronicsCategory />

          {/* 3. Fashion & Style Swiper Slider */}
          <FashionCategory />

        </div>
      </section>
    </main>
  )
}