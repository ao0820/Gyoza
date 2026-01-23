"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { SHOPS } from "../../constants/shops";

export default function MenuSection() {
    // Show only first 8 items for the home page section
    const displayItems = SHOPS.slice(0, 8);

    return (
        <section className="py-24 bg-washi" id="menu">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-sumi mb-4">MENU</h2>
                        <p className="text-gray-500 font-bold tracking-widest">出店メニュー</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto mb-12">
                    {displayItems.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 0.05}>
                            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-brand-yellow text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                                        {item.tag}
                                    </div>
                                </div>
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <h3 className="font-bold text-sumi text-sm md:text-base leading-tight mb-2 line-clamp-2">{item.name}</h3>
                                    <p className="text-[10px] text-gray-400 font-bold">{item.price}円</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/menu" className="inline-block border-2 border-brand-black text-brand-black px-10 py-3 rounded-full font-bold hover:bg-brand-black hover:text-white transition-all tracking-widest">
                        全メニューを見る
                    </Link>
                </div>
            </div>
        </section>
    );
}
