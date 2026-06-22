import { TrendingUp, TrendingDown, Store, ShoppingBag, DollarSign, type LucideIcon } from "lucide-react";
export interface StatCard {
    id: number;
    title: string;
    value: string;
    subtitle: string;
    change: string;
    positive: boolean;
    icon: LucideIcon;
}

const stats: StatCard[] = [
    {
        id: 1,
        title: "Total Revenue",
        value: "$1.2M",
        subtitle: "vs last month",
        change: "+12%",
        positive: true,
        icon: DollarSign,
    },
    {
        id: 2,
        title: "Active Vendors",
        value: "450",
        subtitle: "Active sellers",
        change: "+5%",
        positive: true,
        icon: Store,
    },
    {
        id: 3,
        title: "Orders Today",
        value: "1,240",
        subtitle: "Real-time volume",
        change: "+8%",
        positive: true,
        icon: ShoppingBag,
    },
    {
        id: 4,
        title: "Avg. Order Value",
        value: "$85",
        subtitle: "Basket metric",
        change: "-2%",
        positive: false,
        icon: DollarSign,
    },
];



export default function AnalyticsStats() {
    return (
        <section className="quickmart-theme">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {item.title}
                                        </p>

                                        <span
                                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.positive
                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                                                : "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
                                                }`}
                                        >
                                            {item.positive ? (
                                                <TrendingUp className="h-3 w-3" />
                                            ) : (
                                                <TrendingDown className="h-3 w-3" />
                                            )}

                                            {item.change}
                                        </span>
                                    </div>

                                    <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                                        {item.value}
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {item.subtitle}
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}