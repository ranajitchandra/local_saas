
export interface RegionData {
    id: number;
    name: string;
    percentage: number;
}

export const regionData: RegionData[] = [
    {
        id: 1,
        name: "North America",
        percentage: 42,
    },
    {
        id: 2,
        name: "Europe",
        percentage: 28,
    },
    {
        id: 3,
        name: "Asia Pacific",
        percentage: 18,
    },
    {
        id: 4,
        name: "Others",
        percentage: 12,
    },
];

export default function RegionalDistribution() {
    return (
        <div className="rounded-3xl border border-border bg-card p-5 md:p-6 space-y-5">
            <h2 className="text-xl font-bold text-foreground">
                Regional Distribution
            </h2>

            <div className="space-y-4">
                {regionData.map((region) => (
                    <div key={region.id}>
                        <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium text-foreground">
                                {region.name}
                            </span>

                            <span className="font-bold text-primary">
                                {region.percentage}%
                            </span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-primary/10">
                            <div
                                style={{
                                    width: `${region.percentage}%`,
                                }}
                                className="h-full rounded-full bg-primary"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Hm662098o1_P9m27b3u3DzkWC5r0puO5TiAn1LR3iEafXKFZE3oSUc1QQjTjTO1W89ZuTQS0K9LtKNZicZrLw_CuPViSpPfdBPPFE2ZCcY2MtFmFjp-CxGUC0ico5DliEPy1ZghC_qD-bjKSpY9HccegDhOjfhndOpG-tOzXnfzvKA8x7ZTqcutB1b3q6V7TLXpUlMSG0OSb6Akx6XwsIBKD-P3Z3CLUiBlgSxb-g5HfZPtgo_VFi1n4gZsH001AICK4HiLrC5g"
                    alt="world map"
                    className="h-50 w-full object-cover"
                />
            </div>
        </div>
    );
}