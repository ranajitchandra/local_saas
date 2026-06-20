
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
        <div className="rounded-3xl border border-border bg-card p-5 md:p-6">
            <h2 className="text-xl font-bold text-foreground">
                Regional Distribution
            </h2>

            <div className="mt-10 space-y-8">
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

            <div className="mt-10 overflow-hidden rounded-2xl bg-muted">
                <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1200&auto=format&fit=crop"
                    alt="world map"
                    className="h-40 w-full object-cover"
                />
            </div>
        </div>
    );
}