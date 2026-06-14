
import type { FeatureItem } from "@/types/features";
import { Zap, ShieldCheck, Lock, Headphones } from "lucide-react";

const features: FeatureItem[] = [
    {
        id: 1,
        title: "Fast Delivery",
        description: "Get your orders within 60 minutes for local stores.",
        icon: Zap,
    },
    {
        id: 2,
        title: "Verified Vendors",
        description: "We only partner with trusted and certified businesses.",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Secure Payment",
        description: "Multiple encrypted payment gateways available.",
        icon: Lock,
    },
    {
        id: 4,
        title: "24/7 Support",
        description: "Our dedicated team is always here to help you.",
        icon: Headphones,
    },
];

export default function Features() {
    return (
        <section className="w-full">
            <div className="md:px-4">
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