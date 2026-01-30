"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function TalkEventPage() {
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
                                src="/img/gyoza_event2.png"
                                alt="No Gyoza, No Life トークショー"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                                <span className="bg-brand-yellow text-brand-black px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                                    TALK SHOW
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black mb-2 leading-tight">
                                    No Gyoza, No Life<br />トークショー
                                </h1>
                                <p className="text-xl md:text-2xl font-bold opacity-90">
                                    2026.5.4 (Mon) 13:00 - 14:30
                                </p>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-sumi mb-6 border-l-8 border-brand-yellow pl-6">
                                究極の餃子論を語り尽くす90分
                            </h2>
                            <div className="text-gray-600 leading-loose space-y-6 text-lg">
                                <p>
                                    「餃子とは、宇宙である。」
                                    そんな壮大なテーマをもとに、餃子界のトップランナーたちが集結。
                                </p>
                                <p>
                                    有名グルメブロガー、ミシュラン星付き中華シェフ、そして年間1000皿の餃子を食べる謎の餃子マニアが、
                                    それぞれの視点から「最高の餃子」について激論を交わします。
                                </p>
                                <p>
                                    皮の厚さは0.5mmが最適解か？タレは酢醤油か酢コショウか、はたまた何もつけない派か？
                                    あなたの餃子観を覆すような、目から鱗の話が満載。
                                    ここだけの裏話や、家庭で真似できるプロの隠し味も特別に公開します！
                                </p>
                            </div>

                            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200">
                                <h3 className="text-xl font-bold text-sumi mb-4">
                                    登壇ゲスト
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <div className="font-bold text-lg text-sumi md:w-48">山田 餃子郎</div>
                                        <div className="text-gray-600">
                                            月間100万PVを誇るブログ「毎日が餃子日和」管理人。
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <div className="font-bold text-lg text-sumi md:w-48">王 龍明</div>
                                        <div className="text-gray-600">
                                            高級中華「龍の宴」オーナーシェフ。伝統と革新の餃子クリエイター。
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <div className="font-bold text-lg text-sumi md:w-48">Mystery G</div>
                                        <div className="text-gray-600">
                                            素顔非公開。全国の餃子を食べ歩く謎の覆面評論家。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}
