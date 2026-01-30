"use client";

import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import CartButton from "./CartButton";
import CartModal from "./CartModal";

export default function CartWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <CartProvider>
            {children}
            <CartButton onClick={() => setIsCartOpen(true)} />
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </CartProvider>
    );
}
