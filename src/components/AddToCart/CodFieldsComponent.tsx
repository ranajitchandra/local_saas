import { User, Mail, Phone, MapPin } from "lucide-react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { INPUT_NORMAL, INPUT_ERROR } from "./constants";
import FieldWrapper from "./FieldWrapper";
import type { OrderFormValues } from "@/types/cart.types";

interface CodFieldsProps {
    register: UseFormRegister<OrderFormValues>;
    errors: FieldErrors<OrderFormValues>;
}

export default function CodFields({ register, errors }: CodFieldsProps) {
    return (
        <div className="space-y-3">
            {/* Full Name */}
            <FieldWrapper label="Full Name" icon={User} error={errors.fullName?.message}>
                <input
                    type="text"
                    placeholder="John Doe"
                    className={`${errors.fullName ? INPUT_ERROR : INPUT_NORMAL} pl-9 pr-3`}
                    {...register("fullName", { required: "Full name is required" })}
                />
            </FieldWrapper>

            {/* Email Address */}
            <FieldWrapper label="Email Address" icon={Mail} error={errors.email?.message}>
                <input
                    type="email"
                    placeholder="john@example.com"
                    className={`${errors.email ? INPUT_ERROR : INPUT_NORMAL} pl-9 pr-3`}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email",
                        },
                    })}
                />
            </FieldWrapper>

            {/* Phone Number */}
            <FieldWrapper label="Phone Number" icon={Phone} error={errors.phone?.message}>
                <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className={`${errors.phone ? INPUT_ERROR : INPUT_NORMAL} pl-9 pr-3`}
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[+\d\s\-()]{7,15}$/,
                            message: "Invalid phone number",
                        },
                    })}
                />
            </FieldWrapper>

            {/* Delivery Address */}
            <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Delivery Address
                </label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <textarea
                        rows={3}
                        placeholder="House no, Road, Area, City"
                        className={`w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-colors ${
                            errors.address
                                ? "border-destructive focus:ring-destructive/40"
                                : "border-input"
                        }`}
                        {...register("address", {
                            required: "Delivery address is required",
                        })}
                    />
                </div>
                {errors.address && (
                    <p className="text-[11px] text-destructive mt-1">
                        {errors.address.message}
                    </p>
                )}
            </div>
        </div>
    );
}
