"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import { SHOPS } from "@/constants/shops";
import { useCart } from "@/context/CartContext";
import { Shop, CartItem } from "@/app/types";

export default function ReservePage() {
    const router = useRouter();
    const { cart, updateQuantity, totalItems, totalPrice, isLoading } = useCart();

    const handleSubmit = () => {
        if (totalItems > 0) {
            router.push("/reserve/confirm");
        }
    };

    const formatPrice = (price: number) => {
        return `¥${new Intl.NumberFormat("ja-JP").format(price)}`;
    };

    return (
        <>
            <Header />
            <main className="pt-24 pb-40 container mx-auto px-4 min-h-screen">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black text-brand-red mb-4">RESERVE</h2>
                        <p className="text-gray-500 font-bold">1. メニュー選択</p>
                    </div>
                </ScrollReveal>

                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SHOPS.map((shop: Shop, index: number) => {
                            const qty = cart.find((item: CartItem) => item.id === shop.id)?.quantity || 0;
                            return (
                                <ScrollReveal key={shop.id} delay={index * 0.05}>
                                    <div
                                        className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all border-2 flex flex-col h-full ${qty > 0 ? "border-brand-red ring-2 ring-brand-red/20 scale-[1.02]" : "border-transparent hover:shadow-xl"
                                            }`}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={shop.image}
                                                alt={shop.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-2 right-2 bg-brand-yellow text-xs font-bold px-2 py-1 rounded shadow-md">
                                                {shop.tag}
                                            </div>
                                            {qty > 0 && (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                                    <div className="bg-brand-red text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                                        {qty}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-bold leading-tight">
                                                    {shop.name}
                                                </h3>
                                                <span className="text-brand-red font-black text-lg">
                                                    {formatPrice(shop.price)}
                                                </span>
                                            </div>
                                            <p className="text-gray-500 text-xs line-clamp-2 mb-4 flex-1">
                                                {shop.description}
                                            </p>

                                            <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(shop.id, -1)}
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${qty > 0
                                                        ? "bg-gray-100 text-brand-black hover:bg-gray-200"
                                                        : "bg-gray-50 text-gray-300 cursor-not-allowed"
                                                        }`}
                                                    disabled={qty === 0}
                                                >
                                                    <Minus size={20} />
                                                </button>

                                                <span className={`text-2xl font-black w-16 text-center ${qty > 0 ? "text-brand-red" : "text-gray-300"}`}>
                                                    {qty}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(shop.id, 1)}
                                                    className="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md active:scale-95"
                                                >
                                                    <Plus size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                )}
            </main>

            {/* Sticky Footer */}
            <div className={`fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-gray-100 p-4 z-40 transition-transform duration-300 ${totalItems > 0 ? "translate-y-0" : "translate-y-full"
                }`}>
                <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <div className="bg-brand-black text-white p-3 rounded-full relative">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-black">
                                {totalItems}
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                            <div className="text-sm font-bold text-gray-500">
                                選択数: <span className="text-brand-black text-xl mx-1">{totalItems}</span>点
                            </div>
                            <div className="text-lg font-bold text-sumi">
                                合計金額: <span className="text-brand-red text-2xl ml-1 font-black">{formatPrice(totalPrice)}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full md:w-auto px-12 py-4 bg-brand-red text-white text-lg font-black rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        注文手続きへ進む
                    </button>

                </div>
            </div>

            <Footer />
        </>
    );
}
