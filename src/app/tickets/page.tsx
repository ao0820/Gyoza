"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import { Ticket, CreditCard, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function TicketsPage() {
    const ticketOptions = [
        { value: 500, tickets: 1, label: "1枚" },
        { value: 1000, tickets: 2, label: "2枚" },
        { value: 1500, tickets: 3, label: "3枚" },
        { value: 2500, tickets: 5, label: "5枚" },
        { value: 5000, tickets: 10, label: "10枚", badge: "お得" },
    ];

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-brand-red via-red-500 to-orange-500 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <ScrollReveal>
                            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                <Ticket size={64} className="text-brand-yellow" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black mb-6">食券購入</h1>
                            <p className="text-xl md:text-2xl font-bold mb-4 opacity-90">
                                餃子フェスを思いっきり楽しもう！
                            </p>
                            <p className="text-lg opacity-80 max-w-2xl mx-auto">
                                会場内で使える食券をご購入いただけます。事前購入でスムーズに餃子を楽しめます。
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Ticket Options */}
                <section className="py-16 bg-washi">
                    <div className="container mx-auto px-4">
                        <ScrollReveal>
                            <h2 className="text-4xl font-black text-center mb-12 text-sumi">
                                食券プラン
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {ticketOptions.map((option, index) => (
                                <ScrollReveal key={option.value} delay={index * 0.1}>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-red relative overflow-hidden group">
                                        {option.badge && (
                                            <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black text-xs font-black px-3 py-1 rounded-full">
                                                {option.badge}
                                            </div>
                                        )}
                                        <div className="text-center">
                                            <div className="inline-block p-4 bg-brand-red/10 rounded-full mb-4 group-hover:bg-brand-red/20 transition-colors">
                                                <Ticket size={48} className="text-brand-red" />
                                            </div>
                                            <h3 className="text-2xl font-black text-sumi mb-2">
                                                {option.label}
                                            </h3>
                                            <div className="text-4xl font-black text-brand-red mb-4">
                                                ¥{option.value.toLocaleString()}
                                            </div>
                                            <p className="text-gray-500 text-sm mb-6">
                                                食券{option.tickets}枚分
                                            </p>
                                            <div className="text-xs text-gray-400 mb-4">
                                                ※1枚500円分
                                            </div>
                                            <Link
                                                href="/tickets/purchase"
                                                className="block w-full bg-brand-red text-white font-bold py-3 px-4 rounded-full hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
                                            >
                                                購入する
                                            </Link>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Purchase */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <ScrollReveal>
                            <h2 className="text-4xl font-black text-center mb-12 text-sumi">
                                購入方法
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-6">
                            <ScrollReveal>
                                <div className="flex gap-6 items-start bg-gray-50 p-6 rounded-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-black text-xl">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-sumi mb-2 flex items-center gap-2">
                                            <MapPin size={24} className="text-brand-red" />
                                            会場受付で購入
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            会場入口の受付にて食券をご購入いただけます。現金のほか、各種キャッシュレス決済にも対応しています。
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="flex gap-6 items-start bg-gray-50 p-6 rounded-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-black text-xl">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-sumi mb-2 flex items-center gap-2">
                                            <Ticket size={24} className="text-brand-red" />
                                            店舗で使用
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            ご希望の餃子店舗にて食券をご提示ください。各店舗1品600円（食券1枚＋現金100円）でお楽しみいただけます。
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Payment Methods */}
                        <ScrollReveal>
                            <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                                <h3 className="text-2xl font-black text-sumi mb-6 flex items-center gap-3">
                                    <CreditCard size={28} className="text-brand-red" />
                                    対応決済方法
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm">
                                        現金
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm">
                                        クレジットカード
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm">
                                        交通系IC
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm">
                                        PayPay
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm">
                                        LINE Pay
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center font-bold text-gray-700 shadow-sm">
                                        d払い
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Operating Hours */}
                        <ScrollReveal>
                            <div className="mt-8 bg-brand-yellow/10 border-2 border-brand-yellow p-6 rounded-2xl">
                                <h3 className="text-xl font-black text-sumi mb-4 flex items-center gap-3">
                                    <Clock size={24} className="text-brand-red" />
                                    受付時間
                                </h3>
                                <p className="text-gray-700 font-bold">
                                    各日 10:00 - 20:00（最終日は19:00まで）
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Notice */}
                        <ScrollReveal>
                            <div className="mt-8 bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-red">
                                <h3 className="font-black text-sumi mb-3">ご注意</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 食券の払い戻しはできません</li>
                                    <li>• 使用期限は会期最終日までです</li>
                                    <li>• 紛失・盗難による再発行はできません</li>
                                    <li>• おつりは出ませんのでご注意ください</li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* CTA */}
                        <ScrollReveal>
                            <div className="mt-12">
                                <div className="text-center mb-8 p-8 bg-gradient-to-r from-brand-red to-orange-500 rounded-2xl text-white">
                                    <h3 className="text-3xl font-black mb-3">オンラインで購入する</h3>
                                    <p className="mb-6 opacity-90">事前購入で会場受付での待ち時間を短縮！</p>
                                    <Link
                                        href="/tickets/purchase"
                                        className="inline-block bg-white text-brand-red font-black text-xl px-16 py-5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                                    >
                                        今すぐ購入する
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link
                                        href="/"
                                        className="inline-block text-gray-500 font-bold hover:text-brand-red transition-colors underline"
                                    >
                                        トップページに戻る
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
