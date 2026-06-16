

export interface UserProfile {
    fullName: string;
    email: string;
    phone: string;
    language: string;
    avatar: string;
    memberSince: string;
}

export interface Order {
    id: string;
    total: number;
    status: "Delivered" | "Pending" | "Cancelled";
    date: string;
}

export interface PaymentMethod {
    id: string;
    type: string;
    last4: string;
    expiry: string;
}