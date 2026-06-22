import type { DashboardStat } from "@/types/dashboard/order";


interface StatsCardProps {
    stat: DashboardStat;
}

export function StatsCard({
    stat,
}: StatsCardProps) {
    const Icon = stat.icon;

    return (
        <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">

                <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                    {stat.title}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                </div>
            </div>

            <h3 className="text-xl xl:text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
            </h3>

            <p className={`text-sm font-medium ${stat.trend === "positive" ? "text-primary" : "text-red-500"}`} >
                {stat.change}
            </p>
        </div>
    );
}