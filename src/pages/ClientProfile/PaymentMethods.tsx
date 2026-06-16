import {
    CreditCard,
    Wallet,
    Banknote,
    Smartphone,
    Pencil,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PaymentMethodForm } from "@/types/clientProfile";
import { useState } from "react";
import PaymentMethodModal from "./Modal/PaymentMethodModal";

const paymentMethods = [
    {
        id: 1,
        name: "Visa Card",
        description: "**** **** **** 4242 • Expires 12/28",
        active: true,
        default: true,
        icon: CreditCard,
    },
    {
        id: 2,
        name: "SSLCommerz",
        description: "Secure online payment gateway",
        active: true,
        icon: Wallet,
    },
    {
        id: 3,
        name: "Cash on Delivery",
        description: "Pay after receiving your order",
        active: true,
        icon: Banknote,
    },
    {
        id: 4,
        name: "bKash",
        description: "+880 17XXXXXX45",
        active: false,
        icon: Smartphone,
    },
    {
        id: 5,
        name: "Nagad",
        description: "+880 18XXXXXX89",
        active: false,
        icon: Smartphone,
    },
];

export default function PaymentMethods() {


    const [open, setOpen] = useState(false);

    const [editingItem, setEditingItem] =
        useState<PaymentMethodForm>();

    const handleAdd = () => {
        setEditingItem(undefined);
        setOpen(true);
    };

    const handleEdit = (
        item: PaymentMethodForm
    ) => {
        setEditingItem(item);
        setOpen(true);
    };

    const handleSubmit = (
        data: PaymentMethodForm
    ) => {
        if (editingItem) {
            console.log("Update", data);
        } else {
            console.log("Create", data);
        }
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

                    <Button onClick={handleAdd}>
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

                                            {method.default && (
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
                                            method.active
                                                ? "default"
                                                : "secondary"
                                        }
                                    >
                                        {method.active
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