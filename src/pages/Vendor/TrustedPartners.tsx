
interface PartnerBadge {
    id: string;
    label: string;
}

export default function TrustedPartners() {
    const badges: PartnerBadge[] = [
        { id: "active-vendors", label: "Over 450+ Active Vendors" },
        { id: "verified-quality", label: "Verified Quality" },
    ];

    return (
        <section className="quickmart-theme border rounded-2xl relative overflow-hidden bg-background py-20 px-6 sm:px-8 md:px-16 transition-colors duration-300">
            {/* 
        This absolute div recreates the exact soft, glowing mint-green 
        gradient atmosphere visible in image_09ad2a.jpg 
      */}
            <div className="absolute inset-0 bg-linear-to-br from-[#cffaf2] via-background to-background opacity-70 dark:from-[#012a26] dark:via-background dark:to-background pointer-events-none" />

            <div className="relative max-w-7xl mx-auto flex flex-col gap-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Our Trusted Partners
                </h2>

                {/* Description Paragraph */}
                <p className="max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                    Discover the highest-rated vendors in the QuickMart ecosystem. From local
                    artisans to global retailers, find everything you need in one place.
                </p>

                {/* Badge / Tag Row */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                    {badges.map((badge) => (
                        <span
                            key={badge.id}
                            className="inline-flex items-center justify-center bg-[#caebd9]/40 dark:bg-muted/50 text-[#0f6e64] dark:text-muted-foreground px-4 py-2 text-sm font-semibold rounded-full border border-[#18b3a4]/20 backdrop-blur-xs transition-all"
                        >
                            {badge.label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}