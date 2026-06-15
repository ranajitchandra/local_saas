import { CreditCard, Truck } from "lucide-react";
import type { PaymentMethod } from "./types";

interface PaymentToggleProps {
    paymentMethod: PaymentMethod;
    onSelect: (method: PaymentMethod) => void;
    size?: "sm" | "md";
}

export default function PaymentToggle({
    paymentMethod,
    onSelect,
    size = "md",
}: PaymentToggleProps) {
    const methods: PaymentMethod[] = ["card", "cod"];

    return (
        <div className={`grid grid-cols-2 gap-${size === "sm" ? "2" : "3"} mb-4`}>
            {methods.map((method) => (
                <button
                    key={method}
                    type="button"
                    onClick={() => onSelect(method)}
                    className={`flex items-center gap-${size === "sm" ? "2" : "3"} p-${size === "sm" ? "2.5" : "3"} rounded-lg border-2 transition-all text-left ${
                        paymentMethod === method
                            ? "border-primary bg-accent"
                            : "border-border bg-card hover:border-primary/50"
                    }`}
                >
                    {/* Icon Container */}
                    <div
                        className={`p-1.5 rounded-md shrink-0 ${
                            paymentMethod === method ? "bg-primary/10" : "bg-muted"
                        }`}
                    >
                        {method === "card" ? (
                            <CreditCard
                                className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} ${
                                    paymentMethod === method
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                }`}
                            />
                        ) : (
                            <Truck
                                className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} ${
                                    paymentMethod === method
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                }`}
                            />
                        )}
                    </div>

                    {/* Text Content */}
                    <div className="min-w-0">
                        <p
                            className={`${
                                size === "sm" ? "text-xs" : "text-sm"
                            } font-semibold truncate ${
                                paymentMethod === method ? "text-primary" : "text-foreground"
                            }`}
                        >
                            {method === "card"
                                ? size === "sm"
                                    ? "Credit / Debit"
                                    : "Credit / Debit Card"
                                : "Cash on Delivery"}
                        </p>
                        <p
                            className={`${
                                size === "sm" ? "text-[10px]" : "text-xs"
                            } text-muted-foreground truncate`}
                        >
                            {method === "card"
                                ? size === "sm"
                                    ? "Visa, Mastercard"
                                    : "Visa, Mastercard, Amex"
                                : "Pay when items arrive"}
                        </p>
                    </div>

                    {/* Radio Button */}
                    <div
                        className={`ml-auto ${
                            size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
                        } rounded-full border-2 flex items-center justify-center shrink-0 ${
                            paymentMethod === method ? "border-primary" : "border-border"
                        }`}
                    >
                        {paymentMethod === method && (
                            <div
                                className={`${
                                    size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2"
                                } rounded-full bg-primary`}
                            />
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
}
