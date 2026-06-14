import { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Pro Runner X1",
    details: "Size: 42 | Color: Aurora Teal",
    price: 129,
    qty: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: 2,
    name: "CyberPack 2.0",
    details: "Capacity: 25L | Material: Cordura",
    price: 85,
    qty: 1,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400",
  },
];

export function useCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = +(subtotal * 0.05).toFixed(2);
  const discount = 20;
  const total = subtotal + tax - discount;
  const itemCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return {
    cartItems,
    setCartItems,
    updateQty,
    removeItem,
    clearCart,
    subtotal,
    tax,
    discount,
    total,
    itemCount,
  };
}