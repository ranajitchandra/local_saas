// Landing Banner Component
export default function Banner() {
    return (
        <section className="w-full bg-[#e6fcf5] py-12 md:py-16 px-6 relative overflow-hidden select-none">
            <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">

                {/* Left Side Info Panel */}
                <div className="md:col-span-7 flex flex-col items-start text-left space-y-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold bg-[#c3fae8] text-[#0c8569] tracking-wider uppercase border border-[#a3e9d2]/40">
                        Express Delivery Available
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.1]">
                        Everything You Need <br />
                        <span className="italic text-[#0a685c] font-extrabold">Delivered To Your Door</span>
                    </h1>

                    <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
                        Shop groceries, medicine, electronics, household items and thousands more products from verified vendors across the city.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="bg-[#0a685c] hover:bg-[#08534a] active:translate-y-px text-white text-sm font-bold px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer">
                            Shop Now
                        </button>
                        <button className="bg-transparent hover:bg-[#0a685c]/5 text-[#0a685c] border border-[#0a685c] text-sm font-bold px-6 py-3 rounded-lg transition-all cursor-pointer">
                            Become a Vendor
                        </button>
                    </div>
                </div>

                {/* Right Side Mock Display Image Panel */}
                <div className="md:col-span-5 flex justify-center items-center">
                    <div className="relative overflow-hidden rounded-2xl w-full max-w-[420px] aspect-[4/3] md:aspect-square shadow-xl shadow-teal-950/10 border border-teal-100 bg-[#0d2a25]">
                        <img
                            src="/src/assets/hero.png"
                            alt="Telemetry Organic Products"
                            className="w-full h-full object-cover select-none pointer-events-none"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}