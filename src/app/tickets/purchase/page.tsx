"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import PaymentSimulator from "@/app/components/PaymentSimulator";
import { Ticket, User, Mail, Phone, CreditCard, Smartphone } from "lucide-react";

export default function TicketPurchasePage() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState(500);
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    const ticketPlans = [
        { value: 500, tickets: 1, label: "1枚" },
        { value: 1000, tickets: 2, label: "2枚" },
        { value: 1500, tickets: 3, label: "3枚" },
        { value: 2500, tickets: 5, label: "5枚" },
        { value: 5000, tickets: 10, label: "10枚", badge: "お得" },
    ];

    const paymentMethods = [
        { id: "credit", name: "クレジットカード", icon: CreditCard },
        { id: "paypay", name: "PayPay", icon: Smartphone },
        { id: "linepay", name: "LINE Pay", icon: Smartphone },
        { id: "rakuten", name: "楽天Pay", icon: Smartphone },
        { id: "dpay", name: "d払い", icon: Smartphone },
        { id: "aupay", name: "au PAY", icon: Smartphone },
    ];

    const totalAmount = selectedPlan * quantity;
    const totalTickets = ticketPlans.find(p => p.value === selectedPlan)!.tickets * quantity;

    const validate = () => {
        if (!name) return "お名前を入力してください";
        if (!email) return "メールアドレスを入力してください";
        if (email !== emailConfirm) return "メールアドレスが一致しません";
        if (!email.includes("@")) return "正しいメールアドレスを入力してください";
        if (!phone) return "電話番号を入力してください";
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
                    type: "ticket_purchase",
                    name,
                    email,
                    phone,
                    plan: ticketPlans.find(p => p.value === selectedPlan)?.label,
                    planValue: selectedPlan,
                    quantity,
                    totalAmount,
                    totalTickets,
                    paymentMethod: paymentMethods.find(p => p.id === paymentMethod)?.name,
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

        router.push("/tickets/complete");
    };

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 min-h-screen bg-washi">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-block p-4 bg-brand-red/10 rounded-full mb-6">
                                <Ticket size={48} className="text-brand-red" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-sumi mb-4">食券購入</h1>
                            <p className="text-gray-500 font-bold">
                                オンラインで食券を事前購入いただけます
                            </p>
                        </div>
                    </ScrollReveal>

                    <form onSubmit={handleSubmit}>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-10">

                            {/* Error Message */}
                            {error && (
                                <div className="p-4 bg-red-50 text-red-500 font-bold rounded-xl text-center border border-red-100">
                                    {error}
                                </div>
                            )}

                            {/* Step 1: プラン選択 */}
                            <section>
                                <h2 className="text-2xl font-black text-sumi mb-6 pb-2 border-b-2 border-gray-100 flex items-center gap-2">
                                    <CreditCard size={24} className="text-brand-red" />
                                    プラン選択
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {ticketPlans.map((plan) => (
                                        <button
                                            key={plan.value}
                                            type="button"
                                            onClick={() => setSelectedPlan(plan.value)}
                                            className={`relative p-6 rounded-2xl border-2 transition-all text-left ${selectedPlan === plan.value
                                                ? "border-brand-red bg-brand-red/5 ring-2 ring-brand-red/20"
                                                : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            {plan.badge && (
                                                <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black text-xs font-black px-3 py-1 rounded-full">
                                                    {plan.badge}
                                                </div>
                                            )}
                                            <div className="text-3xl font-black text-brand-red mb-2">
                                                ¥{plan.value.toLocaleString()}
                                            </div>
                                            <div className="font-bold text-sumi">{plan.label}</div>
                                            <div className="text-sm text-gray-500 mt-1">
                                                食券{plan.tickets}枚分
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* 数量選択 */}
                                <div className="mt-6">
                                    <label className="block font-bold text-gray-700 mb-3">購入数量</label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-xl transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-3xl font-black text-sumi w-16 text-center">
                                            {quantity}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setQuantity(Math.min(10, quantity + 1))}
                                            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-xl transition-colors"
                                        >
                                            +
                                        </button>
                                        <span className="text-gray-500 ml-4">最大10個まで</span>
                                    </div>
                                </div>

                                {/* 合計表示 */}
                                <div className="mt-6 p-6 bg-brand-black rounded-2xl text-white">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold">食券合計枚数</span>
                                        <span className="text-2xl font-black text-brand-yellow">{totalTickets}枚</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">お支払い金額</span>
                                        <span className="text-3xl font-black text-brand-yellow">¥{totalAmount.toLocaleString()}</span>
                                    </div>
                                </div>
                            </section>

                            {/* Step 2: お客様情報 */}
                            <section>
                                <h2 className="text-2xl font-black text-sumi mb-6 pb-2 border-b-2 border-gray-100 flex items-center gap-2">
                                    <User size={24} className="text-brand-red" />
                                    お客様情報
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block font-bold text-gray-700 mb-2">
                                            お名前 <span className="text-brand-red">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                            placeholder="田中 あおい"
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
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                                placeholder="aoi@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">購入確認メールをお送りします</p>
                                    </div>

                                    <div>
                                        <label className="block font-bold text-gray-700 mb-2">
                                            メールアドレス（確認） <span className="text-brand-red">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                                placeholder="aoi@example.com"
                                                value={emailConfirm}
                                                onChange={(e) => setEmailConfirm(e.target.value)}
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-bold text-gray-700 mb-2">
                                            電話番号 <span className="text-brand-red">*</span>
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="tel"
                                                className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                                                placeholder="090-1234-5678"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Step 3: 支払い方法選択 */}
                            <section>
                                <h2 className="text-2xl font-black text-sumi mb-6 pb-2 border-b-2 border-gray-100 flex items-center gap-2">
                                    <CreditCard size={24} className="text-brand-red" />
                                    支払い方法
                                </h2>

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

                            {/* 注意事項 */}
                            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-red">
                                <h3 className="font-black text-sumi mb-3">ご注意</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 購入後、確認メールをお送りします</li>
                                    <li>• 会場受付でメールをご提示の上、食券をお受け取りください</li>
                                    <li>• 食券の使用期限は会期最終日までです</li>
                                    <li>• キャンセル・払い戻しはできません</li>
                                </ul>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto md:px-24 py-5 bg-brand-red text-white text-xl font-black rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
                                >
                                    購入を確定する
                                </button>
                                <p className="mt-4 text-xs text-gray-400">
                                    ※個人情報は購入管理のみに使用いたします
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />

            {/* Payment Simulator */}
            {showPayment && (
                <PaymentSimulator
                    paymentMethod={paymentMethods.find(p => p.id === paymentMethod)?.name || ""}
                    amount={totalAmount}
                    onComplete={handlePaymentComplete}
                />
            )}
        </>
    );
}
