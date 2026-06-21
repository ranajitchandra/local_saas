import type { LucideIcon } from "lucide-react";

export type SettingMenu = {
    id: string;
    label: string;
    path: string;
    icon: LucideIcon;
};

export type NotificationSetting = {
    id: string;
    title: string;
    description: string;
    email: boolean;
    sms?: boolean;
    push?: boolean;
};