import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PROMO_CODE } from "./constants";

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
            {/* Subtotal */}
            <div className="flex justify-between text-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between">
                <span className="text-foreground">Shipping Fee</span>
                <span className="text-primary font-semibold">FREE</span>
            </div>

            {/* Tax */}
            <div className="flex justify-between text-foreground">
                <span>Tax (VAT 5%)</span>
                <span>${tax.toFixed(2)}</span>
            </div>

            {/* Promo Discount */}
            <div className="rounded-lg bg-muted p-3 flex justify-between">
                <span className="text-muted-foreground text-xs sm:text-sm">
                    Promo: {PROMO_CODE}
                </span>
                <span className="text-primary font-semibold">-${discount.toFixed(2)}</span>
            </div>

            <Separator className="bg-border" />

            {/* Total */}
            <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-foreground">Total</span>
                <span className="font-bold text-2xl text-primary">
                    ${total.toFixed(2)}
                </span>
            </div>

            {/* Place Order Button */}
            <Button
                type="submit"
                className="w-full h-11 mt-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base"
            >
                Place Order
            </Button>

            {/* Security Info */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground" />
                <p className="text-xs text-center text-muted-foreground">
                    Secure SSL Encryption
                </p>
            </div>

            {/* Terms */}
            <p className="text-xs text-center text-muted-foreground">
                By placing an order, you agree to our{" "}
                <span className="text-primary cursor-pointer hover:underline">
                    Terms &amp; Conditions
                </span>
                .
            </p>
        </div>
    );
}
