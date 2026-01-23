"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Send, MapPin, Mail, Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

// FAQ Data
const FAQ_ITEMS = [
    {
        q: "ゴミはどこに捨てれば良いですか？",
        a: "会場内のECOステーションへお持ち下さい。ECOステーションでは、ゴミの分別を行っております。分別にご協力ください。どんぶりや食べ残し、箸などラーメンのゴミは、公園の備え付けゴミ箱に捨てないで下さい。"
    },
    {
        q: "食べ物を持ち込んでいいですか？",
        a: "衛生管理上の理由から、食べ物の持ち込みをお断りしています。※ 離乳食は除きます。"
    },
    {
        q: "会場内でタバコは吸えますか？",
        a: "特設の喫煙所内のみ喫煙可能です。それ以外の場所（歩行喫煙含む）は全面禁煙となっております。"
    },
    {
        q: "ペットを連れて入れますか？",
        a: "衛生管理上の理由から、飲食エリア（テント内）はペットの同伴をお断りしています。テラス席の一部ではペット同伴可能なエリアもご用意しております。"
    },
    {
        q: "クレジットカードや電子マネーは使えますか？",
        a: "はい、全店舗で主要なクレジットカード、交通系ICカード、QRコード決済（PayPay, LINE Pay等）がご利用いただけます。現金も使用可能です。"
    },
    {
        q: "雨天の場合は開催されますか？",
        a: "雨天決行ですが、荒天（台風など）の場合は中止となる可能性がございます。開催状況は公式サイトおよび公式SNSにて随時お知らせいたします。"
    }
];

export default function ContactPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-neutral-50">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/img/gyoza.png"
                            alt="Contact Hero"
                            fill
                            className="object-cover brightness-[0.3]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/90 via-transparent to-brand-red/30 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10" />
                    </div>

                    <div className="relative z-10 text-center px-4">
                        <ScrollReveal>
                            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter shadow-black drop-shadow-2xl">
                                CONTACT
                            </h1>
                            <div className="flex items-center justify-center gap-4">
                                <span className="h-[2px] w-12 bg-brand-yellow"></span>
                                <p className="text-xl md:text-2xl text-stone-200 font-bold tracking-widest">お問い合わせ</p>
                                <span className="h-[2px] w-12 bg-brand-yellow"></span>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-20 -mt-20 relative z-20">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-black text-sumi mb-2 flex items-center gap-3">
                                    <Mail className="text-brand-red" />
                                    お問い合わせフォーム
                                </h2>
                                <p className="text-gray-500 mb-8 font-medium">
                                    イベントに関するご質問や取材のご依頼など、お気軽にお問い合わせください。
                                </p>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-red transition-colors">お名前 <span className="text-brand-red">*</span></label>
                                            <input
                                                type="text"
                                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder:text-gray-400"
                                                placeholder="例：餃子 太郎"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-red transition-colors">メールアドレス <span className="text-brand-red">*</span></label>
                                            <input
                                                type="email"
                                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder:text-gray-400"
                                                placeholder="例：taro@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-red transition-colors">件名</label>
                                        <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-gray-700 cursor-pointer">
                                            <option>チケットについて</option>
                                            <option>出店について</option>
                                            <option>取材・メディア関連</option>
                                            <option>その他のお問い合わせ</option>
                                        </select>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-red transition-colors">お問い合わせ内容 <span className="text-brand-red">*</span></label>
                                        <textarea
                                            rows={6}
                                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder:text-gray-400 resize-none"
                                            placeholder="ご質問内容をご記入ください"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-brand-red to-red-600 text-white font-black py-5 rounded-xl shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 transition-all flex items-center justify-center gap-3 text-lg hover:scale-105 active:scale-95 transform duration-150"
                                    >
                                        <Send size={20} />
                                        送信する
                                    </button>
                                </form>
                            </div>
                            <div className="bg-stone-50 px-8 py-6 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                                    通常、3営業日以内にご返信いたします
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="hover:text-brand-red underline">プライバシーポリシー</a>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="space-y-12">
                            <div className="bg-brand-black text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl group-hover:bg-brand-yellow/20 transition-colors" />
                                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <MapPin className="text-brand-yellow" />
                                    開催本部へのアクセス
                                </h3>
                                <div className="space-y-4 relative z-10">
                                    <p className="font-bold text-lg">餃子フェス 2026 実行委員会</p>
                                    <p className="text-gray-300">〒460-0008<br />愛知県名古屋市中区栄3丁目65<br />久屋大通公園 エディオン久屋広場内</p>
                                    <div className="pt-4 flex gap-4">
                                        <a href="tel:052-000-0000" className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                                            <Phone size={16} /> 052-000-0000
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black text-sumi mb-8 relative inline-block">
                                    よくあるご質問
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/30 -z-10" />
                                </h3>
                                <div className="space-y-4">
                                    {FAQ_ITEMS.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${openFaqIndex === index ? 'shadow-lg border-brand-red/30' : 'shadow-sm border-stone-100 hover:border-brand-red/30'}`}
                                        >
                                            <button
                                                onClick={() => toggleFaq(index)}
                                                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
                                            >
                                                <div className="flex gap-4 items-start">
                                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm transition-colors ${openFaqIndex === index ? 'bg-brand-red text-white' : 'bg-stone-100 text-gray-500'}`}>Q</span>
                                                    <h4 className={`font-bold text-lg pt-0.5 transition-colors ${openFaqIndex === index ? 'text-brand-red' : 'text-sumi'}`}>
                                                        {item.q}
                                                    </h4>
                                                </div>
                                                <span className={`flex-shrink-0 transition-transform duration-300 text-brand-red ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                                                    {openFaqIndex === index ? <Minus /> : <Plus />}
                                                </span>
                                            </button>
                                            {openFaqIndex === index && (
                                                <div className="px-6 md:px-8 pb-8 pt-0 ml-12">
                                                    <div className="flex gap-4 items-start border-t border-dashed border-stone-200 pt-6">
                                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-black text-sm text-sumi">A</span>
                                                        <p className="text-gray-600 leading-relaxed font-medium pt-1">
                                                            {item.a}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
