import type { NotificationSetting, SettingMenu } from "@/types/dashboard/settings";



import { Building2, Bell, CreditCard, ShieldCheck, LockKeyhole } from "lucide-react";

export const settingsMenus: SettingMenu[] = [
    {
        id: "1",
        label: "Company Profile",
        path: "/dashboard/settings/company-profile",
        icon: Building2,
    },
    {
        id: "2",
        label: "Notifications",
        path: "/dashboard/settings/notifications",
        icon: Bell,
    },
    {
        id: "3",
        label: "Payment Gateway",
        path: "/dashboard/settings/payment-gateway",
        icon: CreditCard,
    },
    {
        id: "4",
        label: "Role Permissions",
        path: "/dashboard/settings/role-permissions",
        icon: ShieldCheck,
    },
    {
        id: "5",
        label: "Security & Access",
        path: "/dashboard/settings/security-access",
        icon: LockKeyhole,
    },
];

export const notificationSettings: NotificationSetting[] = [
    {
        id: "1",
        title: "New Vendor Registration",
        description:
            "Alert admins when a new merchant applies for access.",
        email: true,
        sms: false,
    },
    {
        id: "2",
        title: "High-Value Order Alerts",
        description:
            "Triggered for transactions exceeding $10,000.",
        email: true,
        push: true,
    },
];