import {
    ChevronDown,
    Search,
    MapPin,
    Heart,
    
    User
} from "lucide-react"
import CartDropdown from "../AddToCart/MainCartPopover"

export default function Header() {
    return (
        <header className="w-full bg-muted/90 backdrop-blur-md border-b border-border/80 px-6 py-4 flex items-center justify-between sticky top-0 z-40 select-none transition-colors duration-200">
            <div className="container w-full mx-auto flex items-center justify-between gap-4">

                {/* Left Side: Brand Logo & Links */}
                <div className="flex items-center gap-8 shrink-0">
                    <span className="text-2xl font-extrabold text-primary tracking-tight transition-colors">
                        QuickMart
                    </span>
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-foreground/80">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                            Categories <ChevronDown className="h-4 w-4" />
                        </button>
                        <a href="#" className="hover:text-primary transition-colors">Marketplace</a>
                        <a href="#" className="hover:text-primary transition-colors">Vendors</a>
                        <a href="#" className="hover:text-primary transition-colors">Deals</a>
                    </nav>
                </div>

                {/* Center: Search pill box */}
                <div className="flex-1 max-w-xl mx-4 relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="w-full bg-card border border-border/70 hover:bg-card/80 text-sm px-5 py-2.5 pr-10 rounded-full placeholder-foreground/50 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-foreground/60" />
                </div>

                {/* Right Side: Account, Wishlist, Cart & Location */}
                <div className="flex items-center gap-6 shrink-0">
                    {/* Location details */}
                    <div className="hidden sm:flex items-center gap-1.5 text-left text-foreground/80 leading-tight">
                        <MapPin className="h-5 w-5 text-primary transition-colors" />
                        <div className="text-[11px] font-semibold">
                            <div>New York</div>
                        </div>
                    </div>

                    {/* Heart icon */}
                    <button className="text-foreground hover:text-red-500 transition-colors relative cursor-pointer">
                        <Heart className="h-5.5 w-5.5" />
                    </button>

                    {/* Shopping Cart icon with badge */}
                    <button className="text-foreground hover:text-primary transition-colors relative cursor-pointer">
                        <CartDropdown />
                        <span className="absolute -top-1 -right-1.5 bg-primary text-primary-foreground text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-background transition-colors">
                            3
                        </span>
                    </button>

                    {/* User profile avatar icon */}
                    <button className="text-foreground hover:text-primary transition-colors cursor-pointer">
                        <User className="h-5.5 w-5.5" />
                    </button>
                </div>

            </div>
        </header>
    )
}
