import { BrowseCategory } from "./BrowseCategory/BrowseCategory";
import FlashSaleBanner from "./FlashSaleBanner";
import { PromotionalNewsLetter } from "./PromotionalNewsLetter/PromotionalNewsLetter";
import { TodayTopDeals } from "./TodayTopDeal/TodayTopDeals";



export default function PromotionPage() {
    return (
        <div className="quickmart-theme space-y-16 py-16">
            <FlashSaleBanner />
            <BrowseCategory />
            <TodayTopDeals />
            <PromotionalNewsLetter />
        </div>
    )
}
