import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function FlashSaleBanner() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 4,
        minutes: 32,
        seconds: 46,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    return { hours, minutes, seconds: seconds - 1 };
                }

                if (minutes > 0) {
                    return {
                        hours,
                        minutes: minutes - 1,
                        seconds: 59,
                    };
                }

                if (hours > 0) {
                    return {
                        hours: hours - 1,
                        minutes: 59,
                        seconds: 59,
                    };
                }

                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value: number) =>
        value.toString().padStart(2, "0");

    return (
        <section className="quickmart-theme bg-background">
            <div className="py-16">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-[#072f2c] via-[#0c3f39] to-[#114941] px-8 py-12 lg:px-14 lg:py-16">
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />

                    <div className="relative grid items-center gap-12 lg:grid-cols-2">
                        {/* Left */}
                        <div>
                            {/* Badge */}
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2">
                                <Zap className="h-3 w-3 fill-current text-primary-foreground" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                                    Flash Sale Ending Soon
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="max-w-xl text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl">
                                Unbeatable{" "}
                                <span className="text-[#42F5E5]">
                                    Tech Savings
                                </span>
                                <br />
                                Up to 60% Off.
                            </h1>

                            {/* Description */}
                            <p className="mt-8 max-w-md text-lg leading-8 text-white/80">
                                Our most aggressive discounts of the season are
                                here. Premium hardware, professional gear, and
                                smart home essentials at liquidation prices.
                            </p>

                            {/* Timer */}
                            <div className="mt-10 flex items-center gap-8">
                                <div>
                                    <h3 className="text-5xl font-extrabold text-white">
                                        {formatTime(timeLeft.hours)}
                                    </h3>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                                        Hours
                                    </p>
                                </div>

                                <span className="text-5xl text-white/30">
                                    :
                                </span>

                                <div>
                                    <h3 className="text-5xl font-extrabold text-white">
                                        {formatTime(timeLeft.minutes)}
                                    </h3>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                                        Minutes
                                    </p>
                                </div>

                                <span className="text-5xl text-white/30">
                                    :
                                </span>

                                <div>
                                    <h3 className="text-5xl font-extrabold text-white">
                                        {formatTime(timeLeft.seconds)}
                                    </h3>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                                        Seconds
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <button className="rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:opacity-90">
                                    Shop Flash Sale
                                </button>

                                <button className="rounded-xl border border-white/40 bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                                    View All Offers
                                </button>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="overflow-hidden rounded-3xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                                <img
                                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
                                    alt="Laptop"
                                    className="h-[340px] w-full max-w-[420px] object-cover lg:h-[420px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}