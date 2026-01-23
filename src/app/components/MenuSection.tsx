
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

// Mock data based on typical Gyoza festival items
const MENU_ITEMS = [
    { id: 1, name: "肉汁爆発！王道焼き餃子", shop: "餃子の王様", image: "/img/gyoza.png" },
    { id: 2, name: "とろ〜りチーズ羽根つき餃子", shop: "チーズ工房", image: "/img/gyoza.png" },
    { id: 3, name: "ピリ辛！四川風水餃子", shop: "四川飯店", image: "/img/gyoza.png" },
    { id: 4, name: "海老まるごと一本餃子", shop: "海鮮酒場", image: "/img/gyoza.png" },
    { id: 5, name: "パクチー山盛り餃子", shop: "ASIAN DINING", image: "/img/gyoza.png" },
    { id: 6, name: "黒豚スタミナにんにく餃子", shop: "スタミナ苑", image: "/img/gyoza.png" },
    { id: 7, name: "トリュフ香る創作餃子", shop: "Bistro Gyoza", image: "/img/gyoza.png" },
    { id: 8, name: "揚げてサクサク！スナック餃子", shop: "揚げ物屋", image: "/img/gyoza.png" },
];

export default function MenuSection() {
    return (
        <section className="py-24 bg-washi" id="menu">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-sumi mb-4">MENU</h2>
                        <p className="text-gray-500 font-bold tracking-widest">出店メニュー</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto mb-12">
                    {MENU_ITEMS.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 0.05}>
                            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-brand-red font-bold mb-1">{item.shop}</p>
                                    <h3 className="font-bold text-sumi text-sm md:text-base leading-tight">{item.name}</h3>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/menu" className="inline-block border-2 border-brand-black text-brand-black px-10 py-3 rounded-full font-bold hover:bg-brand-black hover:text-white transition-all tracking-widest">
                        全メニューを見る
                    </Link>
                </div>
            </div>
        </section>
    );
}
