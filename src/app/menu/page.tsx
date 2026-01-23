"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import MenuModal from "@/app/components/MenuModal";

import { SHOPS } from "@/constants/shops";
import { Shop } from "@/app/types";

export default function MenuPage() {
    const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black text-brand-red mb-4">MENU</h2>
                        <p className="text-gray-500 font-bold">出店店舗一覧</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHOPS.map((shop: Shop, index: number) => (
                        <ScrollReveal key={shop.id} delay={index * 0.05}>
                            <div
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group h-full flex flex-col transition-transform hover:scale-105 active:scale-95"
                                onClick={() => setSelectedShop(shop)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={shop.image}
                                        alt={shop.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-brand-yellow text-xs font-bold px-2 py-1 rounded shadow-md">
                                        {shop.tag}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">
                                            {shop.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {shop.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 text-brand-orange font-bold text-right text-sm">
                                        詳細を見る →
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </main>
            <Footer />

            <MenuModal
                shop={selectedShop}
                onClose={() => setSelectedShop(null)}
            />
        </>
    );
}
