import type { UseFormSetValue, UseFormRegister } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { OrderFormValues } from "@/types/cart.types";

interface CouponCardProps {
    onApply?: () => void;
    register: UseFormRegister<OrderFormValues>;
    setValue: UseFormSetValue<OrderFormValues>;
}

export default function CouponCard({ onApply, register, setValue }: CouponCardProps) {
    return (
        <Card className="p-4 border-border bg-background">
            <div className="text-xs font-semibold text-muted-foreground mb-3 tracking-wider">
                HAVE A COUPON?
            </div>
            <div className="flex gap-2">
                <input
                    placeholder="Enter code"
                    className="flex-1 w-20 rounded-md border border-input bg-muted px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    {...register("couponCode")}
                    onChange={(e) => setValue("couponCode", e.target.value.toUpperCase())}
                />
                <Button
                    type="button"
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-4"
                    onClick={onApply}
                >
                    Apply
                </Button>
            </div>
        </Card>
    );
}
