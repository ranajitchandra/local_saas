
import type { Order, UserProfile } from "@/types/clientProfile";

export const user: UserProfile = {
    fullName: "Alex Harrison",
    email: "alex.harrison@techcloud.com",
    phone: "+1 (555) 012-3456",
    language: "English (US)",
    avatar: "https://i.pravatar.cc/150?img=12",
    memberSince: "2021",
};

export const orders: Order[] = [
    {
        id: "#ORD-1001",
        total: 120,
        status: "Delivered",
        date: "2026-06-10",
    },
    {
        id: "#ORD-1002",
        total: 80,
        status: "Pending",
        date: "2026-06-13",
    },
];

