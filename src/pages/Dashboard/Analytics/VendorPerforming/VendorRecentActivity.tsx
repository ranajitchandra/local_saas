import { History, type LucideIcon } from "lucide-react";
import { ShoppingCart, UserPlus, Wallet, AlertCircle, TrendingUp } from "lucide-react";

export interface Activity {
    id: number;
    title: string;
    description: string;
    time: string;
    icon: LucideIcon;
    variant: "success" | "warning" | "danger" | "info";
}

export const activities: Activity[] = [
    {
        id: 1,
        title: "New order placed",
        description: "Order #QM-82190 • $210.50",
        time: "2 MINUTES AGO",
        icon: ShoppingCart,
        variant: "success",
    },
    {
        id: 2,
        title: "New vendor registered",
        description: "Velvet Bloom Boutique • Awaiting approval",
        time: "15 MINUTES AGO",
        icon: UserPlus,
        variant: "success",
    },
    {
        id: 3,
        title: "Vendor payout processed",
        description: "Payout to Tech Knights • $4,500",
        time: "1 HOUR AGO",
        icon: Wallet,
        variant: "info",
    },
    {
        id: 4,
        title: "Dispute initiated",
        description: "Customer ID #USR-442 • Refund requested",
        time: "3 HOURS AGO",
        icon: AlertCircle,
        variant: "danger",
    },
    {
        id: 5,
        title: "Daily Revenue Peak",
        description: "Reached $45k daily goal",
        time: "4 HOURS AGO",
        icon: TrendingUp,
        variant: "warning",
    },
];

const variants = {
    success: "bg-primary/10 text-primary",
    warning: "bg-primary text-primary-foreground",
    danger: "bg-red-100 text-red-600",
    info: "bg-muted text-primary",
};

export default function VendorRecentActivity() {
    return (
        <div className="rounded-3xl border border-border bg-card p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                    Recent Activity
                </h2>

                <History className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="space-y-5">
                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.id}
                            className="flex gap-4"
                        >
                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${variants[activity.variant]
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    {activity.title}
                                </h4>

                                <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                </p>

                                <span className="mt-1 block text-xs font-semibold text-muted-foreground">
                                    {activity.time}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 rounded-2xl border-l-4 border-primary bg-muted p-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <History className="h-5 w-5" />
                    </div>

                    <div>
                        <h4 className="font-semibold">
                            Daily Revenue Peak
                        </h4>

                        <p className="text-sm text-muted-foreground">
                            Reached $45k daily goal
                        </p>

                        <span className="text-xs font-bold text-primary">
                            4 HOURS AGO
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}