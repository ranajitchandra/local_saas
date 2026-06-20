import TopPerformingVendors from "./TopPerformingVendors";
import VendorRecentActivity from "./VendorRecentActivity";


export default function VendorPerfoming() {
    return (
        <section className="quickmart-theme">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
                <TopPerformingVendors />
                <VendorRecentActivity />
            </div>
        </section>
    );
}