import {
    Search,
    MapPin,
    Heart,
    User,
    Menu,
    Home,
    Tag,
    Handshake,
    Sun,
    Moon,
    ArrowBigRightDash,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

import CartDropdown from "../AddToCart/MainCartPopover";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    {
        label: "Home",
        path: "/",
        icon: Home,
    },
    {
        label: "Promotions",
        path: "/promotions",
        icon: Tag,
    },
    {
        label: "Vendor",
        path: "/vendor",
        icon: Handshake,
    },
];

interface HeaderProps {
    isDarkMode?: boolean;
    onToggleDarkMode?: () => void;
}

export default function Header({ isDarkMode, onToggleDarkMode }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-background/90 backdrop-blur-md border-b border-border fixed top-0 z-40">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 md:px-5 py-4">

                {/* Left Side */}
                <div className="flex items-center gap-2 lg:gap-8">

                    {/* Mobile Sidebar */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <button className="lg:hidden text-foreground hover:text-primary transition-colors">
                                <Menu className="h-6 w-6" />
                            </button>
                        </SheetTrigger>

                        <SheetContent
                            side="left"
                            className="quickmart-theme w-60! bg-background border-border text-foreground p-0"
                        >
                            {/* Sidebar Header */}
                            <div className="bg-primary px-6 py-5">
                                <h2 className="text-xl font-bold text-primary-foreground">
                                    QuickMart
                                </h2>

                                <p className="mt-1 text-xs text-primary-foreground/80">
                                    Smart shopping made easy
                                </p>
                            </div>

                            {/* Sidebar Links */}
                            <div className="p-4">
                                <nav className="space-y-2">
                                    {navLinks.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <NavLink
                                                key={item.path}
                                                to={item.path}
                                                end={item.path === "/"}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                                        ? "bg-primary text-primary-foreground"
                                                        : "text-foreground hover:bg-muted"
                                                    }`
                                                }
                                            >
                                                <Icon className="h-5 w-5" />
                                                {item.label}
                                            </NavLink>
                                        );
                                    })}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-2xl font-extrabold text-primary tracking-tight"
                    >
                        QuickMart
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `transition-colors hover:text-primary ${isActive
                                        ? "text-primary"
                                        : "text-foreground/80"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Search */}
                <div className="hidden md:block flex-1 max-w-xl mx-4 relative">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className=" w-full bg-card border border-border rounded-full px-5 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />

                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4 md:gap-6 shrink-0">
                    {/* Wishlist */}
                    <button className="hidden ml:block text-foreground hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                    </button>

                    {/* Cart */}
                    <div className="text-foreground hover:text-primary transition-colors duration-300 ">
                        <CartDropdown />
                    </div>

                    {/* Theme Toggle */}
                    {onToggleDarkMode && (
                        <button
                            onClick={onToggleDarkMode}
                            className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                            title="Toggle Light/Dark Theme"
                        >
                            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                    )}

                    {/* User */}
                    <Link to="/profile">
                        <button className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                            <User className="h-5 w-5" />
                        </button>
                    </Link>
                    <Link to="/auth" className="hover:scale-105 transition-all duration-300">
                        <button className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-xl cursor-pointer">
                            Login
                        </button>
                    </Link>
                    <Link to="/dashboard" className="hover:scale-105 transition-all duration-300">
                        <span className="hidden md:block text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-xl">
                            cPanel
                        </span>
                        <span className="md:hidden text-primary hover:text-primary transition-colors">
                            <ArrowBigRightDash />
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
