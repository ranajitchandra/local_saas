
import { useState } from "react";
import { Plus } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import type { Order } from "@/types/dashboard/order";


interface Props {
    onCreate: (order: Order) => void;
}

export function CreateOrderDialog({
    onCreate,
}: Props) {
    const [customer, setCustomer] = useState("");
    const [amount, setAmount] = useState("");

    const [status, setStatus] =
        useState<Order["status"]>("Pending");

    const handleSubmit = () => {
        const order: Order = {
            id: `#QM-${Date.now()}`,
            customer,
            initials: customer
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase(),
            date: new Date().toLocaleDateString(),
            amount: Number(amount),
            status,
        };

        onCreate(order);

        setCustomer("");
        setAmount("");
        setStatus("Pending");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Manual Order
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create Order
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label>
                            Customer Name
                        </Label>

                        <Input
                            value={customer}
                            onChange={(e) =>
                                setCustomer(
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div>
                        <Label>Amount</Label>

                        <Input
                            type="number"
                            value={amount}
                            onChange={(e) =>
                                setAmount(
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div>
                        <Label>Status</Label>

                        <Select
                            value={status}
                            onValueChange={(v) =>
                                setStatus(
                                    v as Order["status"]
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>

                                <SelectItem value="Shipped">
                                    Shipped
                                </SelectItem>

                                <SelectItem value="Delivered">
                                    Delivered
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        className="w-full"
                        onClick={handleSubmit}
                    >
                        Save Order
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}