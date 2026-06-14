

export default function Newsletter() {
    return (
        <div className="w-full">
            <div className="rounded-[2rem] bg-primary  px-5 py-7 md:px-8 md:py-10 text-primary-foreground lg:px-12">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
                            Ready to start shopping?
                        </h2>

                        <p className="max-w-lg text-primary-foreground/80">
                            Join over 50,000+ happy customers getting the best
                            deals every day.
                        </p>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-14 flex-1 rounded-xl border-0 bg-white p-2.5 lg:p-4 text-black outline-none"
                            />

                            <button className="rounded-xl bg-white p-2.5 lg:p4   font-semibold text-primary">
                                Subscribe
                            </button>
                        </div>

                        <p className="mt-3 text-xs text-primary-foreground/70">
                            By subscribing, you agree to our Terms and Privacy
                            Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}