"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Shop } from "../app/types";
import { SHOPS } from "../constants/shops";

interface CartContextType {
    cart: CartItem[];
    addToCart: (shop: Shop) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    const addToCart = (shop: Shop) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === shop.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === shop.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...shop, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === id);

            if (!existing) {
                if (delta <= 0) return prev;
                const shop = SHOPS.find((s) => s.id === id);
                if (!shop) return prev;
                return [...prev, { ...shop, quantity: delta }];
            }

            const newQuantity = existing.quantity + delta;
            if (newQuantity <= 0) {
                return prev.filter((item) => item.id !== id);
            }

            return prev.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            );
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                isLoading: !isInitialized,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export { CartContext };
