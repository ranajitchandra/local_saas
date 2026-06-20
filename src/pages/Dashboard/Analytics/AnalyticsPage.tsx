import AnalyticsStats from "./AnalyticsStats";
import RevenueAndDristrubution from "./RevenueDristubution/RevenueAndDristrubution";
import VendorPerfoming from "./VendorPerforming/VendorPerfoming";



export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <AnalyticsStats />
            <RevenueAndDristrubution />
            <VendorPerfoming />
        </div>
    )
}
