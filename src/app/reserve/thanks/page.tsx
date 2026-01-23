"use client";

import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCart } from "../../../context/CartContext";

export default function ThanksPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 min-h-screen flex items-center justify-center bg-washi relative overflow-hidden">
                {/* Confetti Animation Background (Simplified CSS/Motion) */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                            background: ["#E60012", "#F39800", "#FFD900"][i % 3],
                            left: `${Math.random() * 100}%`,
                            top: `-10%`
                        }}
                        animate={{
                            top: "110%",
                            x: (Math.random() - 0.5) * 200,
                            rotate: 360
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "linear"
                        }}
                    />
                ))}

                <div className="w-full max-w-2xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white rounded-[40px] p-12 md:p-20 shadow-2xl text-center relative overflow-hidden"
                    >
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red" />

                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                            className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <Check size={48} strokeWidth={4} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-3xl md:text-4xl font-black text-sumi mb-6"
                        >
                            ご予約ありがとうございます！
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-4 text-gray-600 font-medium mb-12"
                        >
                            <p>
                                注文が確定いたしました。<br />
                                確認メールをお送りしましたのでご確認ください。
                            </p>
                            <p className="text-lg">
                                イベント当日、<br className="md:hidden" />
                                <span className="text-brand-red font-bold">「予約専用カウンター」</span>
                                までお越しください。
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-10 py-4 bg-brand-black text-white rounded-full font-bold hover:bg-brand-red transition-colors duration-300 tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                トップページへ戻る
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
