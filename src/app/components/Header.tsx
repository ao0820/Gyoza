"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "TOP", path: "/" },
        { name: "MENU", path: "/menu" },
        { name: "ACCESS", path: "/access" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-brand-black/95 backdrop-blur-md shadow-lg py-2"
                : "bg-gradient-to-b from-black/70 to-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-washi font-black text-xl shadow-lg group-hover:scale-110 transition-transform border-2 border-white">
                        餃
                    </div>
                    <div className="flex flex-col text-white">
                        <span className="text-xs font-bold tracking-widest leading-none">JAPAN</span>
                        <span className="text-2xl font-black tracking-tighter leading-none">GYOZA FES</span>
                    </div>
                </Link>
                <nav className="hidden md:flex gap-8 font-bold text-sm items-center">
                    {[
                        { name: "TOP", path: "/" },
                        { name: "NEWS", path: "/#news" },
                        { name: "TICKET", path: "/#ticket" },
                        { name: "HOW TO", path: "/#guide" },
                        { name: "MENU", path: "/#menu" },
                        { name: "ACCESS", path: "/#access" },
                    ].map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`transition-all hover:-translate-y-0.5 px-4 py-2 rounded-full text-white hover:bg-white/20`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/menu" className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-black shadow-lg hover:bg-white hover:text-brand-red transition-all">
                        全メニュー
                    </Link>
                </nav>
                <button className="md:hidden text-white">
                    <Menu size={28} />
                </button>
            </div>
        </header>
    );
}
