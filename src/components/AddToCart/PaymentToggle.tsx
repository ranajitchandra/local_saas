import type { OrderFormValues, PaymentMethod } from "@/types/cart.types";
import { CreditCard, Truck } from "lucide-react";
import type { UseFormSetValue } from "react-hook-form";


interface PaymentToggleProps {
    paymentMethod: PaymentMethod;
    setValue: UseFormSetValue<OrderFormValues>;
    size?: "sm" | "md";
}

export default function PaymentToggle({
    paymentMethod,
    setValue,
    size = "md",
}: PaymentToggleProps) {
    return (
        <div
            className={`grid grid-cols-2 ${size === "sm"
                ? "gap-2"
                : "gap-3"
                } mb-4`}
        >
            {(["card", "cod"] as PaymentMethod[]).map(
                (method) => (
                    <button
                        key={method}
                        type="button"
                        onClick={() =>
                            setValue(
                                "paymentMethod",
                                method,
                                {
                                    shouldValidate:
                                        true,
                                }
                            )
                        }
                        className={`flex items-center ${size === "sm"
                            ? "gap-2 p-2.5"
                            : "gap-3 p-3"
                            } rounded-lg border-2 transition-all text-left ${paymentMethod ===
                                method
                                ? "border-primary bg-accent"
                                : "border-border bg-card hover:border-primary/50"
                            }`}
                    >
                        <div
                            className={`p-1.5 rounded-md shrink-0 ${paymentMethod ===
                                method
                                ? "bg-primary/10"
                                : "bg-muted"
                                }`}
                        >
                            {method ===
                                "card" ? (
                                <CreditCard
                                    className={`${size ===
                                        "sm"
                                        ? "h-3.5 w-3.5"
                                        : "h-4 w-4"
                                        } ${paymentMethod ===
                                            method
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                        }`}
                                />
                            ) : (
                                <Truck
                                    className={`${size ===
                                        "sm"
                                        ? "h-3.5 w-3.5"
                                        : "h-4 w-4"
                                        } ${paymentMethod ===
                                            method
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                        }`}
                                />
                            )}
                        </div>

                        <div className="min-w-0">
                            <p
                                className={`font-semibold truncate ${size ===
                                    "sm"
                                    ? "text-xs"
                                    : "text-sm"
                                    } ${paymentMethod ===
                                        method
                                        ? "text-primary"
                                        : "text-foreground"
                                    }`}
                            >
                                {method ===
                                    "card"
                                    ? size ===
                                        "sm"
                                        ? "Credit / Debit"
                                        : "Credit / Debit Card"
                                    : "Cash on Delivery"}
                            </p>

                            <p
                                className={`truncate text-muted-foreground ${size ===
                                    "sm"
                                    ? "text-[10px]"
                                    : "text-xs"
                                    }`}
                            >
                                {method ===
                                    "card"
                                    ? size ===
                                        "sm"
                                        ? "Visa, Mastercard"
                                        : "Visa, Mastercard, Amex"
                                    : "Pay when items arrive"}
                            </p>
                        </div>

                        <div
                            className={`ml-auto flex items-center justify-center rounded-full border-2 shrink-0 ${size ===
                                "sm"
                                ? "h-3.5 w-3.5"
                                : "h-4 w-4"
                                } ${paymentMethod ===
                                    method
                                    ? "border-primary"
                                    : "border-border"
                                }`}
                        >
                            {paymentMethod === method && (<div className={`rounded-full bg-primary ${size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2"}`} />)}
                        </div>
                    </button>
                )
            )}
        </div>
    );
}