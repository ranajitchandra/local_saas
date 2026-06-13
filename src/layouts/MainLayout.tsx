
import Header from "@/components/Shared/Header"
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
        <div className="min-h-screen w-screen bg-white text-zinc-900 transition-colors duration-200 flex flex-col">
            <Header />
            {/* Structural outlet block to support potential child subroutes */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}
