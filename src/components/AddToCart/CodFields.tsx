import type { OrderFormValues } from "@/types/cart.types";
import { Mail, MapPin, Phone, User } from "lucide-react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { inputError, inputNormal } from "./styles";
import FieldWrapper from "./FieldWrapper";



interface CodFieldsProps {
    register: UseFormRegister<OrderFormValues>;
    errors: FieldErrors<OrderFormValues>;
}

export default function CodFields({
    register,
    errors,
}: CodFieldsProps) {
    return (
        <div className="space-y-3">
            <FieldWrapper
                label="Full Name"
                icon={User}
                error={errors.fullName?.message}
            >
                <input
                    type="text"
                    placeholder="John Doe"
                    className={`${errors.fullName ? inputError : inputNormal} pl-9 pr-3`}
                    {...register("fullName", {
                        required:
                            "Full name is required",
                    })}
                />
            </FieldWrapper>

            <FieldWrapper
                label="Email Address"
                icon={Mail}
                error={errors.email?.message}
            >
                <input
                    type="email"
                    placeholder="john@example.com"
                    className={`${errors.email ? inputError : inputNormal} pl-9 pr-3`}
                    {...register("email", {
                        required:
                            "Email is required",
                        pattern: {
                            value:
                                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message:
                                "Invalid email",
                        },
                    })}
                />
            </FieldWrapper>

            <FieldWrapper
                label="Phone Number"
                icon={Phone}
                error={errors.phone?.message}
            >
                <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className={`${errors.phone ? inputError : inputNormal} pl-9 pr-3`}
                    {...register("phone", {
                        required:
                            "Phone number is required",
                        pattern: {
                            value:
                                /^[+\d\s\-()]{7,15}$/,
                            message:
                                "Invalid phone number",
                        },
                    })}
                />
            </FieldWrapper>

            <div>
                <label className="block mb-1.5 text-xs font-medium text-muted-foreground">
                    Delivery Address
                </label>

                <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />

                    <textarea
                        rows={3}
                        placeholder="House no, Road, Area, City"
                        className={`w-full resize-none rounded-lg border bg-background py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${errors.address
                            ? "border-destructive focus:ring-destructive/40"
                            : "border-input"
                            }`}
                        {...register("address", {
                            required:
                                "Delivery address is required",
                        })}
                    />
                </div>

                {errors.address && (
                    <p className="mt-1 text-[11px] text-destructive">
                        {errors.address.message}
                    </p>
                )}
            </div>
        </div>
    );
}