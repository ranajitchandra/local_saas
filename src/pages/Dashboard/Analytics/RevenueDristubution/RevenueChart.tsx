import { useState } from "react";

export interface RevenueData {
    month: string;
    value: number;
}

export const revenueData: RevenueData[] = [
    { month: "JAN", value: 45 },
    { month: "FEB", value: 58 },
    { month: "MAR", value: 52 },
    { month: "APR", value: 68 },
    { month: "MAY", value: 84 },
    { month: "JUN", value: 76 },
    { month: "JUL", value: 93 },
    { month: "AUG", value: 88 },
    { month: "SEP", value: 82 },
    { month: "OCT", value: 103 },
];

const filters = ["Weekly", "Monthly", "Yearly"];

export default function RevenueChart() {
    const [active, setActive] = useState("Monthly");

    const maxValue = Math.max(
        ...revenueData.map((item) => item.value)
    );

    return (
        <div className="rounded-3xl border border-border bg-card p-5 md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h2 className="text-xl font-bold text-foreground">
                        Revenue Over Time
                    </h2>

                    <p className="text-muted-foreground">
                        Global marketplace performance trends
                    </p>
                </div>

                <div className="flex w-full rounded-xl bg-muted p-1 lg:w-fit">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition lg:flex-none ${active === filter
                                ? "bg-card text-primary shadow-sm"
                                : "text-muted-foreground"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <div className="flex h-90 items-end gap-2 md:gap-3">
                    {revenueData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-1 flex-col items-center gap-3"
                        >
                            <div
                                style={{
                                    height: `${(item.value / maxValue) * 280
                                        }px`,
                                }}
                                className={`w-full rounded-t-md transition-all duration-300 ${index === revenueData.length - 1
                                    ? "bg-primary/40 border-t-4 border-primary"
                                    : "bg-primary/15"
                                    }`}
                            />

                            <span className="text-xs font-semibold text-muted-foreground">
                                {item.month}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}