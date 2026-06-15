/* ─── Payment Types ─────────────────────────────────────────── */
export type PaymentMethod = "card" | "cod";

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
} & CardFields & CodFields;

/* ─── Cart Types ─────────────────────────────────────────── */
export interface CartItem {
    id: number;
    name: string;
    details: string;
    price: number;
    qty: number;
    image: string;
}

export interface OrderPayload {
    order: {
        items: CartItem[];
        subtotal: number;
        tax: number;
        discount: number;
        total: number;
        couponCode: string | null;
    };
    payment:
        | {
            method: "card";
            cardNumber: string;
            expiry: string;
            cvv: string;
        }
        | {
            method: "cod";
            fullName: string;
            email: string;
            phone: string;
            address: string;
        };
}
