import { features as _features } from "@/data/landing";
import type { FeatureItem } from "@/types/features";
const features = _features as FeatureItem[];


export default function Features() {
    return (
        <section className="w-full">
            <div className="w-full">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.id}
                                className="rounded-3xl border bg-card p-4 md:p-5 lg:p-6"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>

                                <h3 className="mb-2 text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}