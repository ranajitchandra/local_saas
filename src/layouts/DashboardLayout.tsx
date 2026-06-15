import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { LayoutDashboard, BarChart3, Users, CreditCard, Settings } from "lucide-react"

// Import custom sub-components
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/DashboardHeader"
import { MobileDrawer } from "@/components/layout/MobileDrawer"
import { SearchDialog } from "@/components/layout/SearchDialog"

export function DashboardLayout() {
    const location = useLocation()

    // Shared States
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [isDarkMode, setIsDarkMode] = useState(false)

    // User Profile Information
    const user = {
        name: "Ranajit Roy",
        email: "ranajit@example.com",
        initial: "RR",
    }

    // Sync Dark Mode state with HTML element
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

    // Keyboard shortcut listener for Search command menu (Cmd+K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsSearchOpen((prev) => !prev)
            }
            if (e.key === "Escape") {
                setIsSearchOpen(false)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Navigation configuration - mapped to nested paths under /dashboard
    const navItems = [
        { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
        { name: "Analytics", path: "/dashboard/analytics", icon: <BarChart3 className="h-4 w-4" />, badge: "Beta" },
        { name: "Customers", path: "/dashboard/customers", icon: <Users className="h-4 w-4" /> },
        { name: "Billing & Plans", path: "/dashboard/billing", icon: <CreditCard className="h-4 w-4" /> },
        { name: "Settings", path: "/dashboard/settings", icon: <Settings className="h-4 w-4" /> },
    ]

    // Mock Notifications
    const notifications = [
        { id: 1, title: "Database usage near 80%", desc: "Upgrade plan or clean up records", time: "10m ago", read: false },
        { id: 2, title: "New subscription payment", desc: "User Alice Cooper upgraded to Enterprise", time: "2h ago", read: true },
        { id: 3, title: "Successful deployment", desc: "V2.4.1 deployed to production", time: "5h ago", read: true },
    ]

    // Get Page Title from Location
    const getPageTitle = () => {
        const currentPath = location.pathname
        const activeItem = navItems.find(item => item.path === currentPath)
        return activeItem ? activeItem.name : "Console"
    }

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-background font-sans transition-colors duration-200">
            {/* Global Search Dialog */}
            <SearchDialog
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                navItems={navItems}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />

            {/* Mobile Sliding Drawer Sidebar */}
            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navItems={navItems}
                user={user}
            />

            {/* Desktop Sidebar Navigation */}
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                navItems={navItems}
                user={user}
            />

            {/* Main Application Canvas Panel */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
                    onOpenSearch={() => setIsSearchOpen(true)}
                    isDarkMode={isDarkMode}
                    onToggleDarkMode={toggleDarkMode}
                    pageTitle={getPageTitle()}
                    user={user}
                    notifications={notifications}
                />

                {/* Inner page content outlet rendering */}
                <main className="flex-1 overflow-y-auto bg-muted/15 relative z-10">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
