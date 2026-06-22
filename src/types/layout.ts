import type { ReactNode } from "react";

export interface NavItem {
    name: string;
    path: string;
    icon: ReactNode;
    badge?: string;
    end?: boolean;
}

export interface DashboardUser {
    name: string;
    email: string;
    initial: string;
}
