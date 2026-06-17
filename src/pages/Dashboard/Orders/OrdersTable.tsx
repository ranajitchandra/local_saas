
import { useMemo, useState } from "react";

import { Download, Filter, MoreVertical, Pencil, Plus, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency, getStatusStyle } from "@/utils/order";
import type { Order, OrderStatus } from "@/types/dashboard/order";


/* ---------------- DATA ---------------- */

const initialOrders: Order[] = [
    {
        id: "#QM-82910",
        customer: "Ethan Hunt",
        initials: "EH",
        date: "Oct 24, 2023",
        amount: 542,
        status: "Delivered",
    },
    {
        id: "#QM-82911",
        customer: "Sarah Williams",
        initials: "SW",
        date: "Oct 24, 2023",
        amount: 1290.45,
        status: "Shipped",
    },
    {
        id: "#QM-82912",
        customer: "John Doe",
        initials: "JD",
        date: "Oct 23, 2023",
        amount: 89.99,
        status: "Pending",
    },
    {
        id: "#QM-82913",
        customer: "Anna Lee",
        initials: "AL",
        date: "Oct 23, 2023",
        amount: 230.15,
        status: "Delivered",
    },
    {
        id: "#QM-82914",
        customer: "Michael Parks",
        initials: "MP",
        date: "Oct 22, 2023",
        amount: 45,
        status: "Shipped",
    },
    {
        id: "#QM-82915",
        customer: "Michael Parks",
        initials: "MP",
        date: "Oct 22, 2023",
        amount: 45,
        status: "Shipped",
    },
];

/* ---------------- COMPONENT ---------------- */

