
import ScrollReveal from "./ScrollReveal";

export default function HowToSection() {
    const steps = [
        {
            num: "01",
            title: "チケットを購入",
            desc: "会場入口かWEBで食券を購入。",
            icon: "🎫"
        },
        {
            num: "02",
            title: "お店に並ぶ",
            desc: "お目当ての餃子列へGO！",
            icon: "🚶"
        },
        {
            num: "03",
            title: "餃子をゲット",
            desc: "アツアツの餃子を受け取る。",
            icon: "🥟"
        },
        {
            num: "04",
            title: "乾杯！",
            desc: "ビールと一緒に楽しもう！",
            icon: "🍻"
        }
    ];

    return (
        <section className="py-20 bg-pattern-dots text-white bg-brand-red relative" id="guide">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-white mb-4 drop-shadow-md">HOW TO</h2>
                        <p className="text-white/80 font-bold tracking-widest">楽しみ方</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden group hover:bg-white/20 transition-colors">
                                <div className="absolute -right-4 -top-4 text-8xl opacity-10 font-black font-mono">{step.num}</div>
                                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">{step.icon}</div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm opacity-80 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
