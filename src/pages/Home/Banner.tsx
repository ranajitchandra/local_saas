// Landing Banner Component
export default function Banner() {
    return (
        <section className="w-full bg-muted/30 py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden select-none transition-colors duration-200">
            <div className="grid md:grid-cols-12 gap-8 items-center">

                {/* Left Side Info Panel */}
                <div className="md:col-span-7 flex flex-col items-start text-left space-y-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold bg-secondary/20 text-primary tracking-wider uppercase border border-primary/20 transition-colors">
                        Express Delivery Available
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                        Everything You Need <br />
                        <span className="italic text-primary font-extrabold transition-colors">Delivered To Your Door</span>
                    </h1>

                    <p className="text-sm sm:text-base text-foreground/75 max-w-xl leading-relaxed">
                        Shop groceries, medicine, electronics, household items and thousands more products from verified vendors across the city.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="bg-primary hover:bg-primary/95 active:translate-y-px text-primary-foreground text-sm font-bold px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer">
                            Shop Now
                        </button>
                        <button className="bg-transparent hover:bg-primary/5 text-primary border border-primary text-sm font-bold px-6 py-3 rounded-lg transition-all cursor-pointer">
                            Become a Vendor
                        </button>
                    </div>
                </div>

                {/* Right Side Mock Display Image Panel */}
                <div className="md:col-span-5 flex justify-center items-center">
                    <div className="relative overflow-hidden rounded-2xl w-full max-w-105 aspect-4/3 md:aspect-square shadow-xl shadow-primary/5 border border-border/50 bg-[#032723]">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBInFNo3r4GcmWotCnmjeAsFIJAI7bCIkXZt8GqQNlZ75hVhedA-38XKLC5TNYB3hojMl1doJnerv5tn2iiN963xMG3IVSwR-YuWz_3vfM1wPp4CmYJT-cD88u7--OBvNpeZJNm5zQFhZYFIDmz9stP2ctddjkr0SgonbReRywD-0lSnXlFExu3Uu-JFrk-k7SQtwPJQos5QvN69v2dC5t5UAgZ2Za8Ihu3tDvlArsy4XmgZhTfpddk9PbDfWE9mF7PnYbqjcKoQeA"
                            alt="Telemetry Organic Products"
                            className="w-full h-full object-cover select-none pointer-events-none"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}