export default function OrdersTable() {
    const [orders, setOrders] =
        useState<Order[]>(initialOrders);

    const [page, setPage] = useState(1);

    const [editOrder, setEditOrder] =
        useState<Order | null>(null);

    const [openCreate, setOpenCreate] =
        useState(false);

    const [newOrder, setNewOrder] =
        useState({
            customer: "",
            amount: "",
            status: "Pending" as OrderStatus,
        });

    const ITEMS_PER_PAGE = 5;

    const totalPages = Math.ceil(
        orders.length / ITEMS_PER_PAGE
    );

    const paginatedOrders = useMemo(
        () =>
            orders.slice(
                (page - 1) * ITEMS_PER_PAGE,
                page * ITEMS_PER_PAGE
            ),
        [orders, page]
    );

    /* CREATE */

    const createOrder = () => {
        const order: Order = {
            id: `#QM-${Date.now()}`,
            customer: newOrder.customer,
            initials: newOrder.customer.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase(),
            date: new Date().toLocaleDateString(),
            amount: Number(newOrder.amount),
            status: newOrder.status,
        };

        setOrders([
            order,
            ...orders,
        ]);

        setOpenCreate(false);

        setNewOrder({
            customer: "",
            amount: "",
            status: "Pending",
        });
    };

    /* UPDATE */

    const updateOrder = () => {
        if (!editOrder) return;

        setOrders((prev) =>
            prev.map((item) =>
                item.id === editOrder.id
                    ? editOrder
                    : item
            )
        );

        setEditOrder(null);
    };

    return (
        <div className="quickmart-theme">
            <div className="rounded-3xl border bg-card shadow-sm">

                {/* HEADER */}

                <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between">

                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                        >
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                        </Button>

                        <Button
                            variant="outline"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                    </div>

                    <Dialog
                        open={openCreate}
                        onOpenChange={
                            setOpenCreate
                        }
                    >
                        <DialogTrigger
                            asChild
                        >
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Create Manual
                                Order
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Create
                                    Order
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-4">

                                <Input
                                    placeholder="Customer Name"
                                    value={
                                        newOrder.customer
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setNewOrder(
                                            {
                                                ...newOrder,
                                                customer:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                />

                                <Input
                                    type="number"
                                    placeholder="Amount"
                                    value={
                                        newOrder.amount
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setNewOrder(
                                            {
                                                ...newOrder,
                                                amount:
                                                    e.target.value,
                                            }
                                        )
                                    }
                                />

                                <Select
                                    value={
                                        newOrder.status
                                    }
                                    onValueChange={(
                                        value
                                    ) =>
                                        setNewOrder(
                                            {
                                                ...newOrder,
                                                status:
                                                    value as OrderStatus,
                                            }
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

                                <Button
                                    className="w-full"
                                    onClick={
                                        createOrder
                                    }
                                >
                                    Save Order
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* TABLE */}

                <div className="overflow-x-auto">
                    <table className="w-full min-w-225">
                        <thead>
                            <tr className="bg-muted">
                                <th className="px-6 py-4 text-left">
                                    Order ID
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Customer
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Date
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Amount
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedOrders.map(
                                (order) => (
                                    <tr
                                        key={
                                            order.id
                                        }
                                        className="border-t"
                                    >
                                        <td className="px-6 py-5 font-semibold text-primary">
                                            {
                                                order.id
                                            }
                                        </td>

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">
                                                    {
                                                        order.initials
                                                    }
                                                </div>

                                                <span>
                                                    {
                                                        order.customer
                                                    }
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-5">
                                            {
                                                order.date
                                            }
                                        </td>

                                        <td className="px-6 py-5 font-semibold">
                                            {formatCurrency(
                                                order.amount
                                            )}
                                        </td>

                                        <td className="px-6 py-5">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                                                    order.status
                                                )}`}
                                            >
                                                {
                                                    order.status
                                                }
                                            </span>
                                        </td>

                                        <td className="px-6 py-5 text-center">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() =>
                                                    setEditOrder(
                                                        order
                                                    )
                                                }
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>

                                            <Button
                                                size="icon"
                                                variant="ghost"
                                            >
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}

                <div className="flex flex-col gap-4 border-t p-5 md:flex-row md:items-center md:justify-between">

                    <p className="text-sm text-muted-foreground">
                        Showing{" "}
                        {
                            paginatedOrders.length
                        }{" "}
                        of {orders.length}{" "}
                        orders
                    </p>

                    <div className="flex items-center gap-2">

                        <Button
                            variant="outline"
                            size="icon"
                            disabled={
                                page === 1
                            }
                            onClick={() =>
                                setPage(
                                    page - 1
                                )
                            }
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        {Array.from({
                            length: totalPages,
                        }).map(
                            (_, index) => (
                                <Button
                                    key={
                                        index
                                    }
                                    variant={
                                        page ===
                                            index +
                                            1
                                            ? "default"
                                            : "outline"
                                    }
                                    size="icon"
                                    onClick={() =>
                                        setPage(
                                            index +
                                            1
                                        )
                                    }
                                >
                                    {index +
                                        1}
                                </Button>
                            )
                        )}

                        <Button
                            variant="outline"
                            size="icon"
                            disabled={
                                page ===
                                totalPages
                            }
                            onClick={() =>
                                setPage(
                                    page + 1
                                )
                            }
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* EDIT DIALOG */}

            <Dialog
                open={!!editOrder}
                onOpenChange={(
                    open
                ) => {
                    if (!open)
                        setEditOrder(
                            null
                        );
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Edit Order
                        </DialogTitle>
                    </DialogHeader>

                    {editOrder && (
                        <div className="space-y-4">

                            <Input
                                value={
                                    editOrder.customer
                                }
                                onChange={(
                                    e
                                ) =>
                                    setEditOrder(
                                        {
                                            ...editOrder,
                                            customer:
                                                e
                                                    .target
                                                    .value,
                                        }
                                    )
                                }
                            />

                            <Input
                                type="number"
                                value={
                                    editOrder.amount
                                }
                                onChange={(
                                    e
                                ) =>
                                    setEditOrder(
                                        {
                                            ...editOrder,
                                            amount:
                                                Number(
                                                    e
                                                        .target
                                                        .value
                                                ),
                                        }
                                    )
                                }
                            />

                            <Select
                                value={
                                    editOrder.status
                                }
                                onValueChange={(
                                    value
                                ) =>
                                    setEditOrder(
                                        {
                                            ...editOrder,
                                            status:
                                                value as OrderStatus,
                                        }
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

                            <Button
                                className="w-full"
                                onClick={
                                    updateOrder
                                }
                            >
                                Update Order
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}