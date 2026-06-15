import type { CartItem } from "@/types/cart.types";
import CartItemCard from "./CartItemCard";


interface CartItemsProps {
    items: CartItem[];
    compact?: boolean;
    updateQty: (
        id: number,
        delta: number
    ) => void;
    removeItem: (id: number) => void;
}

export default function CartItems({
    items,
    compact = false,
    updateQty,
    removeItem,
}: CartItemsProps) {
    if (!items.length) {
        return (
            <p className="py-8 text-center text-sm text-muted-foreground">
                Your cart is empty.
            </p>
        );
    }

    return (
        <div className="space-y-3">
            {items.map((item) => (
                <CartItemCard
                    key={item.id}
                    item={item}
                    compact={compact}
                    updateQty={updateQty}
                    removeItem={removeItem}
                />
            ))}
        </div>
    );
}