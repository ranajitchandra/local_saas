import React from "react"
import { NavLink } from "react-router"
import { ChevronLeft, ChevronRight, Sparkles, LogOut } from "lucide-react"

interface NavItem {
  name: string
  path: string
  icon: React.ReactNode
  badge?: string
}

interface SidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  navItems: NavItem[]
  user: {
    name: string
    email: string
    initial: string
  }
}

export function Sidebar({ isCollapsed, onToggleCollapse, navItems, user }: SidebarProps) {
  return (
    <aside
      className={`hidden lg:flex flex-col border-r border-border/50 bg-card/65 backdrop-blur-md transition-all duration-300 shrink-0 select-none relative ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Expand/Collapse Button */}
      <button
        onClick={onToggleCollapse}
        className="absolute top-6 -right-3 h-6 w-6 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm hover:shadow z-10 hover:scale-105 transition-all cursor-pointer"
      >
        {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
      </button>

      {/* Sidebar Logo Branding */}
      <div className="h-16 flex items-center px-5 gap-3 border-b border-border/30">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/25 shrink-0">
          <Sparkles className="h-5 w-5" />
        </div>
        {!isCollapsed && (
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
            {!isCollapsed && (
              <span className="text-sm font-medium flex-1 animate-fade-in">{item.name}</span>
            )}

            {/* Beta Badge */}
            {!isCollapsed && item.badge && (
              <span className="rounded bg-secondary/80 px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground border border-border/40">
                {item.badge}
              </span>
            )}

            {/* Tooltip on Collapsed */}
            {isCollapsed && (
              <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden group-hover/nav:block bg-popover text-popover-foreground border border-border text-[11px] font-medium py-1 px-2.5 rounded-md shadow-md whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-150">
                {item.name}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Desktop Sidebar Footer */}
      <div className="p-3 border-t border-border/30 bg-muted/10">
        <div className={`flex items-center gap-3 rounded-lg ${isCollapsed ? "justify-center" : "px-2 py-1.5"}`}>
          <div className="h-9 w-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
            {user.initial}
          </div>

          {!isCollapsed && (
            <div className="flex-1 min-w-0 animate-fade-in">
              <div className="text-xs font-bold text-foreground truncate">{user.name}</div>
              <div className="text-[10px] text-muted-foreground truncate">Owner Account</div>
            </div>
          )}

          {!isCollapsed && (
            <button className="rounded-md p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all">
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  )
}
