"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import PaymentSimulator from "@/app/components/PaymentSimulator";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/app/types";
import { CreditCard, Smartphone } from "lucide-react";

export default function ReserveConfirmPage() {
    const router = useRouter();
    const { cart, totalItems, totalPrice, isLoading: isCartLoading, clearCart } = useCart();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    const formatPrice = (price: number) => {
        return `¥${new Intl.NumberFormat("ja-JP").format(price)}`;
    };

    // Filter selected shops
    const selectedShops = cart;

    if (isCartLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-washi">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
            </div>
        );
    }

    if (totalItems === 0 && !isSubmitting) {
        if (typeof window !== "undefined") router.replace("/reserve");
        return null;
    }

    const paymentMethods = [
        { id: "credit", name: "クレジットカード", icon: CreditCard },
        { id: "paypay", name: "PayPay", icon: Smartphone },
        { id: "linepay", name: "LINE Pay", icon: Smartphone },
        { id: "rakuten", name: "楽天Pay", icon: Smartphone },
        { id: "dpay", name: "d払い", icon: Smartphone },
        { id: "aupay", name: "au PAY", icon: Smartphone },
    ];

    const validate = () => {
        if (!name) return "お名前を入力してください";
        if (!email) return "メールアドレスを入力してください";
        if (email !== emailConfirm) return "メールアドレスが一致しません";
        if (!email.includes("@")) return "正しいメールアドレスを入力してください";
        if (!paymentMethod) return "支払い方法を選択してください";
        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        setError("");
        setShowPayment(true);
    };

    const handlePaymentComplete = async () => {
        try {
            const gasUrl = process.env.NEXT_PUBLIC_GAS_URL_ORDER;
            if (gasUrl) {
                const payload = {
                    type: "order",
                    name,
                    email,
                    paymentMethod: paymentMethods.find(p => p.id === paymentMethod)?.name,
                    orders: selectedShops.map((s: CartItem) => ({
                        id: s.id,
                        name: s.name,
                        quantity: s.quantity,
                        price: s.price,
                    })),
                    totalPrice: totalPrice,
                    timestamp: new Date().toISOString(),
                };

                await fetch(gasUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
            }
        } catch (err) {
            console.error("Submission error:", err);
        }

        clearCart();
        router.push("/reserve/thanks");
    };

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black text-brand-red mb-4">CONFIRM</h2>
                        <p className="text-gray-500 font-bold">2. 注文内容の確認・入力</p>
                    </div>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">

                    {/* Order Summary */}
                    <section className="mb-12">
                        <h3 className="text-xl font-bold text-sumi mb-6 pb-2 border-b-2 border-gray-100 flex justify-between items-center">
                            注文内容
                            <span className="text-sm font-normal text-gray-500">合計 {totalItems} 点</span>
                        </h3>
                        <div className="space-y-4">
                            {selectedShops.map((shop: CartItem) => (
                                <div key={shop.id} className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl">
                                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                                        <Image src={shop.image} alt={shop.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-sumi mb-1 truncate">{shop.name}</h4>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs bg-brand-yellow px-2 py-0.5 rounded text-brand-black font-bold whitespace-nowrap">
                                                {shop.tag}
                                            </span>
                                            <span className="text-sm text-gray-400 font-bold">
                                                単価: {formatPrice(shop.price)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-gray-400">
                                            x{shop.quantity}
                                        </div>
                                        <div className="text-xl font-black text-brand-red">
                                            {formatPrice(shop.price * shop.quantity)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total Price */}
                        <div className="mt-6 p-6 bg-brand-black rounded-2xl flex items-center justify-between text-white shadow-lg">
                            <span className="text-lg font-bold">合計金額</span>
                            <div className="text-right">
                                <span className="text-sm block opacity-70 mb-1">消費税込</span>
                                <span className="text-3xl font-black text-brand-yellow">{formatPrice(totalPrice)}</span>
                            </div>
                        </div>

                        <div className="mt-8 text-right">
                            <button
                                onClick={() => router.back()}
                                className="text-sm font-bold text-gray-500 hover:text-brand-black underline disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                注文内容を修正する
                            </button>
                        </div>
                    </section>


                    {/* Customer Form */}
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-xl font-bold text-sumi mb-6 pb-2 border-b-2 border-gray-100">
                            お客様情報
                        </h3>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 text-red-500 font-bold rounded-xl text-center border border-red-100">
                                {error}
                            </div>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label className="block font-bold text-gray-700 mb-2">
                                    お名前 <span className="text-brand-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                    placeholder="あおい"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-bold text-gray-700 mb-2">
                                    メールアドレス <span className="text-brand-red">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                    placeholder="aoi@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-bold text-gray-700 mb-2">
                                    メールアドレス（確認） <span className="text-brand-red">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                    placeholder="aoi@example.com"
                                    value={emailConfirm}
                                    onChange={(e) => setEmailConfirm(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                        </div>

                        {/* Step 3: 支払い方法選択 */}
                        <section className="mt-12">
                            <h3 className="text-xl font-bold text-sumi mb-6 pb-2 border-b-2 border-gray-100">
                                支払い方法
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {paymentMethods.map((method) => {
                                    const Icon = method.icon;
                                    return (
                                        <button
                                            key={method.id}
                                            type="button"
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`relative p-6 rounded-2xl border-2 transition-all text-center ${paymentMethod === method.id
                                                    ? "border-brand-red bg-brand-red/5 ring-2 ring-brand-red/20"
                                                    : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <Icon size={32} className={`mx-auto mb-3 ${paymentMethod === method.id ? "text-brand-red" : "text-gray-400"
                                                }`} />
                                            <div className="font-bold text-sumi text-sm">{method.name}</div>
                                        </button>
                                    );
                                })}
                            </div>
                        </section>

                        <div className="mt-12 text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto md:px-24 py-5 bg-brand-red text-white text-xl font-black rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                                        送信中...
                                    </>
                                ) : (
                                    "予約を確定する"
                                )}
                            </button>
                            <p className="mt-4 text-xs text-gray-400">
                                ※個人情報は予約管理のみに使用いたします。
                            </p>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />

            {/* Payment Simulator */}
            {showPayment && (
                <PaymentSimulator
                    paymentMethod={paymentMethods.find(p => p.id === paymentMethod)?.name || ""}
                    amount={totalPrice}
                    onComplete={handlePaymentComplete}
                />
            )}
        </>
    );
}
