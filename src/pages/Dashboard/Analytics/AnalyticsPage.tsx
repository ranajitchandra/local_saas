import AnalyticsStats from "./AnalyticsStats";
import RevenueAndDristrubution from "./RevenueDristubution/RevenueAndDristrubution";



export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <AnalyticsStats />
            <RevenueAndDristrubution />
        </div>
    )
}
