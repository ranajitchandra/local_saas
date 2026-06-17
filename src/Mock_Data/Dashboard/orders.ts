import type { Order, TeamMember } from "@/types/dashboard/order";


export const teamMembers: TeamMember[] = [
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

export const orders: Order[] = [
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














