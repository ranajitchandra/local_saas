import type { CartItem } from "@/types/cart.types";
import {
    createContext,
    createElement,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

type AddCartItem = Omit<CartItem, "qty"> & {
    qty?: number;
};

interface CartContextValue {
    cartItems: CartItem[];
    addItem: (item: AddCartItem) => void;
    updateQty: (id: CartItem["id"], qty: number) => void;
    removeItem: (id: CartItem["id"]) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addItem = (item: AddCartItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + (item.qty ?? 1) }
                        : cartItem
                );
            }

            return [...prev, { ...item, qty: item.qty ?? 1 }];
        });
    };

    const updateQty = (id: CartItem["id"], qty: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, qty) } : item
            )
        );
    };

    const removeItem = (id: CartItem["id"]) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const value = useMemo(
        () => ({
            cartItems,
            addItem,
            updateQty,
            removeItem,
            clearCart,
        }),
        [cartItems]
    );

    return createElement(CartContext.Provider, { value }, children);
}

export function useCart() {
    const cart = useContext(CartContext);

    if (!cart) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return cart;
}
