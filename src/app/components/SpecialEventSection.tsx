
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function SpecialEventSection() {
    return (
        <section className="py-24 bg-brand-black relative overflow-hidden text-white" id="event">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-5" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-black via-transparent to-brand-black z-10" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-red blur-[100px] opacity-30" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-yellow blur-[100px] opacity-20" />

            <div className="container mx-auto px-4 relative z-20">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-brand-yellow font-bold tracking-widest text-sm mb-2 block">SPECIAL EVENTS</span>
                        <h2 className="text-5xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            <span className="text-brand-red">熱狂</span>ステージ
                        </h2>
                        <p className="text-gray-400 font-bold tracking-widest">豪華ゲストによるスペシャルライブ＆トーク</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Event 1 */}
                    <ScrollReveal delay={0.1}>
                        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <Image
                                    src="/img/gyoza_event1.png"
                                    alt="Special Live"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">LIVE</span>
                                    <p className="text-white font-bold text-lg">5.3 (Sun) 14:00 -</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-black mb-2 text-white group-hover:text-brand-yellow transition-colors">
                                    爆食アイドル「ギョウザ・ガールズ」
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    餃子を愛するアイドルユニットが今年も登場！新曲「肉汁スプラッシュ」を初披露。
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Event 2 */}
                    <ScrollReveal delay={0.2}>
                        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <Image
                                    src="/img/gyoza_event2.png"
                                    alt="Talk Show"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">TALK</span>
                                    <p className="text-white font-bold text-lg">5.4 (Mon) 13:00 -</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-black mb-2 text-white group-hover:text-brand-yellow transition-colors">
                                    No Gyoza, No Life トークショー
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    有名グルメブロガーと人気シェフが語る、究極の餃子論。ここだけの裏話も満載！
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="mt-12 text-center">
                    <button className="text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-brand-black transition-all font-bold tracking-widest text-sm">
                        イベントスケジュール詳細 →
                    </button>
                </div>
            </div>
        </section>
    );
}
