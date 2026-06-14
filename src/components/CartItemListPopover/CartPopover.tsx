import {
    ShoppingCart, Minus, Plus, Trash2, CreditCard,
    ShieldCheck, Truck, User, Mail, Phone, MapPin,
} from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ─── types ─────────────────────────────────────────────── */
type PaymentMethod = "card" | "cod";

interface CardFields {
    cardNumber: string;
    expiry: string;
    cvv: string;
}

interface CodFields {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

type OrderFormValues = {
    paymentMethod: PaymentMethod;
    couponCode: string;
} & CardFields & CodFields;

/* ─── static data ────────────────────────────────────────── */
const initialCartItems = [
    {
        id: 1,
        name: "Pro Runner X1",
        details: "Size: 42 | Color: Aurora Teal",
        price: 129,
        qty: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
        id: 2,
        name: "CyberPack 2.0",
        details: "Capacity: 25L | Material: Cordura",
        price: 85,
        qty: 1,
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400",
    },
];

/* ─── shared classes ─────────────────────────────────────── */
const inputBase =
    "w-full h-10 rounded-lg border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";
const inputNormal = `${inputBase} border-input`;
const inputError = `${inputBase} border-destructive focus:ring-destructive/40`;

/* ─── helpers ────────────────────────────────────────────── */
const formatCardNumber = (val: string) =>
    val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

const formatExpiry = (val: string) => {
    const d = val.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

/* ─── sub-components ─────────────────────────────────────── */
function FieldWrapper({
    label,
    icon: Icon,
    error,
    children,
}: {
    label: string;
    icon: React.ElementType;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{label}</label>
            <div className="relative">
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                {children}
            </div>
            {error && <p className="text-[11px] text-destructive mt-1">{error}</p>}
        </div>
    );
}

/* ─── main component ─────────────────────────────────────── */
export default function CartDropdown() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    const tax = +(subtotal * 0.05).toFixed(2);
    const discount = 20;
    const total = subtotal + tax - discount;
    const itemCount = cartItems.reduce((s, i) => s + i.qty, 0);

    const updateQty = (id: number, delta: number) =>
        setCartItems((prev) =>
            prev.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)
        );

    const removeItem = (id: number) =>
        setCartItems((prev) => prev.filter((item) => item.id !== id));

    /* ── react-hook-form ── */
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm<OrderFormValues>({
        defaultValues: {
            paymentMethod: "card",
            couponCode: "",
            cardNumber: "", expiry: "", cvv: "",
            fullName: "", email: "", phone: "", address: "",
        },
    });

    const paymentMethod = watch("paymentMethod");

