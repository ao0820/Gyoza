
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const NEWS_ITEMS = [
    { date: "2026.04.15", title: "公式サイトをオープンしました！", type: "News", color: "bg-brand-red text-white", content: "毎年恒例、餃子フェスの公式サイトがリニューアルオープン！今年のテーマは「和風モダン×熱狂」。" },
    { date: "2026.04.10", title: "前売りチケットの販売を開始しました。", type: "Info", color: "bg-brand-orange text-white", content: "お得な食券付き前売りチケットの販売を開始しました。各コンビニ、プレイガイドにてお買い求めいただけます。" },
    { date: "2026.04.01", title: "今年のスペシャルゲストが決定！詳細は後日発表。", type: "Event", color: "bg-brand-yellow text-sumi", content: "ステージを盛り上げる豪華ゲストが決定しました。詳細は4月中旬に発表予定！お楽しみに。" },
    { date: "2026.03.20", title: "出店店舗の募集を締め切りました。", type: "Info", color: "bg-brand-orange text-white", content: "多数のご応募ありがとうございました。厳正なる審査の上、出店店舗を決定いたします。" },
    { date: "2026.02.15", title: "「餃子フェス 2026」開催決定！", type: "News", color: "bg-brand-red text-white", content: "今年も久屋大通公園にて、5日間の熱い戦いが幕を開けます。" },
];

export default function NewsSection() {
    return (
        <section className="py-24 container mx-auto px-4" id="news">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-brand-red mb-4">NEWS</h2>
                    <p className="text-gray-500 font-bold tracking-widest">最新情報</p>
                </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto space-y-6">
                {NEWS_ITEMS.slice(0, 3).map((item, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <article className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/30 flex flex-col md:flex-row gap-4 items-start md:items-center relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 group-hover:bg-brand-red transition-colors" />
                            <span className={`${item.color} text-xs font-bold px-4 py-1.5 rounded-full min-w-[80px] text-center shadow-sm`}>
                                {item.type}
                            </span>
                            <span className="text-gray-400 text-sm font-mono tracking-wider">{item.date}</span>
                            <p className="font-bold text-lg group-hover:text-brand-red transition-colors flex-1">{item.title}</p>
                        </article>
                    </ScrollReveal>
                ))}
            </div>
            {/* Show 'Read More' or similar if needed, or stick to just top 3 for the main page */}
        </section>
    );
}
