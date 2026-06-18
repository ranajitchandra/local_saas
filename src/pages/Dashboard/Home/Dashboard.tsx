
import { DollarSign, Users, Clock, Activity, ArrowUpRight, Sparkles, Zap, CheckCircle, AlertCircle } from "lucide-react"
import MetricCard from "./MetricCard"

export function Dashboard() {
    // Mock recent logs
    const activities = [
        {
            id: "act-1",
            user: { name: "Alice Cooper", email: "alice@example.com", initial: "AC", color: "from-blue-500 to-indigo-500" },
            action: "Upgraded subscription to Enterprise Plan",
            time: "2 mins ago",
            status: "success",
            badgeText: "Upgrade"
        },
        {
            id: "act-2",
            user: { name: "David Miller", email: "david@miller-industries.com", initial: "DM", color: "from-purple-500 to-pink-500" },
            action: "Provisioned new database server (us-east)",
            time: "15 mins ago",
            status: "success",
            badgeText: "System"
        },
        {
            id: "act-3",
            user: { name: "Emma Watson", email: "emma@watson.co", initial: "EW", color: "from-amber-500 to-orange-500" },
            action: "Failed Stripe webhook payment retry",
            time: "1 hour ago",
            status: "warning",
            badgeText: "Billing"
        },
        {
            id: "act-4",
            user: { name: "Marcus Aurelius", email: "marcus@philosophy.gr", initial: "MA", color: "from-emerald-500 to-teal-500" },
            action: "Invited 3 members to the workspace",
            time: "3 hours ago",
            status: "success",
            badgeText: "Access"
        }
    ]

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Welcome Title */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
                        Dashboard <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Welcome back, Ranajit! Here is what's happening with your SaaS platform today.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        All systems operational
                    </span>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="Monthly Recurring Revenue"
                    value="$45,231.89"
                    change="+12.4%"
                    isPositive={true}
                    trendLabel="vs last month"
                    icon={<DollarSign className="h-4 w-4 text-primary" />}
                />
                <MetricCard
                    title="Active Subscriptions"
                    value="1,482"
                    change="+8.2%"
                    isPositive={true}
                    trendLabel="vs last week"
                    icon={<Users className="h-4 w-4 text-primary" />}
                />
                <MetricCard
                    title="Avg. Server Response Time"
                    value="142 ms"
                    change="-4.3%"
                    isPositive={true}
                    trendLabel="vs yesterday"
                    icon={<Clock className="h-4 w-4 text-primary" />}
                />
                <MetricCard
                    title="API Request Success"
                    value="99.98%"
                    change="-0.02%"
                    isPositive={false}
                    trendLabel="vs last hour"
                    icon={<Activity className="h-4 w-4 text-primary" />}
                />
            </div>

            {/* Analytics Visualization Card */}
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-xl border border-border/50 bg-card/40 p-6 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-foreground">Revenue Analytics</h2>
                            <p className="text-xs text-muted-foreground mt-0.5">Overview of current month sales performance</p>
                        </div>
                        <select className="bg-transparent border border-border/50 text-xs rounded-md px-2 py-1 focus:ring-1 focus:ring-primary outline-none">
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                            <option>Last 1 Year</option>
                        </select>
                    </div>

                    {/* Custom SVG Line Chart */}
                    <div className="relative h-64 w-full mt-6 flex items-end">
                        <svg className="w-full h-full" viewBox="0 0 600 240" fill="none" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>

                            {/* Grid Lines */}
                            <line x1="0" y1="40" x2="600" y2="40" stroke="currentColor" className="text-border/40" strokeDasharray="4 4" />
                            <line x1="0" y1="100" x2="600" y2="100" stroke="currentColor" className="text-border/40" strokeDasharray="4 4" />
                            <line x1="0" y1="160" x2="600" y2="160" stroke="currentColor" className="text-border/40" strokeDasharray="4 4" />
                            <line x1="0" y1="220" x2="600" y2="220" stroke="currentColor" className="text-border/40" strokeDasharray="4 4" />

                            {/* Chart Line Area Fill */}
                            <path
                                d="M 0 220 L 50 180 L 120 200 L 200 130 L 280 145 L 360 80 L 440 110 L 520 50 L 600 65 L 600 220 Z"
                                fill="url(#chartGradient)"
                            />

                            {/* Chart Main Stroke */}
                            <path
                                d="M 0 220 L 50 180 L 120 200 L 200 130 L 280 145 L 360 80 L 440 110 L 520 50 L 600 65"
                                stroke="var(--color-primary)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Data points dots */}
                            <circle cx="200" cy="130" r="4" fill="var(--color-primary)" stroke="white" strokeWidth="2" />
                            <circle cx="360" cy="80" r="4" fill="var(--color-primary)" stroke="white" strokeWidth="2" />
                            <circle cx="520" cy="50" r="4" fill="var(--color-primary)" stroke="white" strokeWidth="2" />
                        </svg>

                        {/* SVG Labels */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-1 text-[10px] text-muted-foreground">
                            <span>June 01</span>
                            <span>June 07</span>
                            <span>June 14</span>
                            <span>June 21</span>
                            <span>June 28</span>
                        </div>
                    </div>
                </div>

                {/* Right Metric Card Panel */}
                <div className="rounded-xl border border-border/50 bg-card/40 p-6 backdrop-blur-md flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-foreground">Usage Summary</h2>
                        <p className="text-xs text-muted-foreground mt-0.5">Quota and API consumption for this billing period</p>

                        {/* Progress Bars */}
                        <div className="space-y-4 mt-6">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-medium text-foreground flex items-center gap-1">
                                        <Zap className="h-3.5 w-3.5 text-amber-500" /> API Quota
                                    </span>
                                    <span className="text-muted-foreground font-semibold">78,212 / 100k requests</span>
                                </div>
                                <div className="w-full bg-secondary/80 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "78%" }} />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-medium text-foreground flex items-center gap-1">
                                        <Users className="h-3.5 w-3.5 text-blue-500" /> Active Users
                                    </span>
                                    <span className="text-muted-foreground font-semibold">1,482 / 2,000 max</span>
                                </div>
                                <div className="w-full bg-secondary/80 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "74%" }} />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-medium text-foreground flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5 text-purple-500" /> Server Build Minutes
                                    </span>
                                    <span className="text-muted-foreground font-semibold">410 / 500 mins</span>
                                </div>
                                <div className="w-full bg-secondary/80 h-2 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 h-full rounded-full" style={{ width: "82%" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border/30 pt-4 mt-6">
                        <button className="w-full inline-flex items-center justify-center gap-1 rounded-lg bg-primary py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/80 active:translate-y-px">
                            Upgrade Subscription Plan
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Activity Feed Section */}
            <div className="rounded-xl border border-border/50 bg-card/40 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold text-foreground">Recent Event Log</h2>
                        <p className="text-xs text-muted-foreground mt-0.5">Real-time audit log of system events and transactions</p>
                    </div>
                    <button className="text-xs font-semibold text-primary hover:underline flex items-center gap-0.5">
                        View All Logs
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/50 text-xs font-medium text-muted-foreground">
                                <th className="pb-3 font-semibold">Initiated By</th>
                                <th className="pb-3 font-semibold">Action Description</th>
                                <th className="pb-3 font-semibold">Time Elapsed</th>
                                <th className="pb-3 font-semibold text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/30 text-sm">
                            {activities.map((act) => (
                                <tr key={act.id} className="hover:bg-muted/10 transition-colors">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${act.user.color} text-xs font-bold text-white shadow-sm`}>
                                                {act.user.initial}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground">{act.user.name}</div>
                                                <div className="text-xs text-muted-foreground">{act.user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-muted-foreground align-middle">
                                        {act.action}
                                    </td>
                                    <td className="py-4 text-xs text-muted-foreground align-middle">
                                        {act.time}
                                    </td>
                                    <td className="py-4 text-right align-middle">
                                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${act.status === "success"
                                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                            : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                            }`}>
                                            {act.status === "success" ? (
                                                <CheckCircle className="h-3 w-3" />
                                            ) : (
                                                <AlertCircle className="h-3 w-3" />
                                            )}
                                            {act.badgeText}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
