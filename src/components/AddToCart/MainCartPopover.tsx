import { ShoppingCart } from "lucide-react";
import { useForm } from "react-hook-form";
import type { PaymentMethod, OrderFormValues, OrderPayload } from "@/types/cart.types";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCart } from "@/hooks/useCart";

/* ─── Types & Constants ─────────────────────────────────────────── */
import { TAX_RATE, DISCOUNT_AMOUNT } from "./constants";
import { calculateSubtotal, calculateTax, calculateTotal, calculateItemCount } from "./helpers";

/* ─── Sub-Components ─────────────────────────────────────────── */
import CardFields from "./CardFieldsComponent";
import CodFields from "./CodFieldsComponent";
import PaymentToggle from "./PaymentToggleComponent";
import OrderSummary from "./OrderSummaryComponent";
import CouponCard from "./CouponCardComponent";
import CartItems from "./CartItemsComponent";

export default function CartDropdown() {
    /* ─────────────────── STATE ─────────────────── */
    const { cartItems, updateQty, removeItem, clearCart } = useCart();

    /* ─────────────────── CALCULATIONS ─────────────────── */
    const subtotal = calculateSubtotal(cartItems);
    const tax = calculateTax(subtotal, TAX_RATE);
    const discount = subtotal > 0 ? Math.min(DISCOUNT_AMOUNT, subtotal) : 0;
    const total = calculateTotal(subtotal, tax, discount);
    const itemCount = calculateItemCount(cartItems);

    /* ─────────────────── FORM MANAGEMENT ─────────────────── */
    const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<OrderFormValues>({
        defaultValues: {
            paymentMethod: "card",
            couponCode: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
            fullName: "",
            email: "",
            phone: "",
            address: "",
        },
    });

    const paymentMethod = watch("paymentMethod");

    /* ─────────────────── HANDLERS ─────────────────── */
    const handlePaymentMethodChange = (method: PaymentMethod) => {
        setValue("paymentMethod", method, { shouldValidate: true });
    };

    const onSubmit = (data: OrderFormValues) => {
        const payload: OrderPayload = {
            order: {
                items: cartItems,
                subtotal,
                tax,
                discount,
                total,
                couponCode: data.couponCode || null,
            },
            payment:
                data.paymentMethod === "card"
                    ? {
                        method: "card",
                        cardNumber: data.cardNumber,
                        expiry: data.expiry,
                        cvv: data.cvv,
                    }
                    : {
                        method: "cod",
                        fullName: data.fullName,
                        email: data.email,
                        phone: data.phone,
                        address: data.address,
                    },
        };
        console.log("Order submitted:", payload);
    };

    /* ─────────────────── RENDER ─────────────────── */
    return (
        <div>
            <Popover>
                {/* Trigger Button */}
                <PopoverTrigger asChild>
                    <button className="relative text-foreground hover:text-primary transition-colors cursor-pointer">
                        <ShoppingCart className="h-5.5 w-5.5" />
                        <span className="absolute -top-1 -right-1.5 bg-primary text-primary-foreground text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-background">
                            {itemCount}
                        </span>
                    </button>
                </PopoverTrigger>

                {/* Popover Content */}
                <PopoverContent
                    align="end"
                    sideOffset={16}
                    className="p-0 w-[95vw] sm:w-150 lg:w-240 max-w-[95vw] max-h-[92vh] border-border bg-background shadow-2xl rounded-xl overflow-hidden"
                >
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* ════ MOBILE LAYOUT (<lg) ════ */}
                        <div className="flex max-h-[92vh] min-h-0 flex-col overflow-hidden lg:hidden">
                            {/* Header */}
                            <div className="px-4 pt-4 pb-2 sticky top-0 bg-background z-10 border-b border-border">
                                <h2 className="text-xl font-bold text-foreground">
                                    Your Shopping Cart
                                </h2>
                                <p className="text-xs text-muted-foreground">
                                    Review your selection and proceed to checkout.
                                </p>
                            </div>

                            {/* Content */}
                            <div className="min-h-0 overflow-y-auto p-4 space-y-4">
                                {/* Cart Stats */}
                                <div className="flex items-center justify-between text-xs">
                                    <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground font-semibold tracking-wide">
                                        {itemCount} ITEM{itemCount !== 1 ? "S" : ""} IN CART
                                    </span>
                                    <button
                                        type="button"
                                        onClick={clearCart}
                                        className="text-primary font-medium hover:underline"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Cart Items */}
                                <div className="max-h-[34vh] overflow-y-auto pr-1 sm:max-h-[40vh] md:max-h-[46vh]">
                                    <CartItems
                                        items={cartItems}
                                        onUpdateQty={updateQty}
                                        onRemove={removeItem}
                                        compact
                                    />
                                </div>

                                {/* Payment Section */}
                                <div>
                                    <h3 className="text-sm font-bold text-foreground mb-2">
                                        Payment Method
                                    </h3>
                                    <PaymentToggle
                                        paymentMethod={paymentMethod}
                                        onSelect={handlePaymentMethodChange}
                                        size="sm"
                                    />
                                    {paymentMethod === "card" ? (
                                        <CardFields control={control} errors={errors} />
                                    ) : (
                                        <CodFields register={register} errors={errors} />
                                    )}
                                </div>

                                {/* Order Summary Card */}
                                <div className="border border-border rounded-lg p-4 bg-card">
                                    <h3 className="text-base font-bold text-foreground mb-3">
                                        Order Summary
                                    </h3>
                                    <OrderSummary
                                        subtotal={subtotal}
                                        tax={tax}
                                        discount={discount}
                                        total={total}
                                    />
                                </div>

                                {/* Coupon Card */}
                                <CouponCard
                                    register={register}
                                    setValue={setValue}
                                />
                            </div>
                        </div>

                        {/* ════ DESKTOP LAYOUT (lg+) ════ */}
                        <div
                            className="hidden h-[90vh] max-h-[760px] min-h-0 lg:grid lg:grid-cols-[1fr_320px]"
                        >
                            {/* LEFT COLUMN - Cart Items & Payment */}
                            <div className="p-5 bg-background flex min-h-0 flex-col overflow-hidden">
                                {/* Header */}
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-foreground">
                                        Your Shopping Cart
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Review your selection and proceed to secure checkout.
                                    </p>
                                </div>

                                {/* Cart Stats */}
                                <div className="flex items-center justify-between text-xs mb-4">
                                    <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground font-semibold tracking-wide">
                                        {itemCount} ITEM{itemCount !== 1 ? "S" : ""} IN CART
                                    </span>
                                    <button
                                        type="button"
                                        onClick={clearCart}
                                        className="text-primary font-medium hover:underline"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Scrollable Cart Items */}
                                <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                                    <CartItems
                                        items={cartItems}
                                        onUpdateQty={updateQty}
                                        onRemove={removeItem}
                                    />
                                </div>

                                {/* Payment Section */}
                                <div className="mt-5">
                                    <h3 className="text-base font-bold text-foreground mb-3">
                                        Payment Method
                                    </h3>
                                    <PaymentToggle
                                        paymentMethod={paymentMethod}
                                        onSelect={handlePaymentMethodChange}
                                    />
                                    {paymentMethod === "card" ? (
                                        <CardFields control={control} errors={errors} />
                                    ) : (
                                        <CodFields register={register} errors={errors} />
                                    )}
                                </div>
                            </div>

                            {/* RIGHT COLUMN - Order Summary & Coupon */}
                            <div className="border-l border-border bg-card p-5 overflow-y-auto">
                                {/* Order Summary */}
                                <div className="border border-border rounded-lg p-5 bg-background">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Order Summary
                                    </h3>
                                    <OrderSummary
                                        subtotal={subtotal}
                                        tax={tax}
                                        discount={discount}
                                        total={total}
                                    />
                                </div>

                                {/* Coupon Card */}
                                <div className="mt-3">
                                    <CouponCard
                                        register={register}
                                        setValue={setValue}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </PopoverContent>
            </Popover>
        </div>
    );
}
