import {
    ChevronDown,
    Search,
    MapPin,
    Heart,
    ShoppingCart,
    User
} from "lucide-react"

export default function Header() {
    return (
        <header className="w-full bg-[#e6fcf5] border-b border-teal-100/50 px-6 py-4 flex items-center justify-between z-30 select-none">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4">

                {/* Left Side: Brand Logo & Links */}
                <div className="flex items-center gap-8 shrink-0">
                    <span className="text-2xl font-extrabold text-[#0a685c] tracking-tight">
                        QuickMart
                    </span>
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-zinc-600">
                        <button className="flex items-center gap-1 hover:text-[#0a685c] transition-colors cursor-pointer">
                            Categories <ChevronDown className="h-4 w-4" />
                        </button>
                        <a href="#" className="hover:text-[#0a685c] transition-colors">Marketplace</a>
                        <a href="#" className="hover:text-[#0a685c] transition-colors">Vendors</a>
                        <a href="#" className="hover:text-[#0a685c] transition-colors">Deals</a>
                    </nav>
                </div>

                {/* Center: Search pill box */}
                <div className="flex-1 max-w-xl mx-4 relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="w-full bg-white/70 border border-teal-200/50 hover:bg-white text-sm px-5 py-2.5 pr-10 rounded-full placeholder-zinc-500/80 text-zinc-800 outline-none focus:border-[#0a685c] focus:ring-1 focus:ring-[#0a685c] transition-all"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500" />
                </div>

                {/* Right Side: Account, Wishlist, Cart & Location */}
                <div className="flex items-center gap-6 shrink-0">
                    {/* Location details */}
                    <div className="hidden sm:flex items-center gap-1.5 text-left text-zinc-700 leading-tight">
                        <MapPin className="h-5 w-5 text-[#0a685c]" />
                        <div className="text-[11px] font-semibold">
                            <div>New</div>
                            <div>York, NY</div>
                        </div>
                    </div>

                    {/* Heart icon */}
                    <button className="text-zinc-700 hover:text-red-500 transition-colors relative cursor-pointer">
                        <Heart className="h-5.5 w-5.5" />
                    </button>

                    {/* Shopping Cart icon with badge */}
                    <button className="text-zinc-700 hover:text-[#0a685c] transition-colors relative cursor-pointer">
                        <ShoppingCart className="h-5.5 w-5.5" />
                        <span className="absolute -top-1 -right-1.5 bg-[#0a685c] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white">
                            3
                        </span>
                    </button>

                    {/* User profile avatar icon */}
                    <button className="text-zinc-700 hover:text-[#0a685c] transition-colors cursor-pointer">
                        <User className="h-5.5 w-5.5" />
                    </button>
                </div>

            </div>
        </header>
    )
}
