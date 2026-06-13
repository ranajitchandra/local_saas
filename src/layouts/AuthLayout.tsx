import React from "react"
import { Outlet } from "react-router"
import { Sparkles, Terminal, CheckCircle2 } from "lucide-react"

export function AuthLayout() {
  return (
    <div className="min-h-screen w-screen flex bg-background font-sans transition-colors duration-200">
      
      {/* LEFT FORM PANEL (Centering Card and Forms) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 relative z-10 bg-background/50 backdrop-blur-sm">
        
        {/* Top Branding Section */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <span className="font-extrabold text-base text-foreground tracking-tight">
            SaaS Engine
          </span>
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
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-neutral-900 via-primary/20 to-neutral-950 border-l border-border/30 relative overflow-hidden select-none items-center justify-center p-12">
        {/* Background decorative mesh shapes */}
        <div className="absolute top-1/4 -right-12 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-1/4 -left-12 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse duration-[12000ms]" />
        
        {/* Abstract subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Promo Content */}
        <div className="relative max-w-md text-white space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/10">
            <Terminal className="h-3.5 w-3.5" />
            <span>Developer Console v2.4</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
            Deploy telemetry consoles at the speed of thought.
          </h2>
          
          <p className="text-sm text-zinc-400">
            Streamline workspace access controls, aggregate application telemetry logs, configure secure webhook endpoints, and inspect analytics instantly.
          </p>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
              <span className="text-xs text-zinc-300">Enterprise grade scopes and key encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
              <span className="text-xs text-zinc-300">Stripe and webhook payment providers active</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
              <span className="text-xs text-zinc-300">Operational success dashboard graphs default</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
