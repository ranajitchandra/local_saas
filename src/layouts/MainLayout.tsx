
import { useState, useEffect } from "react"
import { Outlet } from "react-router"

import Footer from "@/components/Shared/Footer"
import Header from "@/components/Shared/Header"
import { CartProvider } from "@/hooks/useCart"

export function MainLayout() {
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
        <CartProvider>
            <div className="quickmart-theme min-h-screen bg-background text-foreground transition-colors duration-200 flex flex-col">
                <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
                {/* Structural outlet block to support potential child subroutes */}
                <div className="container mx-auto flex-1 bg-background text-foreground px-4 md:px-5">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </CartProvider>
    )
}
