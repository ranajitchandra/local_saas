import type { OrderFormValues } from "@/types/cart.types";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { inputError, inputNormal } from "./styles";
import { formatCardNumber, formatExpiry } from "@/utils/formatters";


interface CardFieldsProps {
    control: Control<OrderFormValues>;
    errors: FieldErrors<OrderFormValues>;
}

export default function CardFields({
    control,
    errors,
}: CardFieldsProps) {
    return (
        <div className="space-y-3">
            <div>
                <label className="block mb-1.5 text-xs font-medium text-muted-foreground">
                    Card Number
                </label>

                <Controller
                    name="cardNumber"
                    control={control}
                    rules={{
                        required: "Card number is required",
                        minLength: {
                            value: 19,
                            message:
                                "Enter a valid 16-digit card number",
                        },
                    }}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="**** **** **** 1234"
                            className={`${errors.cardNumber ? inputError : inputNormal} px-3`}
                            onChange={(e) =>
                                field.onChange(
                                    formatCardNumber(
                                        e.target.value
                                    )
                                )
                            }
                        />
                    )}
                />

                {errors.cardNumber && (
                    <p className="mt-1 text-[11px] text-destructive">
                        {errors.cardNumber.message}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block mb-1.5 text-xs font-medium text-muted-foreground">
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
                                className={`${errors.expiry ? inputError : inputNormal} px-3`}
                                onChange={(e) =>
                                    field.onChange(
                                        formatExpiry(
                                            e.target.value
                                        )
                                    )
                                }
                            />
                        )}
                    />

                    {errors.expiry && (
                        <p className="mt-1 text-[11px] text-destructive">
                            {errors.expiry.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-1.5 text-xs font-medium text-muted-foreground">
                        CVV
                    </label>

                    <Controller
                        name="cvv"
                        control={control}
                        rules={{
                            required: "Required",
                            minLength: {
                                value: 3,
                                message: "Min 3 digits",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="password"
                                maxLength={4}
                                placeholder="***"
                                className={`${errors.cvv ? inputError : inputNormal} px-3`}
                            />
                        )}
                    />

                    {errors.cvv && (
                        <p className="mt-1 text-[11px] text-destructive">
                            {errors.cvv.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}