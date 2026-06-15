/* ─── Card Formatting Helpers ─────────────────────────────────────────── */
export const formatCardNumber = (val: string): string =>
    val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

export const formatExpiry = (val: string): string => {
    const d = val.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

/* ─── Order Calculation Helpers ─────────────────────────────────────────── */
export const calculateSubtotal = (items: Array<{ price: number; qty: number }>): number =>
    items.reduce((sum, item) => sum + item.price * item.qty, 0);

export const calculateTax = (subtotal: number, rate: number = 0.05): number =>
    +(subtotal * rate).toFixed(2);

export const calculateTotal = (subtotal: number, tax: number, discount: number): number =>
    subtotal + tax - discount;

export const calculateItemCount = (items: Array<{ qty: number }>): number =>
    items.reduce((sum, item) => sum + item.qty, 0);
