import type { OrderStatus } from "@/types/dashboard/order";


export const getStatusStyle = (
    status: OrderStatus
): string => {
    switch (status) {
        case "Delivered":
            return "bg-emerald-100 text-emerald-700 border border-emerald-200";

        case "Shipped":
            return "bg-cyan-100 text-cyan-700 border border-cyan-200";

        case "Pending":
            return "bg-red-100 text-red-600 border border-red-200";

        default:
            return "";
    }
};

export const formatCurrency = (
    amount: number
): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};