"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import { CheckCircle, Mail, MapPin, Ticket } from "lucide-react";
import Link from "next/link";

export default function TicketCompletePage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 min-h-screen bg-washi">
                <div className="container mx-auto px-4 max-w-3xl">
                    <ScrollReveal>
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
                            {/* Success Icon */}
                            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle size={56} />
                            </div>

                            <h1 className="text-4xl font-black text-sumi mb-4">
                                購入申し込み完了！
                            </h1>
                            <p className="text-gray-600 text-lg mb-8">
                                食券のご購入ありがとうございます
                            </p>

                            {/* Next Steps */}
                            <div className="space-y-6 text-left max-w-2xl mx-auto mb-10">
                                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-black text-xl">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-sumi mb-2 flex items-center gap-2">
                                            <Mail size={24} className="text-brand-red" />
                                            確認メールをご確認ください
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            ご登録いただいたメールアドレスに確認メールをお送りしました。
                                            メールが届かない場合は、迷惑メールフォルダをご確認ください。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-black text-xl">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-sumi mb-2 flex items-center gap-2">
                                            <MapPin size={24} className="text-brand-red" />
                                            会場受付で引き換え
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            イベント当日、会場受付にて確認メールをご提示ください。
                                            食券と引き換えいたします。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-2xl">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-black text-xl">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-sumi mb-2 flex items-center gap-2">
                                            <Ticket size={24} className="text-brand-red" />
                                            餃子フェスを楽しもう！
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            食券を使って、全国各地の絶品餃子をお楽しみください。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Important Notice */}
                            <div className="bg-brand-yellow/10 border-2 border-brand-yellow p-6 rounded-2xl mb-8 text-left">
                                <h3 className="text-lg font-black text-sumi mb-3">ご注意</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 確認メールは必ず保存してください</li>
                                    <li>• 会場受付での引き換えが必要です</li>
                                    <li>• 食券の使用期限は会期最終日までです</li>
                                    <li>• キャンセル・払い戻しはできません</li>
                                </ul>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="inline-block bg-brand-red text-white font-black text-lg px-12 py-4 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    トップページへ
                                </Link>
                                <Link
                                    href="/menu"
                                    className="inline-block bg-white text-brand-red border-2 border-brand-red font-black text-lg px-12 py-4 rounded-full shadow-lg hover:bg-brand-red hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    メニューを見る
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
            <Footer />
        </>
    );
}
