import type { CartItem } from "./types";

/* ─── Initial Cart Data ─────────────────────────────────────────── */
export const INITIAL_CART_ITEMS: CartItem[] = [
    {
        id: 1,
        name: "Pro Runner X1",
        details: "Size: 42 | Color: Aurora Teal",
        price: 129,
        qty: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
        id: 2,
        name: "CyberPack 2.0",
        details: "Capacity: 25L | Material: Cordura",
        price: 85,
        qty: 1,
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400",
    },
];

/* ─── Shared CSS Classes ─────────────────────────────────────────── */
export const INPUT_BASE =
    "w-full h-10 rounded-lg border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";

export const INPUT_NORMAL = `${INPUT_BASE} border-input`;
export const INPUT_ERROR = `${INPUT_BASE} border-destructive focus:ring-destructive/40`;

/* ─── Order Calculation Constants ─────────────────────────────────────────── */
export const TAX_RATE = 0.05; // 5% VAT
export const DISCOUNT_AMOUNT = 20; // Fixed discount
export const PROMO_CODE = "WELCOME20";
