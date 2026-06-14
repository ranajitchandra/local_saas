import Banner from "./Banner"
import { GroceryCategory } from "@/components/landing/GroceryCategory"
import { ElectronicsCategory } from "@/components/landing/ElectronicsCategory"
import { FashionCategory } from "@/components/landing/FashionCategory"
import SpecialOffers from "./SpecialOffers/SpecialOffers"
import Newsletter from "./Newsletter/Newsletter"
import Features from "./Features/Features"

export default function HomePage() {
    return (
        <main className="w-full flex flex-col bg-background transition-colors duration-200">
            {/* Landing page main hero banner */}
            <Banner />

            {/* Categories Swiper Sliders Section */}
            <section className="w-full py-12 md:py-16 px-6 lg:px-8 bg-background">
                <div className="space-y-12">
                    {/* 1. Fresh Groceries Swiper Slider */}
                    <GroceryCategory />

                    {/* 2. Tech & Electronics Swiper Slider */}
                    <ElectronicsCategory />

                    {/* 3. Fashion & Style Swiper Slider */}
                    <FashionCategory />

                    <SpecialOffers />
                    <Features />
                    <Newsletter />

                </div>
            </section>
        </main>
    )
}