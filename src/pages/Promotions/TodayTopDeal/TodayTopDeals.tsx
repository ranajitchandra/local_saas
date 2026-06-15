import { ArrowRight } from "lucide-react";
import { DealCard } from "./DealCard";
import { topDeals } from "@/Mock_Data/data";

export function TodayTopDeals() {
    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center gap-4">
                    <h2 className="shrink-0 text-3xl font-bold text-foreground">
                        Today's Top Deals
                    </h2>

                    <div className="h-px flex-1 bg-border" />
                </div>

                <button className="group ml-6 flex items-center gap-2 font-semibold text-primary">
                    View All

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {topDeals.map((product) => (
                    <DealCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}