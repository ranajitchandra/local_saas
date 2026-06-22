/* ─── Shared CSS Classes ─────────────────────────────────────────── */
export const INPUT_BASE =
    "w-full h-10 rounded-lg border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";

export const INPUT_NORMAL = `${INPUT_BASE} border-input`;
export const INPUT_ERROR = `${INPUT_BASE} border-destructive focus:ring-destructive/40`;

/* ─── Order Calculation Constants ─────────────────────────────────────────── */
export const TAX_RATE = 0.05; // 5% VAT
export const DISCOUNT_AMOUNT = 20; // Fixed discount
export const PROMO_CODE = "WELCOME20";
