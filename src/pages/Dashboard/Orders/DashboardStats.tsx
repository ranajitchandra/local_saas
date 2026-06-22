import { dashboardStats as _dashboardStats } from "@/data/dashboard/orders";
import type { DashboardStat } from "@/types/dashboard/order";
import { StatsCard } from "./StatsCard";

const dashboardStats = _dashboardStats as DashboardStat[];

export default function DashboardStats() {
    return (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((stat) => (
                <StatsCard
                    key={stat.id}
                    stat={stat}
                />
            ))}
        </section>
    );
}