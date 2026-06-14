import type { Offer } from "@/types/offer";

const offers: Offer[] = [
    {
        id: 1,
        title: "Up to 40% Off Fresh Groceries",
        subtitle: "WEEKLY FRESHNESS",
        description:
            "Get the freshest farm-to-table produce delivered within 2 hours of your order.",
        image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e",
        buttonText: "Claim Discount",
        size: "large",
    },
    {
        id: 2,
        title: "Tech Clearance",
        subtitle: "Flash sale on previous gen electronics.",
        description: "",
        image:
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
        buttonText: "Shop Now",
        size: "small",
    },
    {
        id: 3,
        title: "Fashion Forward",
        subtitle: "Exclusive autumn collection now live.",
        description: "",
        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        buttonText: "View Collection",
        size: "small",
    },
];

export default function SpecialOffers() {
    const featuredOffer = offers[0];
    const sideOffers = offers.slice(1);

    return (
        <section className="bg-background py-16">
            <div className="md:px-4">
                <h2 className="mb-10 text-4xl font-bold text-foreground">
                    Special Offers For You
                </h2>

                <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-4xl">
                        <img
                            src={featuredOffer.image}
                            alt={featuredOffer.title}
                            className="h-[500px] w-full object-cover"
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