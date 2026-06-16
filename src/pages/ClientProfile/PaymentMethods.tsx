import {
    CreditCard,
    Wallet,
    Banknote,
    Smartphone,
    Pencil,
    Plus,
    type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PaymentMethodForm } from "@/types/clientProfile";
import { useState } from "react";
import PaymentMethodModal from "./Modal/PaymentMethodModal";

type PaymentMethodItem = PaymentMethodForm & {
    id: number;
    description: string;
    icon: LucideIcon;
};

const getPaymentIcon = (provider: string) => {
    const normalizedProvider = provider.toLowerCase();

    if (normalizedProvider.includes("card")) {
        return CreditCard;
    }

    if (
        normalizedProvider.includes("cash") ||
        normalizedProvider.includes("cod")
    ) {
        return Banknote;
    }

    if (
        normalizedProvider.includes("mobile") ||
        normalizedProvider.includes("bkash") ||
        normalizedProvider.includes("nagad")
    ) {
        return Smartphone;
    }

    return Wallet;
};

const getPaymentDescription = (data: PaymentMethodForm) => {
    if (data.accountNumber) {
        return data.accountNumber;
    }

    return data.provider || "Payment method";
};

const initialPaymentMethods: PaymentMethodItem[] = [
    {
        id: 1,
        name: "Visa Card",
        provider: "Card",
        accountNumber: "**** **** **** 4242 - Expires 12/28",
        description: "**** **** **** 4242 - Expires 12/28",
        isActive: true,
        isDefault: true,
        icon: CreditCard,
    },
    {
        id: 2,
        name: "SSLCommerz",
        provider: "Payment Gateway",
        accountNumber: "",
        description: "Secure online payment gateway",
        isActive: true,
        isDefault: false,
        icon: Wallet,
    },
    {
        id: 3,
        name: "Cash on Delivery",
        provider: "Cash",
        accountNumber: "",
        description: "Pay after receiving your order",
        isActive: true,
        isDefault: false,
        icon: Banknote,
    },
    {
        id: 4,
        name: "bKash",
        provider: "Mobile Banking",
        accountNumber: "+880 17XXXXXX45",
        description: "+880 17XXXXXX45",
        isActive: false,
        isDefault: false,
        icon: Smartphone,
    },
    {
        id: 5,
        name: "Nagad",
        provider: "Mobile Banking",
        accountNumber: "+880 18XXXXXX89",
        description: "+880 18XXXXXX89",
        isActive: false,
        isDefault: false,
        icon: Smartphone,
    },
];

export default function PaymentMethods() {
    const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
    const [open, setOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<PaymentMethodItem>();

    const handleAdd = () => {
        setEditingItem(undefined);
        setOpen(true);
    };

    const handleEdit = (item: PaymentMethodItem) => {
        setEditingItem(item);
        setOpen(true);
    };

    const handleSubmit = (data: PaymentMethodForm) => {
        if (editingItem) {
            setPaymentMethods((currentMethods) =>
                currentMethods.map((method) =>
                    method.id === editingItem.id
                        ? {
                            ...method,
                            ...data,
                            description: getPaymentDescription(data),
                            icon: getPaymentIcon(data.provider),
                        }
                        : method
                )
            );
            return;
        }

        setPaymentMethods((currentMethods) => [
            ...currentMethods,
            {
                ...data,
                id: Date.now(),
                description: getPaymentDescription(data),
                icon: getPaymentIcon(data.provider),
            },
        ]);
    };

    return (
        <>
            <div className="bg-card border rounded-2xl p-5 md:p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Payment Methods
                        </h2>

                        <p className="text-muted-foreground text-sm">
                            Manage your payment options
                        </p>
                    </div>

                    <Button onClick={handleAdd} className="gap-2">
                        <Plus size={16} />
                        Add
                    </Button>
                </div>

                <div className="space-y-4">
                    {paymentMethods.map((method) => {
                        const Icon = method.icon;

                        return (
                            <div
                                key={method.id}
                                className="flex items-center justify-between rounded-xl border p-4 hover:bg-muted/50 transition"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">
                                                {method.name}
                                            </h3>

                                            {method.isDefault && (
                                                <Badge>
                                                    Default
                                                </Badge>
                                            )}
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Badge
                                        variant={
                                            method.isActive
                                                ? "default"
                                                : "secondary"
                                        }
                                    >
                                        {method.isActive
                                            ? "Active"
                                            : "Inactive"}
                                    </Badge>

                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => handleEdit(method)}
                                    >
                                        <Pencil size={16} />
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <PaymentMethodModal
                open={open}
                onOpenChange={setOpen}
                initialData={editingItem}
                onSubmit={handleSubmit}
            />
        </>
    );
}
