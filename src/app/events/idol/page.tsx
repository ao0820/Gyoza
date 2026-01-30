"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function IdolEventPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
                <ScrollReveal>
                    <div className="mb-8">
                        <Link href="/#event" className="text-gray-500 hover:text-brand-red transition-colors flex items-center gap-2">
                            ← Back to Top
                        </Link>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image
                                src="/img/gyoza_event1.png"
                                alt="爆食アイドル「ギョウザ・ガールズ」"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                                <span className="bg-brand-red px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                                    SPECIAL LIVE
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black mb-2 leading-tight">
                                    爆食アイドル<br />「ギョウザ・ガールズ」
                                </h1>
                                <p className="text-xl md:text-2xl font-bold opacity-90">
                                    2026.5.3 (Sun) 14:00 - 15:30
                                </p>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-sumi mb-6 border-l-8 border-brand-red pl-6">
                                餃子愛が爆発する！一夜限りのスペシャルステージ
                            </h2>
                            <div className="text-gray-600 leading-loose space-y-6 text-lg">
                                <p>
                                    全国の餃子を食べ歩くために結成されたアイドルユニット「ギョウザ・ガールズ」が、今年も餃子フェスのステージに降臨します！
                                </p>
                                <p>
                                    デビュー曲「羽根つき☆ラブ」や、TikTokで話題の「酢コショウで恋して」など、餃子にちなんだ名曲の数々を披露。
                                    さらに、今回のステージでは待望の新曲「肉汁スプラッシュ」を世界初公開！
                                </p>
                                <p>
                                    ライブの途中では、メンバーによる「利き餃子対決」も開催予定。
                                    彼女たちの底なしの胃袋と、餃子への深い愛を目撃せよ！
                                </p>
                            </div>

                            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200">
                                <h3 className="text-xl font-bold text-sumi mb-4">
                                    出演メンバー
                                </h3>
                                <ul className="grid md:grid-cols-3 gap-6">
                                    <li className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                            {/* Placeholder for member face */}
                                            <div className="w-full h-full bg-brand-red/20"></div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sumi">ミンミン</p>
                                            <p className="text-xs text-gray-500">担当: 焼き餃子</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-brand-yellow/20"></div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sumi">スイ</p>
                                            <p className="text-xs text-gray-500">担当: 水餃子</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-brand-black/20"></div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sumi">アゲハ</p>
                                            <p className="text-xs text-gray-500">担当: 揚げ餃子</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}
