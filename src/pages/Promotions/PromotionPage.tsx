import { BrowseCategory } from "./BrowseCategory/BrowseCategory";
import FlashSaleBanner from "./FlashSaleBanner";



export default function PromotionPage() {
    return (
        <div className="quickmart-theme">
            <FlashSaleBanner />
            <BrowseCategory />
        </div>
    )
}
