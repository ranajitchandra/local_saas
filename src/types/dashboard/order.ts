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