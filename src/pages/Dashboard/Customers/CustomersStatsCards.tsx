
import {
    Users,
    UserCheck,
    UserPlus,
    UserX,
    TrendingUp,
    TrendingDown,
} from "lucide-react";

import { Card } from "@/components/ui/card";

const stats = [
    {
        title: "Total Customers",
        value: "12.4k",
        change: "+4.2%",
        positive: true,
        icon: Users,
    },
    {
        title: "Active Users",
        value: "8.9k",
        change: "+2.1%",
        positive: true,
        icon: UserCheck,
    },
    {
        title: "New Signups",
        value: "842",
        change: "+12%",
        positive: true,
        icon: UserPlus,
    },
    {
        title: "Churn Rate",
        value: "2.4%",
        change: "-0.8%",
        positive: false,
        icon: UserX,
    },
];

export default function CustomersStatsCards() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <Card
                        key={item.title}
                        className="border-border bg-card p-4 lg:p-6 shadow-sm transition-all hover:shadow-md"
                    >
                        <div className="flex items-start justify-between">
                            {/* Icon */}
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                                <Icon className="h-5 w-5 text-primary" />
                            </div>

                            {/* Percentage */}
                            <div
                                className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${item.positive
                                        ? "bg-muted text-primary"
                                        : "bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400"
                                    }`}
                            >
                                {item.positive ? (
                                    <TrendingUp className="h-3.5 w-3.5" />
                                ) : (
                                    <TrendingDown className="h-3.5 w-3.5" />
                                )}

                                {item.change}
                            </div>
                        </div>

                        <div className="w-full">
                            <p className="text-sm text-muted-foreground">
                                {item.title}
                            </p>

                            <h3 className="mt-1 text-4xl font-bold tracking-tight text-foreground">
                                {item.value}
                            </h3>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}