    const onSubmit = (data: OrderFormValues) => {
        const payload = {
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
        console.log("✅ Order submitted:", payload);
    };

    /* ── card fields ── */
    const CardFields = () => (
        <div className="space-y-3">
            <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Card Number</label>
                <Controller
                    name="cardNumber"
                    control={control}
                    rules={{ required: "Card number is required", minLength: { value: 19, message: "Enter a valid 16-digit card number" } }}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="**** **** **** 1234"
                            className={`${errors.cardNumber ? inputError : inputNormal} px-3`}
                            onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
                        />
                    )}
                />
                {errors.cardNumber && <p className="text-[11px] text-destructive mt-1">{errors.cardNumber.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Expiry Date</label>
                    <Controller
                        name="expiry"
                        control={control}
                        rules={{
                            required: "Required",
                            pattern: { value: /^\d{2}\/\d{2}$/, message: "Use MM/YY" },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="MM/YY"
                                className={`${errors.expiry ? inputError : inputNormal} px-3`}
                                onChange={(e) => field.onChange(formatExpiry(e.target.value))}
                            />
                        )}
                    />
                    {errors.expiry && <p className="text-[11px] text-destructive mt-1">{errors.expiry.message}</p>}
                </div>
                <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">CVV</label>
                    <input
                        type="password"
                        placeholder="***"
                        maxLength={4}
                        className={`${errors.cvv ? inputError : inputNormal} px-3`}
                        {...register("cvv", {
                            required: "Required",
                            minLength: { value: 3, message: "Min 3 digits" },
                        })}
                    />
                    {errors.cvv && <p className="text-[11px] text-destructive mt-1">{errors.cvv.message}</p>}
                </div>
            </div>
        </div>
    );

    /* ── COD fields ── */
    const CodFields = () => (
        <div className="space-y-3">
            <FieldWrapper label="Full Name" icon={User} error={errors.fullName?.message}>
                <input
                    type="text"
                    placeholder="John Doe"
                    className={`${errors.fullName ? inputError : inputNormal} pl-9 pr-3`}
                    {...register("fullName", { required: "Full name is required" })}
                />
            </FieldWrapper>

            <FieldWrapper label="Email Address" icon={Mail} error={errors.email?.message}>
                <input
                    type="email"
                    placeholder="john@example.com"
                    className={`${errors.email ? inputError : inputNormal} pl-9 pr-3`}
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                    })}
                />
            </FieldWrapper>

            <FieldWrapper label="Phone Number" icon={Phone} error={errors.phone?.message}>
                <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className={`${errors.phone ? inputError : inputNormal} pl-9 pr-3`}
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: { value: /^[+\d\s\-()]{7,15}$/, message: "Invalid phone number" },
                    })}
                />
            </FieldWrapper>

            <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Delivery Address</label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <textarea
                        rows={3}
                        placeholder="House no, Road, Area, City"
                        className={`w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-colors ${errors.address ? "border-destructive focus:ring-destructive/40" : "border-input"}`}
                        {...register("address", { required: "Delivery address is required" })}
                    />
                </div>
                {errors.address && <p className="text-[11px] text-destructive mt-1">{errors.address.message}</p>}
            </div>
        </div>
    );

    /* ── payment method toggle ── */
    const PaymentToggle = ({ size = "md" }: { size?: "sm" | "md" }) => (
        <div className={`grid grid-cols-2 gap-${size === "sm" ? "2" : "3"} mb-4`}>
            {(["card", "cod"] as PaymentMethod[]).map((method) => (
                <button
                    key={method}
                    type="button"
                    onClick={() => setValue("paymentMethod", method, { shouldValidate: true })}
                    className={`flex items-center gap-${size === "sm" ? "2" : "3"} p-${size === "sm" ? "2.5" : "3"} rounded-lg border-2 transition-all text-left ${paymentMethod === method
                            ? "border-primary bg-accent"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                >
                    <div className={`p-1.5 rounded-md flex-shrink-0 ${paymentMethod === method ? "bg-primary/10" : "bg-muted"}`}>
                        {method === "card"
                            ? <CreditCard className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} ${paymentMethod === method ? "text-primary" : "text-muted-foreground"}`} />
                            : <Truck className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} ${paymentMethod === method ? "text-primary" : "text-muted-foreground"}`} />
                        }
                    </div>
                    <div className="min-w-0">
                        <p className={`${size === "sm" ? "text-xs" : "text-sm"} font-semibold truncate ${paymentMethod === method ? "text-primary" : "text-foreground"}`}>
                            {method === "card" ? (size === "sm" ? "Credit / Debit" : "Credit / Debit Card") : "Cash on Delivery"}
                        </p>
                        <p className={`${size === "sm" ? "text-[10px]" : "text-xs"} text-muted-foreground truncate`}>
                            {method === "card" ? (size === "sm" ? "Visa, Mastercard" : "Visa, Mastercard, Amex") : "Pay when items arrive"}
                        </p>
                    </div>
                    <div className={`ml-auto ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} rounded-full border-2 flex items-center justify-center flex-shrink-0 ${paymentMethod === method ? "border-primary" : "border-border"}`}>
                        {paymentMethod === method && <div className={`${size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2"} rounded-full bg-primary`} />}
                    </div>
                </button>
            ))}
        </div>
    );

    /* ── order summary ── */
    const OrderSummary = () => (
        <div className="space-y-3 text-sm">
            <div className="flex justify-between text-foreground">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-foreground">Shipping Fee</span>
                <span className="text-primary font-semibold">FREE</span>
            </div>
            <div className="flex justify-between text-foreground">
                <span>Tax (VAT 5%)</span><span>${tax.toFixed(2)}</span>
            </div>
            <div className="rounded-lg bg-muted p-3 flex justify-between">
                <span className="text-muted-foreground text-xs sm:text-sm">Promo: WELCOME20</span>
                <span className="text-primary font-semibold">-${discount.toFixed(2)}</span>
            </div>
            <Separator className="bg-border" />
            <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-foreground">Total</span>
                <span className="font-bold text-2xl text-primary">${total.toFixed(2)}</span>
            </div>
            <Button type="submit" className="w-full h-11 mt-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base">
                Place Order
            </Button>
            <div className="flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground" />
                <p className="text-xs text-center text-muted-foreground">Secure SSL Encryption</p>
            </div>
            <p className="text-xs text-center text-muted-foreground">
                By placing an order, you agree to our{" "}
                <span className="text-primary cursor-pointer hover:underline">Terms &amp; Conditions</span>.
            </p>
        </div>
    );

    /* ── coupon ── */
    const CouponCard = () => (
        <Card className="p-4 border-border bg-background">
            <div className="text-xs font-semibold text-muted-foreground mb-3 tracking-wider">HAVE A COUPON?</div>
            <div className="flex gap-2">
                <input
                    placeholder="Enter code"
                    className="flex-1 w-20  rounded-md border border-input bg-muted px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    {...register("couponCode")}
                    onChange={(e) => setValue("couponCode", e.target.value.toUpperCase())}
                />
                <Button type="button" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4">
                    Apply
                </Button>
            </div>
        </Card>
    );

    /* ── cart item list ── */
    const CartItems = ({ compact = false }: { compact?: boolean }) => (
        <div className="space-y-3">
            {cartItems.length === 0 ? (
                <p className="text-muted-foreground text-sm text-center py-8">Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <Card key={item.id} className={`${compact ? "p-3" : "p-4"} border-border bg-card`}>
                        <div className={`flex ${compact ? "gap-3" : "gap-4"}`}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className={`${compact ? "w-18 h-18" : "w-24 h-24"} rounded-lg object-cover bg-muted flex-shrink-0`}
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between gap-2">
                                    <div className="min-w-0">
                                        <h3 className={`font-semibold ${compact ? "text-sm" : "text-lg"} text-foreground truncate`}>{item.name}</h3>
                                        <p className={`${compact ? "text-xs" : "text-sm"} text-muted-foreground`}>{item.details}</p>
                                    </div>
                                    <span className={`${compact ? "text-base" : "text-xl"} font-bold text-primary flex-shrink-0`}>
                                        ${(item.price * item.qty).toFixed(2)}
                                    </span>
                                </div>
                                <div className="mt-2 sm:mt-3 flex items-center justify-between">
                                    <div className="flex items-center border border-border rounded-md overflow-hidden">
                                        <button type="button" onClick={() => updateQty(item.id, -1)} className={`${compact ? "px-2 py-1" : "px-3 py-1"} hover:bg-muted transition-colors`}>
                                            <Minus className={compact ? "h-3 w-3" : "h-4 w-4"} />
                                        </button>
                                        <span className={`${compact ? "px-2.5 text-xs" : "px-4 text-sm"} py-1 font-medium min-w-[1.75rem] text-center`}>
                                            {item.qty}
                                        </span>
                                        <button type="button" onClick={() => updateQty(item.id, 1)} className={`${compact ? "px-2 py-1" : "px-3 py-1"} hover:bg-muted transition-colors`}>
                                            <Plus className={compact ? "h-3 w-3" : "h-4 w-4"} />
                                        </button>
                                    </div>
                                    <button type="button" onClick={() => removeItem(item.id)} className={`flex items-center gap-1 text-destructive ${compact ? "text-xs" : "text-sm"} hover:opacity-80 transition-opacity`}>
                                        <Trash2 className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))
            )}
        </div>
    );

    /* ─────────────────── render ─────────────────── */
    return (
        <div className="quickmart-theme">
            <Popover>
                <PopoverTrigger asChild>
                    <button className="relative text-foreground hover:text-primary transition-colors cursor-pointer">
                        <ShoppingCart className="h-5.5 w-5.5" />
                        <span className="absolute -top-1 -right-1.5 bg-primary text-primary-foreground text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-background">
                            {itemCount}
                        </span>
                    </button>
                </PopoverTrigger>

                <PopoverContent
                    align="end"
                    sideOffset={16}
                    className="p-0 w-[95vw] sm:w-[600px] lg:w-[960px] max-w-[95vw] border-border bg-background shadow-2xl rounded-xl overflow-hidden"
                >
                    {/* single <form> wraps everything so submit works from either Place Order button */}
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>

                        {/* ══ MOBILE (<lg) ══ */}
                        <div className="flex flex-col lg:hidden max-h-[92vh] overflow-y-auto">
                            <div className="px-4 pt-4 pb-2 sticky top-0 bg-background z-10 border-b border-border">
                                <h2 className="text-xl font-bold text-foreground">Your Shopping Cart</h2>
                                <p className="text-xs text-muted-foreground">Review your selection and proceed to checkout.</p>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground font-semibold tracking-wide">
                                        {itemCount} ITEM{itemCount !== 1 ? "S" : ""} IN CART
                                    </span>
                                    <button type="button" onClick={() => setCartItems([])} className="text-primary font-medium hover:underline">
                                        Clear All
                                    </button>
                                </div>

                                <CartItems compact />

                                {/* Payment */}
                                <div>
                                    <h3 className="text-sm font-bold text-foreground mb-2">Payment Method</h3>
                                    <PaymentToggle size="sm" />
                                    {paymentMethod === "card" ? <CardFields /> : <CodFields />}
                                </div>

                                {/* Summary */}
                                <Card className="p-4 border-border bg-card">
                                    <h3 className="text-base font-bold text-foreground mb-3">Order Summary</h3>
                                    <OrderSummary />
                                </Card>

                                <CouponCard />
                            </div>
                        </div>

                        {/* ══ DESKTOP (lg+) ══ */}
                        <div className="hidden lg:grid lg:grid-cols-[1fr_320px]" style={{ maxHeight: "90vh" }}>
                            {/* LEFT */}
                            <div className="p-5 bg-background flex flex-col overflow-hidden">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold text-foreground">Your Shopping Cart</h2>
                                    <p className="text-sm text-muted-foreground">Review your selection and proceed to secure checkout.</p>
                                </div>
                                <div className="flex items-center justify-between text-xs mb-4">
                                    <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground font-semibold tracking-wide">
                                        {itemCount} ITEM{itemCount !== 1 ? "S" : ""} IN CART
                                    </span>
                                    <button type="button" onClick={() => setCartItems([])} className="text-primary font-medium hover:underline">
                                        Clear All
                                    </button>
                                </div>

                                {/* scrollable item list */}
                                <div className="overflow-y-auto flex-1 pr-1">
                                    <CartItems />
                                </div>

                                {/* Payment */}
                                <div className="mt-5">
                                    <h3 className="text-base font-bold text-foreground mb-3">Payment Method</h3>
                                    <PaymentToggle />
                                    {paymentMethod === "card" ? <CardFields /> : <CodFields />}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="border-l border-border bg-card p-5 overflow-y-auto">
                                <Card className="p-5 border-border bg-background">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Order Summary</h3>
                                    <OrderSummary />
                                </Card>
                                <div className="mt-3">
                                    <CouponCard />
                                </div>
                            </div>
                        </div>

                    </form>
                </PopoverContent>
            </Popover>
        </div>
    );
}