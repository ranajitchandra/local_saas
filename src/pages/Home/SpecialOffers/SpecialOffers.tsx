import { offers as _offers } from "@/data/landing";
import type { Offer } from "@/types/offer";
const offers = _offers as Offer[];


export default function SpecialOffers() {
    const featuredOffer = offers[0];
    const sideOffers = offers.slice(1);

    return (
        <section className="bg-background">
            <div className="w-full">
                <h2 className="mb-6 lg:mb-10 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    Special Offers For You
                </h2>

                <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-4xl">
                        <img
                            src={featuredOffer.image}
                            alt={featuredOffer.title}
                            className="h-125 w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute bottom-8 left-8 max-w-md text-white">
                            <p className="mb-2 text-sm font-semibold uppercase text-secondary">
                                {featuredOffer.subtitle}
                            </p>

                            <h3 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                {featuredOffer.title}
                            </h3>

                            <p className="mb-6 text-white/80">
                                {featuredOffer.description}
                            </p>

                            <button className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90">
                                {featuredOffer.buttonText}
                            </button>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="flex flex-col gap-6">
                        {sideOffers.map((offer) => (
                            <div
                                key={offer.id}
                                className="relative overflow-hidden rounded-4xl"
                            >
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="h-[238px] w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/50" />

                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
                                    <h3 className="mb-2 text-xl md:text-2xl font-bold">
                                        {offer.title}
                                    </h3>

                                    <p className="mb-4 text-sm text-white/80">
                                        {offer.subtitle}
                                    </p>

                                    <button className="font-medium text-sm text-secondary hover:text-secondary/80">
                                        {offer.buttonText} →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}