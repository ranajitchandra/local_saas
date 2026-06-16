

import { User, History, MapPin, CreditCard, Shield } from "lucide-react";

export const profileMenus = [
    {
        title: "Personal Info",
        icon: User,
        href: "/profile/personal-info",
    },
    {
        title: "Order History",
        icon: History,
        href: "/profile/order-history",
    },
    {
        title: "Addresses",
        icon: MapPin,
        href: "/profile/addresses",
    },
    {
        title: "Payment Methods",
        icon: CreditCard,
        href: "/profile/payment-methods",
    },
    {
        title: "Security & Privacy",
        icon: Shield,
        href: "/profile/security-privacy",
    },
];