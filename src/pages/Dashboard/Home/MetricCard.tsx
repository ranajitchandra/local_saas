import { TrendingDown, TrendingUp } from "lucide-react"

interface MetricCardProps {
    title: string
    value: string
    change: string
    isPositive: boolean
    icon: React.ReactNode
    trendLabel: string
}

export default function MetricCard({ title, value, change, isPositive, icon, trendLabel }: MetricCardProps) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5">
            {/* Decorative gradient corner */}
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

            <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/80 text-foreground border border-border/30 shadow-sm">
                    {icon}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{value}</h3>
                <div className="mt-2 flex items-center gap-1.5">
                    <span className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${isPositive
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-destructive/10 text-destructive"
                        }`}>
                        {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {change}
                    </span>
                    <span className="text-xs text-muted-foreground">{trendLabel}</span>
                </div>
            </div>
        </div>
    )
}
