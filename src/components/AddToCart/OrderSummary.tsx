import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
}

export default function OrderSummary({
    subtotal,
    tax,
    discount,
    total,
}: OrderSummaryProps) {
    return (
        <div className="space-y-3 text-sm">
            <div className="flex justify-between text-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
                <span className="text-foreground">
                    Shipping Fee
                </span>

                <span className="font-semibold text-primary">
                    FREE
                </span>
            </div>

            <div className="flex justify-between text-foreground">
                <span>Tax (VAT 5%)</span>
                <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between rounded-lg bg-muted p-3">
                <span className="text-xs text-muted-foreground sm:text-sm">
                    Promo: WELCOME20
                </span>

                <span className="font-semibold text-primary">
                    -${discount.toFixed(2)}
                </span>
            </div>

            <Separator className="bg-border" />

            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">
                    Total
                </span>

                <span className="text-2xl font-bold text-primary">
                    ${total.toFixed(2)}
                </span>
            </div>

            <Button
                type="submit"
                className="mt-1 h-11 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
                Place Order
            </Button>

            <div className="flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground" />

                <p className="text-center text-xs text-muted-foreground">
                    Secure SSL Encryption
                </p>
            </div>

            <p className="text-center text-xs text-muted-foreground">
                By placing an order, you agree to our{" "}
                <span className="cursor-pointer text-primary hover:underline">
                    Terms & Conditions
                </span>
            </p>
        </div>
    );
}