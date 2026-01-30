"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface CartButtonProps {
    onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
    const { totalItems } = useCart();

    if (totalItems === 0) return null;

    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-40 bg-brand-black text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group border-2 border-brand-yellow"
        >
            <div className="relative">
                <ShoppingCart size={28} className="group-hover:text-brand-yellow transition-colors" />
                <span className="absolute -top-3 -right-3 bg-brand-red text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-brand-black">
                    {totalItems}
                </span>
            </div>
        </button>
    );
}
