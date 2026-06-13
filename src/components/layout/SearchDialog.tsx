import React from "react"
import { Search, Command, HelpCircle, ArrowRight, Sun, Moon } from "lucide-react"

interface NavItem {
  name: string
  path: string
  icon: React.ReactNode
  badge?: string
}

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  navItems: NavItem[]
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export function SearchDialog({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  navItems,
  isDarkMode,
  toggleDarkMode
}: SearchDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />
      {/* Search box card */}
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
          <button
            onClick={onClose}
            className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground border border-border/40 hover:bg-muted"
          >
            ESC
          </button>
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
                onClick={onClose}
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
              onClick={() => {
                toggleDarkMode()
                onClose()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground" />
              )}
              <span>Toggle light/dark mode</span>
            </button>
            <button
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors text-left"
              onClick={onClose}
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
  )
}
