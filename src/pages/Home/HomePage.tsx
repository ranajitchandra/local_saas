import Banner from "./Banner"
import { GroceryCategory } from "@/components/landing/GroceryCategory"
import { ElectronicsCategory } from "@/components/landing/ElectronicsCategory"
import { FashionCategory } from "@/components/landing/FashionCategory"
import SpecialOffers from "./SpecialOffers/SpecialOffers"
import Newsletter from "./Newsletter/Newsletter"
import Features from "./Features/Features"
import { ExploreCategories } from "./ExploreCategories/ExploreCategories"
import { FeaturedProducts } from "./FeaturedProducts/FeaturedProducts"

export default function HomePage() {
    return (
        <main className="w-full flex flex-col bg-background transition-colors duration-200">
            <section className="space-y-12 w-full py-12 md:py-16 px-6 bg-background">
                <Banner />
                <ExploreCategories />
                <FeaturedProducts />
                <GroceryCategory />
                <ElectronicsCategory />
                <FashionCategory />
                <SpecialOffers />
                <Features />
                <Newsletter />
            </section>
        </main>
    )
}