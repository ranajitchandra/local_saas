
import Footer from "@/components/Shared/Footer"
import Header from "@/components/Shared/Header"
import { CartProvider } from "@/hooks/useCart"
import { useEffect } from "react"
import { Outlet } from "react-router"



export function MainLayout() {
    // Sync Dark Mode state on initial mount
    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark") ||
            localStorage.getItem("theme") === "dark"
        if (isDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [])

    return (
        <CartProvider>
            <div className="quickmart-theme min-h-screen w-screen bg-background text-foreground transition-colors duration-200 flex flex-col">
                <Header />
                {/* Structural outlet block to support potential child subroutes */}
                <div className="container mx-auto flex-1 bg-background text-foreground px-6">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </CartProvider>
    )
}
