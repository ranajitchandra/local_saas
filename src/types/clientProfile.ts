

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
    name: string;
    description: string;
    active: boolean;
    default?: boolean;
}

export type AddressForm = {
    label: string;
    street: string;
    city: string;
    country: string;
    zipCode: string;
};

export type PaymentForm = {
    cardHolder: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
};

export type SecurityForm = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    twoFactor: boolean;
};


export type PaymentMethodForm = {
    name: string;
    provider: string;
    accountNumber: string;
    isActive: boolean;
    isDefault: boolean;
};



