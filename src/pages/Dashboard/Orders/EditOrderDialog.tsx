
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
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
import type { Order } from "@/types/dashboard/order";


interface Props {
    order: Order | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave: (order: Order) => void;
}

export function EditOrderDialog({
    order,
    open,
    onOpenChange,
    onSave,
}: Props) {
    const [form, setForm] =
        useState<Order | null>(order);

    if (!order) return null;

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit Order
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        value={form?.customer}
                        onChange={(e) =>
                            setForm({
                                ...form!,
                                customer:
                                    e.target.value,
                            })
                        }
                    />

                    <Input
                        type="number"
                        value={form?.amount}
                        onChange={(e) =>
                            setForm({
                                ...form!,
                                amount: Number(
                                    e.target.value
                                ),
                            })
                        }
                    />

                    <Select
                        value={form?.status}
                        onValueChange={(v) =>
                            setForm({
                                ...form!,
                                status:
                                    v as Order["status"],
                            })
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

                    <Button
                        className="w-full"
                        onClick={() => {
                            onSave(form!);
                            onOpenChange(false);
                        }}
                    >
                        Update Order
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}