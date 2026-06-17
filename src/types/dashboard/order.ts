import type { LucideIcon } from "lucide-react";

export type OrderStatus =
    | "Delivered"
    | "Shipped"
    | "Pending";

export interface Order {
    id: string;
    customer: string;
    initials: string;
    date: string;
    amount: number;
    status: OrderStatus;
}

export interface TeamMember {
    id: number;
    name: string;
    initials: string;
}



export interface DashboardStat {
    id: number;
    title: string;
    value: string;
    change: string;
    trend: "positive" | "negative";
    icon: LucideIcon;
}