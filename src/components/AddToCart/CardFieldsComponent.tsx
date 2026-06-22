import { Controller } from "react-hook-form";
import type { FieldErrors, Control } from "react-hook-form";

import { INPUT_NORMAL, INPUT_ERROR } from "./constants";
import { formatCardNumber, formatExpiry } from "./helpers";
import type { OrderFormValues } from "@/types/cart.types";

interface CardFieldsProps {
    control: Control<OrderFormValues>;
    errors: FieldErrors<OrderFormValues>;
}

export default function CardFields({ control, errors }: CardFieldsProps) {
    return (
        <div className="space-y-3">
            {/* Card Number */}
            <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Card Number
                </label>
                <Controller
                    name="cardNumber"
                    control={control}
                    rules={{
                        required: "Card number is required",
                        minLength: {
                            value: 19,
                            message: "Enter a valid 16-digit card number",
                        },
                    }}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="**** **** **** 1234"
                            className={`${errors.cardNumber ? INPUT_ERROR : INPUT_NORMAL} px-3`}
                            onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
                        />
                    )}
                />
                {errors.cardNumber && (
                    <p className="text-[11px] text-destructive mt-1">
                        {errors.cardNumber.message}
                    </p>
                )}
            </div>

            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-3">
                {/* Expiry Date */}
                <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Expiry Date
                    </label>
                    <Controller
                        name="expiry"
                        control={control}
                        rules={{
                            required: "Required",
                            pattern: {
                                value: /^\d{2}\/\d{2}$/,
                                message: "Use MM/YY",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="MM/YY"
                                className={`${errors.expiry ? INPUT_ERROR : INPUT_NORMAL} px-3`}
                                onChange={(e) => field.onChange(formatExpiry(e.target.value))}
                            />
                        )}
                    />
                    {errors.expiry && (
                        <p className="text-[11px] text-destructive mt-1">
                            {errors.expiry.message}
                        </p>
                    )}
                </div>

                {/* CVV */}
                <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        CVV
                    </label>
                    <input
                        type="password"
                        placeholder="***"
                        maxLength={4}
                        className={`${errors.cvv ? INPUT_ERROR : INPUT_NORMAL} px-3`}
                        {...control.register("cvv", {
                            required: "Required",
                            minLength: { value: 3, message: "Min 3 digits" },
                        })}
                    />
                    {errors.cvv && (
                        <p className="text-[11px] text-destructive mt-1">
                            {errors.cvv.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
