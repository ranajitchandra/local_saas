
import { Button } from "@/components/ui/button";
import type { OrderFormValues } from "@/types/cart.types";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
interface CouponCardProps {
    register: UseFormRegister<OrderFormValues>;
    setValue: UseFormSetValue<OrderFormValues>;
}

export default function CouponCard({
    register,
    setValue,
}: CouponCardProps) {
    return (
        <div className="rounded-xl border border-border bg-background p-4">
            <div className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground">
                HAVE A COUPON?
            </div>

            <div className="flex gap-2">
                <input
                    placeholder="Enter code"
                    className="w-20 flex-1 rounded-md border border-input bg-muted px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    {...register("couponCode")}
                    onChange={(e) =>
                        setValue(
                            "couponCode",
                            e.target.value.toUpperCase()
                        )
                    }
                />

                <Button
                    type="button"
                    size="sm"
                    className="bg-primary px-4 text-primary-foreground hover:bg-primary/90"
                >
                    Apply
                </Button>
            </div>
        </div>
    );
}