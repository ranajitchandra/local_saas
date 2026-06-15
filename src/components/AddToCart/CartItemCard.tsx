import { Minus, Plus, Trash2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { CartItem } from "@/types/cart.types";


interface CartItemCardProps {
    item: CartItem;
    compact?: boolean;
    updateQty: (
        id: number,
        delta: number
    ) => void;
    removeItem: (id: number) => void;
}

export default function CartItemCard({
    item,
    compact = false,
    updateQty,
    removeItem,
}: CartItemCardProps) {
    return (
        <Card
            className={`${compact ? "p-3" : "p-4"
                } border-border bg-card`}
        >
            <div
                className={`flex ${compact ? "gap-3" : "gap-4"
                    }`}
            >
                <img
                    src={item.image}
                    alt={item.name}
                    className={`${compact
                        ? "h-18 w-18"
                        : "h-24 w-24"
                        } shrink-0 rounded-lg bg-muted object-cover`}
                />

                <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                        <div className="min-w-0">
                            <h3
                                className={`truncate font-semibold text-foreground ${compact
                                    ? "text-sm"
                                    : "text-lg"
                                    }`}
                            >
                                {item.name}
                            </h3>

                            <p
                                className={`text-muted-foreground ${compact
                                    ? "text-xs"
                                    : "text-sm"
                                    }`}
                            >
                                {item.details}
                            </p>
                        </div>

                        <span
                            className={`shrink-0 font-bold text-primary ${compact
                                ? "text-base"
                                : "text-xl"
                                }`}
                        >
                            $
                            {(
                                item.price *
                                item.qty
                            ).toFixed(2)}
                        </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between sm:mt-3">
                        <div className="flex items-center overflow-hidden rounded-md border border-border">
                            <button
                                type="button"
                                onClick={() =>
                                    updateQty(
                                        item.id,
                                        -1
                                    )
                                }
                                className={`hover:bg-muted ${compact
                                    ? "px-2 py-1"
                                    : "px-3 py-1"
                                    }`}
                            >
                                <Minus
                                    className={
                                        compact
                                            ? "h-3 w-3"
                                            : "h-4 w-4"
                                    }
                                />
                            </button>

                            <span
                                className={`min-w-7 py-1 text-center font-medium ${compact
                                    ? "px-2.5 text-xs"
                                    : "px-4 text-sm"
                                    }`}
                            >
                                {item.qty}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    updateQty(
                                        item.id,
                                        1
                                    )
                                }
                                className={`hover:bg-muted ${compact
                                    ? "px-2 py-1"
                                    : "px-3 py-1"
                                    }`}
                            >
                                <Plus
                                    className={
                                        compact
                                            ? "h-3 w-3"
                                            : "h-4 w-4"
                                    }
                                />
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                removeItem(item.id)
                            }
                            className={`flex items-center gap-1 text-destructive hover:opacity-80 ${compact
                                ? "text-xs"
                                : "text-sm"
                                }`}
                        >
                            <Trash2
                                className={
                                    compact
                                        ? "h-3.5 w-3.5"
                                        : "h-4 w-4"
                                }
                            />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}