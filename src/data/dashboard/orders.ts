import { ShoppingCart, PackageCheck, Truck, Wallet } from "lucide-react";

export const teamMembers = [
    {
        id: 1,
        name: "William Anderson",
        initials: "WA",
    },
    {
        id: 2,
        name: "Michael King",
        initials: "MK",
    },
    {
        id: 3,
        name: "Sarah White",
        initials: "SW",
    },
];

export const orders = [
    {
        id: "#QM-82910",
        customer: "Ethan Hunt",
        initials: "EH",
        date: "Oct 24, 2023",
        amount: 542,
        status: "Delivered",
    },
    {
        id: "#QM-82911",
        customer: "Sarah Williams",
        initials: "SW",
        date: "Oct 24, 2023",
        amount: 1290.45,
        status: "Shipped",
    },
    {
        id: "#QM-82912",
        customer: "John Doe",
        initials: "JD",
        date: "Oct 23, 2023",
        amount: 89.99,
        status: "Pending",
    },
    {
        id: "#QM-82913",
        customer: "Anna Lee",
        initials: "AL",
        date: "Oct 23, 2023",
        amount: 230.15,
        status: "Delivered",
    },
    {
        id: "#QM-82914",
        customer: "Michael Parks",
        initials: "MP",
        date: "Oct 22, 2023",
        amount: 45,
        status: "Shipped",
    },
];

export const dashboardStats = [
    {
        id: 1,
        title: "TOTAL ORDERS",
        value: "1,284",
        change: "+12% from last month",
        trend: "positive",
        icon: ShoppingCart,
    },
    {
        id: 2,
        title: "PENDING",
        value: "43",
        change: "-5% critical latency",
        trend: "negative",
        icon: PackageCheck,
    },
    {
        id: 3,
        title: "SHIPPED TODAY",
        value: "156",
        change: "On track with SLA",
        trend: "positive",
        icon: Truck,
    },
    {
        id: 4,
        title: "TOTAL REVENUE",
        value: "$42.8k",
        change: "+8.4% daily avg",
        trend: "positive",
        icon: Wallet,
    },
];
