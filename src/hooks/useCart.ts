import { initialCartItems } from "@/Mock_Data/data";
import { useState } from "react";

export function useCart() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQty = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        qty: Math.max(1, item.qty + delta),
                    }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const clearCart = () => setCartItems([]);

    return {
        cartItems,
        updateQty,
        removeItem,
        clearCart,
    };
}