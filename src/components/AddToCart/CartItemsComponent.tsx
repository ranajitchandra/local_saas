import { Minus, Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CartItem } from "./types";

interface CartItemsProps {
    items: CartItem[];
    onUpdateQty: (id: CartItem["id"], qty: number) => void;
    onRemove: (id: CartItem["id"]) => void;
    compact?: boolean;
}

export default function CartItems({
    items,
    onUpdateQty,
    onRemove,
    compact = false,
}: CartItemsProps) {
    if (items.length === 0) {
        return (
            <p className="text-muted-foreground text-sm text-center py-8">
                Your cart is empty.
            </p>
        );
    }

    return (
        <div className="space-y-3">
            {items.map((item) => (
                <Card
                    key={item.id}
                    className={`${compact ? "p-3" : "p-4"} border-border bg-card`}
                >
                    <div className={`flex ${compact ? "gap-3" : "gap-4"}`}>
                        {/* Product Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className={`${
                                compact ? "w-18 h-18" : "w-24 h-24"
                            } rounded-lg object-cover bg-muted shrink-0`}
                        />

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                            {/* Title & Price */}
                            <div className="flex justify-between gap-2">
                                <div className="min-w-0">
                                    <h3
                                        className={`font-semibold ${
                                            compact ? "text-sm" : "text-lg"
                                        } text-foreground truncate`}
                                    >
                                        {item.name}
                                    </h3>
                                    <p
                                        className={`${
                                            compact ? "text-xs" : "text-sm"
                                        } text-muted-foreground`}
                                    >
                                        {item.details}
                                    </p>
                                </div>
                                <span
                                    className={`${
                                        compact ? "text-base" : "text-xl"
                                    } font-bold text-primary shrink-0`}
                                >
                                    ${(item.price * item.qty).toFixed(2)}
                                </span>
                            </div>

                            {/* Quantity & Remove */}
                            <div className="mt-2 sm:mt-3 flex items-center justify-between">
                                {/* Quantity Control */}
                                <div className="flex items-center border border-border rounded-md overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onUpdateQty(item.id, Math.max(1, item.qty - 1))
                                        }
                                        className={`${
                                            compact ? "px-2 py-1" : "px-3 py-1"
                                        } hover:bg-muted transition-colors`}
                                    >
                                        <Minus
                                            className={
                                                compact ? "h-3 w-3" : "h-4 w-4"
                                            }
                                        />
                                    </button>
                                    <span
                                        className={`${
                                            compact ? "px-2.5 text-xs" : "px-4 text-sm"
                                        } py-1 font-medium min-w-7 text-center`}
                                    >
                                        {item.qty}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onUpdateQty(item.id, item.qty + 1)
                                        }
                                        className={`${
                                            compact ? "px-2 py-1" : "px-3 py-1"
                                        } hover:bg-muted transition-colors`}
                                    >
                                        <Plus
                                            className={
                                                compact ? "h-3 w-3" : "h-4 w-4"
                                            }
                                        />
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    type="button"
                                    onClick={() => onRemove(item.id)}
                                    className={`flex items-center gap-1 text-destructive ${
                                        compact ? "text-xs" : "text-sm"
                                    } hover:opacity-80 transition-opacity`}
                                >
                                    <Trash2
                                        className={
                                            compact ? "h-3.5 w-3.5" : "h-4 w-4"
                                        }
                                    />
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
