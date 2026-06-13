

import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Dashboard } from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "analytics",
                element: (
                    <div className="p-6 lg:p-8 animate-fade-in space-y-6">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Analytics</h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Performance analytics and metrics reporting streams.
                            </p>
                        </div>
                        <div className="border border-border/50 rounded-xl h-96 flex flex-col items-center justify-center text-center p-6 bg-card/40 backdrop-blur-md">
                            <span className="text-2xl font-bold mb-2 text-foreground">Analytics Telemetry Panel</span>
                            <span className="text-sm text-muted-foreground max-w-sm">
                                Deep insights, custom cohorts, and funnels tracking will reside here. Click on Dashboard in the sidebar to return home.
                            </span>
                        </div>
                    </div>
                )
            },
            {
                path: "customers",
                element: (
                    <div className="p-6 lg:p-8 animate-fade-in space-y-6">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Customers</h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Manage customer profiles, lifecycle, and account settings.
                            </p>
                        </div>
                        <div className="border border-border/50 rounded-xl h-96 flex flex-col items-center justify-center text-center p-6 bg-card/40 backdrop-blur-md">
                            <span className="text-2xl font-bold mb-2 text-foreground">Customer Accounts directory</span>
                            <span className="text-sm text-muted-foreground max-w-sm">
                                CRM lists, client telemetry, activity summaries, and filters will reside here. Click on Dashboard in the sidebar to return home.
                            </span>
                        </div>
                    </div>
                )
            },
            {
                path: "billing",
                element: (
                    <div className="p-6 lg:p-8 animate-fade-in space-y-6">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Billing & Plans</h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Subscriptions, invoices, and organization payment config.
                            </p>
                        </div>
                        <div className="border border-border/50 rounded-xl h-96 flex flex-col items-center justify-center text-center p-6 bg-card/40 backdrop-blur-md">
                            <span className="text-2xl font-bold mb-2 text-foreground">Billing & Subscriptions Control</span>
                            <span className="text-sm text-muted-foreground max-w-sm">
                                Stripe invoicing integrations, upgrade cards, and subscription quotas will reside here. Click on Dashboard in the sidebar to return home.
                            </span>
                        </div>
                    </div>
                )
            },
            {
                path: "settings",
                element: (
                    <div className="p-6 lg:p-8 animate-fade-in space-y-6">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Settings</h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Preferences and configuration panel for the SaaS instance.
                            </p>
                        </div>
                        <div className="border border-border/50 rounded-xl h-96 flex flex-col items-center justify-center text-center p-6 bg-card/40 backdrop-blur-md">
                            <span className="text-2xl font-bold mb-2 text-foreground">Admin Configuration Console</span>
                            <span className="text-sm text-muted-foreground max-w-sm">
                                Multi-factor auth keys, webhooks, workspace names, and access control scopes will reside here. Click on Dashboard in the sidebar to return home.
                            </span>
                        </div>
                    </div>
                )
            }
        ],
    },
]);