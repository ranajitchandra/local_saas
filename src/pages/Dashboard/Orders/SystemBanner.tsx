
export default function SystemBanner() {
    return (
        <div className="quickmart-theme w-full p-1 bg-background">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#CCF4EE] border border-transparent shadow-sm">

                {/* Left Side: Icon & Content */}
                <div className="flex items-start gap-4 flex-1">
                    {/* Decorative Icon Wrapper */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00665C] shrink-0 text-white">
                        {/* Custom line-and-dots node icon path matching the image */}
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
                            <path d="M9 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
                            <path d="M15 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
                            <path d="M21 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
                            <path d="M3 11h3.5l2.5-4 6 11 2.5-8H21" />
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold tracking-tight text-[#00665C]">
                            System Recommendation
                        </h3>
                        <p className="text-sm leading-relaxed text-[#2C4E4B]">
                            We've noticed a surge in "Shipped" status delays for vendors in the Northeast region.
                            Consider adjusting delivery SLAs or notifying customers of potential 2-day offsets.
                        </p>
                    </div>
                </div>

                {/* Right Side: Action Button */}
                <div className="shrink-0 w-full sm:w-auto">
                    <button
                        type="button"
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#00665C] hover:bg-[#00524A] text-white text-sm font-semibold rounded-xl transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#18B3A4] focus:ring-offset-2"
                    >
                        Review Logistics
                    </button>
                </div>

            </div>
        </div>
    );
}