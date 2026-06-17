import { dashboardStats } from "@/Mock_Data/Dashboard/orders";
import { StatsCard } from "./StatsCard";


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