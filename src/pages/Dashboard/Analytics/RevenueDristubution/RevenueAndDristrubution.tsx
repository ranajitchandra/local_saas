import RegionalDistribution from "./RegionalDistribution";
import RevenueChart from "./RevenueChart";

export default function RevenueAndDristrubution() {
    return (
        <section className="quickmart-theme">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
                <RevenueChart />
                <RegionalDistribution />
            </div>
        </section>
    )
}
