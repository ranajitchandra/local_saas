import React from "react"
import { NavLink } from "react-router"
import { X, Sparkles, LogOut } from "lucide-react"

interface NavItem {
  name: string
  path: string
  icon: React.ReactNode
  badge?: string
}

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  user: {
    name: string
    email: string
    initial: string
  }
}

export function MobileDrawer({ isOpen, onClose, navItems, user }: MobileDrawerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />
      {/* Drawer */}
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
              onClick={onClose}
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
                onClick={onClose}
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
              {user.initial}
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">{user.name}</div>
              <div className="text-[10px] text-muted-foreground">Owner</div>
            </div>
          </div>
          <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
            <LogOut className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
