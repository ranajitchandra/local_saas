import React, { useState } from "react"
import { Menu, Search, Command, Sun, Moon, Bell, ChevronDown, User, Settings, LogOut } from "lucide-react"

interface Notification {
  id: number
  title: string
  desc: string
  time: string
  read: boolean
}

interface HeaderProps {
  onOpenMobileMenu: () => void
  onOpenSearch: () => void
  isDarkMode: boolean
  onToggleDarkMode: () => void
  pageTitle: string
  user: {
    name: string
    email: string
    initial: string
  }
  notifications: Notification[]
}

export function Header({
  onOpenMobileMenu,
  onOpenSearch,
  isDarkMode,
  onToggleDarkMode,
  pageTitle,
  user,
  notifications
}: HeaderProps) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const closeDropdowns = () => {
    setIsNotificationsOpen(false)
    setIsProfileOpen(false)
  }

  return (
    <header className="h-16 border-b border-border/50 bg-card/65 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-30 select-none relative">
      {/* Header Left (Mobile menu trigger + Breadcrumb) */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          <Menu className="h-5.5 w-5.5" />
        </button>

        <div className="hidden md:flex items-center gap-1.5 text-sm">
          <span className="text-muted-foreground font-medium">Console</span>
          <span className="text-muted-foreground/50">/</span>
          <span className="text-foreground font-bold">{pageTitle}</span>
        </div>
      </div>

      {/* Header Right (Search + DarkMode + Alerts + Avatar) */}
      <div className="flex items-center gap-3">
        
        {/* Command Search Bar Trigger */}
        <button
          onClick={onOpenSearch}
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
          onClick={onOpenSearch}
          className="sm:hidden rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Light/Dark Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          title="Toggle Light/Dark Theme"
        >
          {isDarkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen)
              setIsProfileOpen(false)
            }}
            className={`rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-all relative cursor-pointer ${
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
            <>
              {/* Overlay cover to close when clicking outside */}
              <div className="fixed inset-0 z-40" onClick={closeDropdowns} />
              
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
            </>
          )}
        </div>

        {/* Profile Menu Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen)
              setIsNotificationsOpen(false)
            }}
            className={`flex items-center gap-1.5 rounded-lg pl-1.5 pr-2.5 py-1 text-sm font-semibold hover:bg-muted transition-all select-none border border-transparent cursor-pointer ${
              isProfileOpen ? "bg-muted border-border/50" : ""
            }`}
          >
            <div className="h-7 w-7 rounded-full bg-primary/15 text-primary flex items-center justify-center font-extrabold text-xs border border-primary/20">
              {user.initial}
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>

          {isProfileOpen && (
            <>
              {/* Overlay cover to close when clicking outside */}
              <div className="fixed inset-0 z-40" onClick={closeDropdowns} />
              
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-xl animate-in fade-in duration-200 z-50">
                <div className="p-3.5 border-b border-border/50 bg-muted/20">
                  <div className="text-xs font-bold text-foreground">Ranajit Roy</div>
                  <div className="text-[10px] text-muted-foreground truncate">{user.email}</div>
                </div>
                <div className="p-1 space-y-0.5">
                  <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-all text-left cursor-pointer">
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Account Settings</span>
                  </button>
                  <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-foreground hover:bg-muted transition-all text-left cursor-pointer">
                    <Settings className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Organization Settings</span>
                  </button>
                </div>
                <div className="border-t border-border/30 p-1 bg-muted/5">
                  <button className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-destructive hover:bg-destructive/10 transition-all text-left font-semibold cursor-pointer">
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </header>
  )
}
