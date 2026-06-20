
import { TrendingUp, TrendingDown, Users, ShoppingBag, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { orders } from "@/Mock_Data/Dashboard/orders";
import type { DashboardStat } from "@/types/dashboard/order";



function computeStats(): DashboardStat[] {
    const uniqueCustomers = new Set(orders.map((o) => o.customer));
    const totalCustomers = uniqueCustomers.size;

    const deliveredCount = orders.filter((o) => o.status === "Delivered").length;
    const pendingCount = orders.filter((o) => o.status === "Pending").length;
    const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);

    return [
        {
            id: 1,
            title: "Total Customers",
            value: String(totalCustomers),
            change: "+5 from last month",
            trend: "positive",
            icon: Users,
        },
        {
            id: 2,
            title: "Orders Delivered",
            value: String(deliveredCount),
            change: "+2 from last month",
            trend: "positive",
            icon: ShoppingBag,
        },
        {
            id: 3,
            title: "Pending Orders",
            value: String(pendingCount),
            change: "-1 from last month",
            trend: "positive",
            icon: Clock,
        },
        {
            id: 4,
            title: "Total Revenue",
            value: `$${totalRevenue.toLocaleString()}`,
            change: "+$450 from last month",
            trend: "positive",
            icon: DollarSign,
        },
    ];
}

export default function CustomersStatsCards() {
    const stats = computeStats();

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;
                const trendPositive = item.trend === "positive";

                return (
                    <Card
                        key={item.id}
                        className="border-border bg-card p-4 lg:p-6 shadow-sm transition-all hover:shadow-md"
                    >
                        <div className="flex items-start justify-between">
                            {/* Icon */}
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>

                            {/* Percentage */}
                            <div
                                className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${trendPositive
                                        ? "bg-muted text-primary"
                                        : "bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400"
                                    }`}
                            >
                                {trendPositive ? (
                                    <TrendingUp className="h-3.5 w-3.5" />
                                ) : (
                                    <TrendingDown className="h-3.5 w-3.5" />
                                )}

                                {item.change}
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <p className="text-sm text-muted-foreground">
                                {item.title}
                            </p>

                            <h3 className="mt-1 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                                {item.value}
                            </h3>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}