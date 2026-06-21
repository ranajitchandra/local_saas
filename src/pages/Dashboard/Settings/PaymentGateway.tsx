import {
    CreditCard,
    Landmark,
    Wallet,
    Smartphone,
} from "lucide-react";

type Gateway = {
    id: string;
    name: string;
    provider: string;
    status: "Active" | "Inactive";
    icon: React.ElementType;
};

const gateways: Gateway[] = [
    {
        id: "1",
        name: "Stripe",
        provider: "Card Payments",
        status: "Active",
        icon: CreditCard,
    },
    {
        id: "2",
        name: "PayPal",
        provider: "International Wallet",
        status: "Active",
        icon: Wallet,
    },
    {
        id: "3",
        name: "Bank Transfer",
        provider: "ACH & Wire",
        status: "Inactive",
        icon: Landmark,
    },
    {
        id: "4",
        name: "Apple Pay",
        provider: "Mobile Payments",
        status: "Active",
        icon: Smartphone,
    },
];

export default function PaymentGateway() {
    return (
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold">
                    Payment Gateway
                </h2>

                <p className="text-sm text-muted-foreground">
                    Configure and manage available payment
                    providers.
                </p>
            </div>
            <div className="overflow-x-auto">
                <div className="min-w-100 space-y-4">
                    {gateways.map((gateway) => {
                        const Icon = gateway.icon;

                        return (
                            <div
                                key={gateway.id}
                                className="flex justify-between gap-4 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-lg bg-primary/10 p-3">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>

                                    <div className="space-y-0.5">
                                        <div className="flex items-center gap-4">
                                            <h3 className="font-medium">
                                                {gateway.name}
                                            </h3>
                                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${gateway.status ===
                                                "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}
                                            >
                                                {gateway.status}
                                            </span>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {gateway.provider}
                                        </p>
                                    </div>
                                </div>

                                <button className="rounded-lg border px-4 py-2 text-sm">
                                    Configure
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}