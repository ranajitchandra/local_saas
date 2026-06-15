export function PromotionalNewsLetter() {
    return (
        <section className="bg-primary rounded-2xl py-24 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                    Never miss a price drop again.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
                    Join 50,000+ smart shoppers and get early access to our most
                    exclusive promotions and liquidation events.
                </p>

                <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-14 flex-1 rounded-lg border-0 bg-white px-5 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-secondary"
                    />

                    <button
                        type="submit"
                        className="h-14 rounded-lg bg-[#083B36] px-8 font-semibold text-white transition-colors hover:bg-[#062f2b]"
                    >
                        Subscribe Now
                    </button>
                </form>

                <p className="mt-6 text-sm text-primary-foreground/50">
                    We value your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
