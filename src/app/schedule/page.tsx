"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
    isHighlight?: boolean;
}

interface ScheduleDay {
    date: string;
    extraClass?: string;
    events: ScheduleEvent[];
}

const SCHEDULE_DATA: ScheduleDay[] = [
    {
        date: "5.1 (Fri) - DAY 1",
        events: [
            { time: "10:00", title: "OPEN", description: "会場オープン！全24店舗の餃子があなたを待っています。" },
            { time: "11:00", title: "オープニングセレモニー", description: "主催者挨拶と特別ゲストによる開会宣言。" },
            { time: "12:00", title: "第1回 利き餃子大会", description: "目隠しをして餃子の具材を当てるクイズ大会！" },
            { time: "14:00", title: "激辛餃子早食い選手権", description: "デスソース餃子を使った極限の戦い。" },
            { time: "19:00", title: "人気投票 中間発表", description: "初日の人気No.1餃子を発表します。" },
            { time: "20:00", title: "CLOSE", description: "本日の営業終了。" }
        ]
    },
    {
        date: "5.3 (Sun) - DAY 3",
        extraClass: "bg-red-50",
        events: [
            { time: "10:00", title: "OPEN", description: "3日目スタート！" },
            { time: "12:00", title: "利き餃子大会", description: "本日はペア対抗戦を開催！" },
            {
                time: "14:00",
                title: "【SPECIAL LIVE】ギョウザ・ガールズ",
                description: "爆食アイドルによるスペシャルステージ！新曲披露あり。",
                isHighlight: true
            },
            { time: "15:30", title: "餃子手作り体験教室", description: "プロの職人が教える包み方講座。" },
            { time: "17:00", title: "スペシャルライブステージ", description: "地元アーティストによるパフォーマンス。" },
            { time: "20:00", title: "CLOSE", description: "本日の営業終了。" }
        ]
    },
    {
        date: "5.4 (Mon) - DAY 4",
        extraClass: "bg-yellow-50",
        events: [
            { time: "10:00", title: "OPEN", description: "4日目スタート！連休も後半戦。" },
            {
                time: "13:00",
                title: "【TALK】No Gyoza, No Life トークショー",
                description: "有名グルメブロガーと人気シェフが語る究極の餃子論。",
                isHighlight: true
            },
            { time: "15:00", title: "激辛餃子早食い選手権", description: "チャンピオン大会開催！" },
            { time: "20:00", title: "CLOSE", description: "本日の営業終了。" }
        ]
    }
];

export default function SchedulePage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-brand-red mb-4">SCHEDULE</h2>
                        <p className="text-gray-500 font-bold">イベント詳細スケジュール</p>
                    </div>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto space-y-20">
                    {SCHEDULE_DATA.map((day, dayIndex) => (
                        <section key={dayIndex} className={`rounded-3xl p-6 md:p-10 ${day.extraClass || ""}`}>
                            <ScrollReveal>
                                <h3 className="text-3xl font-black text-sumi mb-10 border-b-4 border-brand-red inline-block pb-2">
                                    {day.date}
                                </h3>
                            </ScrollReveal>

                            <div className="relative border-l-4 border-gray-200 ml-3 md:ml-6 space-y-12 pb-4">
                                {day.events.map((item, index) => (
                                    <ScrollReveal key={index} delay={index * 0.1}>
                                        <div className="relative pl-8 md:pl-12">
                                            {/* Timeline Dot */}
                                            <div className={`absolute top-1 left-[-11px] md:left-[-14px] w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white shadow-md z-10 ${item.isHighlight ? "bg-brand-yellow scale-125" : "bg-brand-red"}`}></div>

                                            <div className={`bg-white p-6 md:p-8 rounded-3xl shadow-lg border hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${item.isHighlight ? "border-brand-yellow ring-4 ring-brand-yellow/20" : "border-gray-100"}`}>
                                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                                                    <span className={`inline-block px-4 py-1 text-white text-lg font-black rounded-full transition-colors ${item.isHighlight ? "bg-brand-red" : "bg-brand-black group-hover:bg-brand-red"}`}>
                                                        {item.time}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-sumi mb-3 group-hover:text-brand-red transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-500 font-medium leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
