import { CheckCircle2, Package, Truck, MapPin, ShieldCheck, Phone, MessageSquare, CreditCard, Circle } from "lucide-react";

type Product = {
    id: number;
    name: string;
    color: string;
    size: number;
    price: number;
    image: string;
    qty: number;
};

const products: Product[] = [
    {
        id: 1,
        name: "Neo-Velocity Runner X1",
        color: "Tech Red",
        size: 42,
        price: 129.99,
        image: "https://placehold.co/80x80",
        qty: 1,
    },
    {
        id: 2,
        name: "SonicWave Noise Cancelling Pro",
        color: "Midnight Black",
        size: 0,
        price: 249.5,
        image: "https://placehold.co/80x80",
        qty: 1,
    },
];

const steps = [
    {
        title: "Processing",
        icon: CheckCircle2,
        active: true,
    },
    {
        title: "Packed",
        icon: Package,
        active: true,
    },
    {
        title: "Out for Delivery",
        icon: Truck,
        active: true,
    },
    {
        title: "Delivered",
        icon: MapPin,
        active: false,
    },
];




function InputField({ label, value}: { label: string; value: string}) {
    return (
        <div>
            <label className="mb-1 block text-xs font-medium">
                {label}
            </label>

            <input
                readOnly
                value={value}
                className="h-11 w-full rounded-lg border bg-background px-3 text-sm"
            />
        </div>
    );
}

function PaymentCard({ icon, title, value, active }: { icon: React.ReactNode; title: string; value?: string; active?: boolean }) {

    return (
        <div
            className={`flex items-center gap-3 rounded-xl border p-4 ${active
                ? "border-primary bg-primary/5"
                : ""
                }`}
        >
            {icon}

            <span className="font-medium">
                {title}
            </span>

            {value && (
                <span className="ml-auto text-sm font-semibold">
                    {value}
                </span>
            )}
        </div>
    );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {

    return (
        <div className="flex items-center justify-between">
            <span
                className={
                    highlight
                        ? "font-semibold text-primary"
                        : "text-muted-foreground"
                }
            >
                {label}
            </span>

            <span
                className={
                    highlight
                        ? "font-bold text-primary"
                        : ""
                }
            >
                {value}
            </span>
        </div>
    );
}

export default function DeliveryCheckoutPage() {
    return (
        <div className="quickmart-theme min-h-screen bg-background p-3 md:p-5">
            <div className="mx-auto max-w-7xl space-y-5">

                {/* Tracking Progress */}
                <section className="rounded-2xl border bg-card p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.title}
                                    className="flex flex-1 items-center"
                                >
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full
                      ${step.active
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            <Icon size={18} />
                                        </div>

                                        <span className="mt-2 text-center text-xs font-medium md:text-sm">
                                            {step.title}
                                        </span>
                                    </div>

                                    {index !== steps.length - 1 && (
                                        <div className="mx-2 h-[2px] flex-1 bg-border" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Content */}
                <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">

                    {/* Left */}
                    <div className="space-y-5">

                        {/* Order Summary */}
                        <section className="rounded-2xl border bg-card p-4">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                    1
                                </div>

                                <h2 className="font-semibold">
                                    Order Summary
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {products.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-3 rounded-xl bg-muted p-3"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-16 w-16 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium">
                                                {item.name}
                                            </h3>

                                            <p className="text-xs text-muted-foreground">
                                                Color: {item.color}
                                                {item.size > 0 &&
                                                    ` | Size: ${item.size}`}
                                            </p>

                                            <p className="mt-1 font-semibold text-primary">
                                                ${item.price}
                                            </p>
                                        </div>

                                        <div className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                            Qty: {item.qty}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Delivery Details */}
                        <section className="rounded-2xl border bg-card p-4">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                    2
                                </div>

                                <h2 className="font-semibold">
                                    Delivery Details
                                </h2>
                            </div>

                            <div className="grid gap-4">
                                <InputField
                                    label="Full Name"
                                    value="John Doe"
                                />

                                <InputField
                                    label="Street Address"
                                    value="123 Tech Avenue, Silicon District"
                                />

                                <div className="grid gap-4 md:grid-cols-2">
                                    <InputField
                                        label="Landmark / Building"
                                        value="Near Green Park Metro"
                                    />

                                    <InputField
                                        label="Contact Number"
                                        value="+1 234 567 890"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Payment */}
                        <section className="rounded-2xl border bg-card p-4">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                    3
                                </div>

                                <h2 className="font-semibold">
                                    Payment Method
                                </h2>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2">
                                <PaymentCard
                                    active
                                    icon={<CreditCard size={18} />}
                                    title="Card Payment"
                                    value="**** 4242"
                                />

                                <PaymentCard
                                    icon={<Circle size={18} />}
                                    title="Cash on Delivery"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Right */}
                    <aside className="space-y-5">

                        {/* Amount Summary */}
                        <section className="rounded-2xl border bg-card p-5">
                            <h3 className="mb-5 font-semibold">
                                Order Summary
                            </h3>

                            <div className="space-y-3 text-sm">
                                <Row
                                    label="Subtotal"
                                    value="$379.49"
                                />

                                <Row
                                    label="Shipping Fee"
                                    value="$12.00"
                                />

                                <Row
                                    label="Service Tax (5%)"
                                    value="$18.97"
                                />
                            </div>

                            <div className="mt-5 border-t pt-4">
                                <Row
                                    label="Total Amount"
                                    value="$410.46"
                                    highlight
                                />
                            </div>
                        </section>

                        {/* Verification */}
                        <section className="rounded-2xl bg-primary p-5 text-primary-foreground">
                            <div className="mb-5 flex items-center justify-center gap-2 font-semibold">
                                <ShieldCheck size={18} />
                                Verification
                            </div>

                            <div className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-xl bg-white text-primary">
                                QR
                            </div>

                            <p className="mb-4 text-center text-xs uppercase">
                                Share this OTP with delivery agent
                            </p>

                            <div className="mb-5 flex justify-center gap-2">
                                {["4", "9", "1", "0", "5", "8"].map(
                                    (digit) => (
                                        <div
                                            key={digit}
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 font-semibold"
                                        >
                                            {digit}
                                        </div>
                                    )
                                )}
                            </div>

                            <button className="w-full rounded-xl bg-white py-3 font-medium text-primary transition hover:opacity-90">
                                Confirm Handover
                            </button>
                        </section>

                        {/* Driver */}
                        <section className="rounded-2xl border bg-card p-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://placehold.co/60x60"
                                    alt=""
                                    className="h-12 w-12 rounded-full"
                                />

                                <div className="flex-1">
                                    <h4 className="text-sm font-semibold">
                                        Alex Thompson
                                    </h4>

                                    <p className="text-xs text-muted-foreground">
                                        Arriving in 8 mins
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Toyota RAV4
                                    </p>
                                </div>

                                <button className="rounded-full bg-muted p-2">
                                    <Phone size={16} />
                                </button>

                                <button className="rounded-full bg-muted p-2">
                                    <MessageSquare size={16} />
                                </button>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
}
