import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router"
import { Sparkles, Terminal, CheckCircle2, Sun, Moon } from "lucide-react"

export function AuthLayout() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Sync Dark Mode state on initial mount
    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark") ||
            localStorage.getItem("theme") === "dark"
        setIsDarkMode(isDark)
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleDarkMode = () => {
        const nextDark = !isDarkMode
        setIsDarkMode(nextDark)
        if (nextDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <div className="min-h-screen w-screen flex bg-background text-foreground font-sans transition-colors duration-200">

            {/* LEFT FORM PANEL (Centering Card and Forms) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 relative z-10 bg-background/50 backdrop-blur-sm">

                {/* Top Branding Section */}
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                            <Sparkles className="h-4.5 w-4.5" />
                        </div>
                        <span className="font-extrabold text-base text-foreground tracking-tight">
                            SaaS Engine
                        </span>
                    </Link>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        title="Toggle Light/Dark Theme"
                    >
                        {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
                    </button>
                </div>

                {/* Auth Sub-Route Content */}
                <div className="w-full max-w-md mx-auto my-auto py-12 animate-fade-in">
                    <Outlet />
                </div>

                {/* Footer info links */}
                <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                    <span>&copy; {new Date().getFullYear()} SaaS Engine Inc.</span>
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-foreground hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground hover:underline">Terms of Service</a>
                    </div>
                </div>

            </div>

            {/* RIGHT TESTIMONIAL / SHOWCASE PANEL (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-primary/3 via-primary/[0.07] to-primary/15 dark:from-neutral-900 dark:via-primary/20 dark:to-neutral-950 border-l border-border/30 relative overflow-hidden select-none items-center justify-center p-12">
                {/* Background decorative mesh shapes */}
                <div className="absolute top-1/4 -right-12 h-96 w-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-pulse duration-8000" />
                <div className="absolute bottom-1/4 -left-12 h-96 w-96 rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl animate-pulse duration-12000" />

                {/* Abstract subtle grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Promo Content */}
                <div className="relative max-w-md text-foreground dark:text-white space-y-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 dark:bg-white/10 text-primary dark:text-white backdrop-blur-md border border-primary/15 dark:border-white/10">
                        <Terminal className="h-3.5 w-3.5" />
                        <span>Developer Console v2.4</span>
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                        Deploy telemetry consoles at the speed of thought.
                    </h2>

                    <p className="text-sm text-muted-foreground dark:text-zinc-400">
                        Streamline workspace access controls, aggregate application telemetry logs, configure secure webhook endpoints, and inspect analytics instantly.
                    </p>

                    <div className="space-y-3 pt-4 border-t border-border/30 dark:border-white/10">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-4.5 w-4.5 text-primary dark:text-emerald-400 shrink-0" />
                            <span className="text-xs text-muted-foreground dark:text-zinc-300">Enterprise grade scopes and key encryption</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-4.5 w-4.5 text-primary dark:text-emerald-400 shrink-0" />
                            <span className="text-xs text-muted-foreground dark:text-zinc-300">Stripe and webhook payment providers active</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-4.5 w-4.5 text-primary dark:text-emerald-400 shrink-0" />
                            <span className="text-xs text-muted-foreground dark:text-zinc-300">Operational success dashboard graphs default</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
