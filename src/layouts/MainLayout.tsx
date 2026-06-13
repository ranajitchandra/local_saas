import React, { useState, useEffect } from "react"
import { Outlet, NavLink, useLocation } from "react-router"
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Bell, 
  User, 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut, 
  Moon, 
  Sun, 
  ChevronDown, 
  Sparkles,
  Command,
  HelpCircle,
  ShieldAlert,
  ArrowRight
} from "lucide-react"

export function MainLayout() {
  const location = useLocation()
  
  // Layout States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)

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
        setIsProfileOpen(false)
        setIsNotificationsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Navigation configuration
  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard className="h-4 w-4" /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart3 className="h-4 w-4" />, badge: "Beta" },
    { name: "Customers", path: "/customers", icon: <Users className="h-4 w-4" /> },
    { name: "Billing & Plans", path: "/billing", icon: <CreditCard className="h-4 w-4" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="h-4 w-4" /> },
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

  // Close overlays when clicking outside
  const closeAllDropdowns = () => {
    setIsProfileOpen(false)
    setIsNotificationsOpen(false)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background font-sans transition-colors duration-200">
      
      {/* ----------------- SEARCH DIALOG OVERLAY (Cmd+K) ----------------- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsSearchOpen(false)}
          />
          {/* Box */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center border-b border-border/50 px-4 py-3.5">
              <Search className="mr-3 h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Type a command or search console..."
                className="w-full bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none border-none focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <span className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground border border-border/40">
                ESC
              </span>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              <div className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Quick Navigation
              </div>
              <div className="space-y-0.5 mt-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                    onClick={() => {
                      // Note: usually redirect here. Since they are placeholders, we toggle off
                      setIsSearchOpen(false)
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-muted-foreground">{item.icon}</div>
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                  </button>
                ))}
              </div>

              <div className="border-t border-border/30 my-2 pt-2" />
              
              <div className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Settings & Commands
              </div>
              <div className="space-y-0.5 mt-1">
                <button 
                  onClick={() => { toggleDarkMode(); setIsSearchOpen(false); }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                >
                  {isDarkMode ? <Sun className="h-4 w-4 text-muted-foreground" /> : <Moon className="h-4 w-4 text-muted-foreground" />}
                  <span>Toggle light/dark mode</span>
                </button>
                <button 
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <span>Search Documentation</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-muted/30 border-t border-border/30 px-4 py-2 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Command className="h-3 w-3" />
                <span>Commands</span>
              </div>
              <span>Tip: press ⌘K to open anytime</span>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MOBILE DRAWER NAVIGATION ----------------- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Sliding Menu drawer */}
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border/50 p-5 shadow-2xl flex flex-col justify-between animate-in slide-in-from-left duration-300">
            <div>
              {/* Drawer Top Branding */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/20">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="font-extrabold text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    SaaS Engine
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-1.5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`
                    }
                  >
                    {item.icon}
                    <span className="flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="rounded bg-primary-foreground/20 px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Profile Drawer Footer */}
            <div className="border-t border-border/30 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                  RR
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Ranajit Roy</div>
                  <div className="text-[10px] text-muted-foreground">Owner</div>
                </div>
              </div>
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
                <LogOut className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- DESKTOP SIDEBAR ----------------- */}
      <aside 
        className={`hidden lg:flex flex-col border-r border-border/50 bg-card/65 backdrop-blur-md transition-all duration-300 shrink-0 select-none relative ${
          isSidebarCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Toggle Expand/Collapse Button */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute top-6 -right-3 h-6 w-6 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm hover:shadow z-10 hover:scale-105 transition-all"
        >
          {isSidebarCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
        </button>

        {/* Sidebar Logo Branding */}
        <div className="h-16 flex items-center px-5 gap-3 border-b border-border/30">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/25 shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          {!isSidebarCollapsed && (
            <span className="font-extrabold text-base bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent tracking-tight animate-fade-in">
              SaaS Engine
            </span>
          )}
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-all relative group/nav ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10" 
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`
              }
            >
              <div className="shrink-0">{item.icon}</div>
              {!isSidebarCollapsed && (
                <span className="text-sm font-medium flex-1 animate-fade-in">{item.name}</span>
              )}
              
              {/* Beta Badge */}
              {!isSidebarCollapsed && item.badge && (
                <span className="rounded bg-secondary/80 px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground border border-border/40">
                  {item.badge}
                </span>
              )}

              {/* Tooltip on Collapsed */}
              {isSidebarCollapsed && (
                <div className="absolute left-16 hidden group-hover/nav:block bg-popover text-popover-foreground border border-border text-[11px] font-medium py-1 px-2.5 rounded-md shadow-md whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Sidebar Footer */}
        <div className="p-3 border-t border-border/30 bg-muted/10">
          <div className={`flex items-center gap-3 rounded-lg ${isSidebarCollapsed ? "justify-center" : "px-2 py-1.5"}`}>
            <div className="h-9 w-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
              RR
            </div>
            
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0 animate-fade-in">
                <div className="text-xs font-bold text-foreground truncate">Ranajit Roy</div>
                <div className="text-[10px] text-muted-foreground truncate">Owner Account</div>
              </div>
            )}
            
            {!isSidebarCollapsed && (
              <button className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all">
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* ----------------- MAIN CANVAS VIEW ----------------- */}
      <div 
        className="flex-1 flex flex-col overflow-hidden"
        onClick={closeAllDropdowns}
      >
        
        {/* TOP NAVBAR HEADER */}
        <header className="h-16 border-b border-border/50 bg-card/65 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-30 select-none">
          
          {/* Header Left (Mobile menu trigger + Breadcrumb) */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(true)
              }}
              className="lg:hidden rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Menu className="h-5.5 w-5.5" />
            </button>
            
            <div className="hidden md:flex items-center gap-1.5 text-sm">
              <span className="text-muted-foreground font-medium">Console</span>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-foreground font-bold">{getPageTitle()}</span>
            </div>
          </div>

          {/* Header Right (Search + DarkMode + Alerts + Avatar) */}
          <div className="flex items-center gap-3">
            
            {/* Command Search Bar Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsSearchOpen(true)
              }}
              className="relative hidden sm:flex items-center w-52 md:w-60 gap-2 rounded-lg border border-border/50 bg-secondary/30 px-3 py-1.5 text-left text-xs text-muted-foreground hover:border-primary/20 hover:bg-secondary/50 transition-all duration-200 cursor-pointer"
            >
              <Search className="h-3.5 w-3.5 text-muted-foreground/80" />
              <span className="flex-1">Search console...</span>
              <kbd className="pointer-events-none inline-flex h-4.5 select-none items-center gap-0.5 rounded border border-border/40 bg-secondary/80 px-1.5 text-[9px] font-medium text-muted-foreground">
                <Command className="h-2.5 w-2.5" />K
              </kbd>
            </button>

            {/* Mobile Search Icon Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsSearchOpen(true)
              }}
              className="sm:hidden rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Light/Dark Toggle */}
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              title="Toggle Light/Dark Theme"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Notifications Popover */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsNotificationsOpen(!isNotificationsOpen)
                  setIsProfileOpen(false)
                }}
                className={`rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-all relative ${
                  isNotificationsOpen ? "bg-muted text-foreground" : ""
                }`}
              >
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </button>
              
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-xl border border-border bg-card shadow-xl animate-in fade-in duration-200 z-50">
                  <div className="flex items-center justify-between border-b border-border/50 px-4 py-3 bg-muted/20">
                    <span className="text-xs font-bold text-foreground">Notifications</span>
                    <button className="text-[10px] font-medium text-primary hover:underline">Mark all read</button>
                  </div>
                  <div className="divide-y divide-border/30 max-h-[280px] overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-3 hover:bg-muted/40 transition-colors">
                        <div className="flex justify-between items-start gap-1">
                          <span className={`text-xs font-semibold ${n.read ? "text-foreground" : "text-primary"}`}>
                            {n.title}
                          </span>
                          <span className="text-[9px] text-muted-foreground whitespace-nowrap">{n.time}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border/30 px-4 py-2 text-center bg-muted/10">
                    <button className="text-[10px] font-bold text-muted-foreground hover:text-foreground">View all notifications</button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsProfileOpen(!isProfileOpen)
                  setIsNotificationsOpen(false)
                }}
                className={`flex items-center gap-1.5 rounded-lg pl-1.5 pr-2.5 py-1 text-sm font-semibold hover:bg-muted transition-all select-none border border-transparent ${
                  isProfileOpen ? "bg-muted border-border/50" : ""
                }`}
              >
                <div className="h-7 w-7 rounded-full bg-primary/15 text-primary flex items-center justify-center font-extrabold text-xs border border-primary/20">
                  RR
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-xl animate-in fade-in duration-200 z-50">
                  <div className="p-3.5 border-b border-border/50 bg-muted/20">
                    <div className="text-xs font-bold text-foreground">Ranajit Roy</div>
                    <div className="text-[10px] text-muted-foreground truncate">ranajit@example.com</div>
                  </div>
                  <div className="p-1 space-y-0.5">
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-all text-left">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Account Settings</span>
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-all text-left">
                      <Settings className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Organization Settings</span>
                    </button>
                  </div>
                  <div className="border-t border-border/30 p-1 bg-muted/5">
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-destructive hover:bg-destructive/10 transition-all text-left font-semibold">
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* MAIN VIEWPORT SCROLLABLE BODY */}
        <main className="flex-1 overflow-y-auto bg-muted/15 relative z-10">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
