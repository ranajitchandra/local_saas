export type PaymentMethod = "card" | "cod";

export interface CartItem {
    id: string | number;
    name: string;
    details: string;
    price: number;
    qty: number;
    image: string;
}

export interface CardFields {
    cardNumber: string;
    expiry: string;
    cvv: string;
}

export interface CodFields {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

export type OrderFormValues = {
    paymentMethod: PaymentMethod;
    couponCode: string;
} & CardFields &
    CodFields;
