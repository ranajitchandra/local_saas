"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Filter,
    Award,
    Crown,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Customer = {
    id: number;
    name: string;
    email: string;
    status: "ACTIVE" | "PENDING" | "INACTIVE";
    tier: "VIP" | "Platinum" | "Regular";
    orders: number;
    spend: number;
    avatar: string;
};

const customers: Customer[] = [
    {
        id: 1,
        name: "Marcus V.",
        email: "marcus.v@email.com",
        status: "ACTIVE",
        tier: "VIP",
        orders: 48,
        spend: 4250,
        avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
        id: 2,
        name: "Elena R.",
        email: "elena.r@email.com",
        status: "ACTIVE",
        tier: "Platinum",
        orders: 112,
        spend: 8940,
        avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
        id: 3,
        name: "Samuel L.",
        email: "samuel.l@email.com",
        status: "PENDING",
        tier: "Regular",
        orders: 12,
        spend: 450,
        avatar: "https://i.pravatar.cc/100?img=8",
    },
    {
        id: 4,
        name: "Sarah K.",
        email: "sarah.k@email.com",
        status: "ACTIVE",
        tier: "VIP",
        orders: 89,
        spend: 6120,
        avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
        id: 5,
        name: "David O.",
        email: "david.o@email.com",
        status: "INACTIVE",
        tier: "Platinum",
        orders: 67,
        spend: 5800,
        avatar: "https://i.pravatar.cc/100?img=12",
    },
];

const tabs = [
    "All Customers",
    "VIP",
    "Platinum",
    "Regular",
    "Banned",
] as const;

export default function CustomersTable() {
    const [activeTab, setActiveTab] = useState("All Customers");
    const [page, setPage] = useState(1);

    const filtered =
        activeTab === "All Customers"
            ? customers
            : customers.filter((c) => c.tier === activeTab);

    return (
        <div className="quickmart-theme min-h-screen bg-background">
            <Card className="overflow-hidden border-border bg-card shadow-sm">
                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-border p-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                                    activeTab === tab
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <Button
                        variant="outline"
                        className="w-full border-border bg-background md:w-auto"
                    >
                        <Filter className="mr-2 h-4 w-4" />
                        More Filters
                    </Button>
                </div>

                {/* Responsive Scroll Table */}
                <div className="overflow-x-auto">
                    <div className="min-w-238">
                        {/* Header */}
                        <div className="grid grid-cols-6 bg-muted px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            <div>Customer</div>
                            <div>Status</div>
                            <div>Tier</div>
                            <div>Total Orders</div>
                            <div>Total Spend</div>
                            <div>Actions</div>
                        </div>

                        {/* Rows */}
                        <div>
                            {filtered.map((customer) => (
                                <div
                                    key={customer.id}
                                    className="grid grid-cols-6 items-center border-b border-border px-6 py-5 transition-colors hover:bg-muted/40"
                                >
                                    {/* Customer */}
                                    <div className="flex min-w-0 items-center gap-3">
                                        <Avatar className="h-11 w-11 shrink-0">
                                            <AvatarImage src={customer.avatar} />
                                            <AvatarFallback>
                                                {customer.name.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="min-w-0">
                                            <p className="truncate font-semibold text-foreground">
                                                {customer.name}
                                            </p>

                                            <p className="truncate text-sm text-muted-foreground">
                                                {customer.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <Badge
                                            className={cn(
                                                "rounded-md border-0",
                                                customer.status === "ACTIVE" &&
                                                "bg-emerald-100 text-emerald-700",
                                                customer.status === "PENDING" &&
                                                "bg-amber-100 text-amber-700",
                                                customer.status === "INACTIVE" &&
                                                "bg-red-100 text-red-700"
                                            )}
                                        >
                                            {customer.status}
                                        </Badge>
                                    </div>

                                    {/* Tier */}
                                    <div className="flex items-center gap-2">
                                        {customer.tier === "VIP" && (
                                            <Crown className="h-4 w-4 text-primary" />
                                        )}

                                        {customer.tier === "Platinum" && (
                                            <Award className="h-4 w-4 text-primary" />
                                        )}

                                        {customer.tier === "Regular" && (
                                            <User className="h-4 w-4 text-muted-foreground" />
                                        )}

                                        <span className="text-sm">
                                            {customer.tier}
                                        </span>
                                    </div>

                                    {/* Orders */}
                                    <div className="font-medium">
                                        {customer.orders} Orders
                                    </div>

                                    {/* Spend */}
                                    <div className="text-xl font-bold text-foreground">
                                        $
                                        {customer.spend.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                        })}
                                    </div>

                                    {/* Actions */}
                                    <div>
                                        <Button size="icon" variant="ghost">
                                            ⋯
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
                    <p className="text-sm text-muted-foreground">
                        Showing 1-10 of 12,428 customers
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        {[1, 2, 3].map((n) => (
                            <Button
                                key={n}
                                size="icon"
                                variant={page === n ? "default" : "ghost"}
                                onClick={() => setPage(n)}
                                className={
                                    page === n
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                }
                            >
                                {n}
                            </Button>
                        ))}

                        <span className="px-2 text-sm text-muted-foreground">
                            ...
                        </span>

                        <Button variant="ghost" size="icon">
                            1243
                        </Button>

                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setPage((p) => p + 1)}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}