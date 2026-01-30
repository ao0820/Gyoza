
import ScrollReveal from "./ScrollReveal";

export default function TicketSection() {
    const tickets = [
        {
            price: "¥500",
            label: "食券1枚",
            desc: "まずはこれ！",
            color: "bg-brand-red",
            subColor: "bg-white/20"
        },
        {
            price: "¥2,500",
            label: "食券5枚セット",
            desc: "グループにおすすめ",
            color: "bg-brand-orange",
            subColor: "bg-white/20"
        },
        {
            price: "¥5,000",
            label: "食券10枚セット",
            desc: "たっぷり楽しめる",
            color: "bg-brand-yellow",
            subColor: "bg-black/10",
            textColor: "text-sumi"
        }
    ];

    return (
        <section className="py-24 bg-washi relative overflow-hidden" id="ticket">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-sumi mb-4">TICKET</h2>
                        <p className="text-gray-500 font-bold tracking-widest">チケット情報</p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                    {tickets.map((ticket, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className={`${ticket.color} ${ticket.textColor || 'text-white'} w-64 h-64 rounded-full flex flex-col items-center justify-center relative shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-white group`}>
                                <div className={`absolute top-4 ${ticket.subColor} px-4 py-1 rounded-full text-xs font-bold tracking-wider`}>
                                    {ticket.label}
                                </div>
                                <div className="text-center">
                                    <span className="text-sm font-bold block mb-1 opacity-90">{ticket.desc}</span>
                                    <span className="text-4xl font-black tracking-tighter">{ticket.price}</span>
                                </div>
                                <div className="absolute inset-0 rounded-full border border-dashed border-white/50 m-2" />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center mt-12 space-y-4">
                    <p className="text-gray-500 text-sm font-bold">
                        ※ 全ての電子マネーがご利用いただけます。<br />
                        ※ 会場内での食券販売もございます。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/tickets"
                            className="inline-block bg-brand-red text-white text-xl font-black px-12 py-4 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            食券購入について
                        </a>
                        <a
                            href="/reserve"
                            className="inline-block bg-white text-brand-red border-2 border-brand-red text-xl font-black px-12 py-4 rounded-full shadow-lg hover:bg-brand-red hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            事前予約はこちら
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
