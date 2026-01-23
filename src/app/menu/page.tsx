"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import MenuModal, { ShopData } from "../components/MenuModal";

const SHOPS: ShopData[] = [
    {
        id: "shop1",
        title: "爆汁肉餃子 元祖店",
        image: "/img/gyoza_shop1.png",
        tag: "肉汁系",
        desc: "厳選された鹿児島県産黒豚を100%使用。噛んだ瞬間に飛び出る肉汁は、まさに小籠包級。皮は北海道産小麦を使用した特製のもっちり皮で、肉の旨味を逃しません。",
        allergy: "小麦・卵・乳・豚肉・大豆"
    },
    {
        id: "shop2",
        title: "とろ〜りチーズ羽根つき餃子",
        image: "/img/gyoza_shop2.png",
        tag: "変わり種",
        desc: "3種類のチーズ（モッツァレラ、チェダー、ゴーダ）を贅沢にブレンド。パリパリのチーズの羽根と、中のとろけるチーズが絶妙なハーモニーを奏でます。",
        allergy: "小麦・乳・豚肉・鶏肉"
    },
    {
        id: "shop3",
        title: "野菜たっぷり健美餃子",
        image: "/img/gyoza_shop3.png",
        tag: "ヘルシー",
        desc: "キャベツ、ニラ、白菜など、1日に必要な野菜の1/3がこの一皿で摂れる！ニンニクを使っていないので、デート中でも安心。生姜の風味が食欲をそそります。",
        allergy: "小麦・大豆"
    },
    {
        id: "shop4",
        title: "激辛！麻辣火鍋餃子",
        image: "/img/gyoza_shop4.png",
        tag: "激辛",
        desc: "本場四川の山椒と唐辛子を効かせた、汗が止まらない旨辛餃子。辛さの中にもしっかりとした豚肉の旨味を感じられます。",
        allergy: "小麦・豚肉・ごま"
    },
    {
        id: "shop5",
        title: "ぷりぷり海老の一本包み",
        image: "/img/gyoza_shop5.png",
        tag: "海鮮",
        desc: "大ぶりの海老を丸ごと一尾包み込みました。海老の食感と、海鮮の濃厚な出汁が口いっぱいに広がります。塩で食べるのがおすすめ。",
        allergy: "小麦・えび・卵"
    },
    {
        id: "shop6",
        title: "揚げお好み焼き餃子",
        image: "/img/gyoza_shop6.png",
        tag: "揚げ",
        desc: "カリッと揚げた餃子に、ソース、マヨネーズ、鰹節をトッピング。まるで大阪のお好み焼きのような味わいが楽しめるB級グルメ餃子。",
        allergy: "小麦・卵・乳・豚肉・りんご"
    },
    {
        id: "shop7",
        title: "博多明太子もちチーズ餃子",
        image: "/img/gyoza_shop7.png",
        tag: "ご当地",
        desc: "博多直送の明太子と、とろけるお餅、チーズを包んだ、女性に大人気の組み合わせ。明太子のピリ辛さがアクセント。",
        allergy: "小麦・乳・豚肉・大豆"
    },
    {
        id: "shop8",
        title: "神戸牛の極上すき焼き餃子",
        image: "/img/gyoza_shop8.png",
        tag: "プレミアム",
        desc: "A5ランクの神戸牛を使用し、すき焼き風の甘辛い味付けに仕上げました。特製の卵黄ダレに絡めて召し上がってください。",
        allergy: "小麦・卵・牛肉・大豆"
    },
    {
        id: "shop9",
        title: "京都九条ネギまみれ餃子",
        image: "/img/gyoza_shop9.png",
        tag: "ご当地",
        desc: "シャキシャキの京都産九条ネギをたっぷりとかけ、柚子胡椒ポン酢でさっぱりと。ネギの甘みと辛味が餃子の旨味を引き立てます。",
        allergy: "小麦・豚肉・大豆"
    },
    {
        id: "shop10",
        title: "北海道バターコーン味噌餃子",
        image: "/img/gyoza_shop10.png",
        tag: "ご当地",
        desc: "北海道の味噌ラーメンをイメージ。濃厚な味噌味のあんに、甘いコーンとバターの香りが食欲をそそる、お子様にも大人気の一品。",
        allergy: "小麦・乳・豚肉・大豆"
    },
    {
        id: "shop11",
        title: "広島レモン塩餃子",
        image: "/img/gyoza_shop11.png",
        tag: "さっぱり",
        desc: "広島県産のレモンを皮ごと練り込み、瀬戸内海の塩で味付け。爽やかなレモンの香りが口いっぱいに広がり、いくらでも食べられます。",
        allergy: "小麦・豚肉"
    },
    {
        id: "shop12",
        title: "スパイシーカレー揚げ餃子",
        image: "/img/gyoza_shop12.png",
        tag: "揚げ",
        desc: "10種類以上のスパイスを独自にブレンドした、本格的なキーマカレーを包んで揚げました。ビールとの相性は抜群！",
        allergy: "小麦・乳・豚肉・牛肉"
    },
    {
        id: "shop13",
        title: "イタリアントマトバジル餃子",
        image: "/img/gyoza_shop13.png",
        tag: "洋風",
        desc: "完熟トマトとフレッシュバジルを使用し、オリーブオイルで焼き上げました。ワインにも合う、新感覚のイタリアン餃子。",
        allergy: "小麦・豚肉"
    },
    {
        id: "shop14",
        title: "韓国風キムチチーズ餃子",
        image: "/img/gyoza.png",
        tag: "韓国風",
        desc: "自家製キムチの程よい酸味と辛味、チーズのまろやかさがベストマッチ。ごま油の香ばしい香りが食欲をそそります。",
        allergy: "小麦・乳・豚肉・ごま・えび"
    },
    {
        id: "shop15",
        title: "パクチー香るエスニック餃子",
        image: "/img/gyoza.png",
        tag: "エスニック",
        desc: "ナンプラーとレモングラスを効かせたあんに、山盛りのパクチーをトッピング。エスニック好きにはたまらない一皿。",
        allergy: "小麦・豚肉・えび"
    },
    {
        id: "shop16",
        title: "トリュフ香るきのこクリーム餃子",
        image: "/img/gyoza.png",
        tag: "プレミアム",
        desc: "4種類のきのこ（ポルチーニ、マッシュルーム、舞茸、しめじ）をクリームソースで和え、トリュフオイルで仕上げた香り高い餃子。",
        allergy: "小麦・乳・豚肉"
    },
    {
        id: "shop17",
        title: "大葉と梅肉のさっぱり餃子",
        image: "/img/gyoza.png",
        tag: "和風",
        desc: "紀州南高梅の果肉と大葉を包み込みました。肉の脂っぽさを梅の酸味が中和し、さっぱりといただけます。",
        allergy: "小麦・豚肉"
    },
    {
        id: "shop18",
        title: "フォアグラロッシーニ風餃子",
        image: "/img/gyoza.png",
        tag: "超プレミアム",
        desc: "フォアグラと牛フィレ肉を使用した、究極の贅沢餃子。赤ワインソースでお召し上がりください。（※1日限定50食）",
        allergy: "小麦・乳・牛肉"
    },
    {
        id: "shop19",
        title: "【激ヤバ】悪魔の真っ黒イカスミ餃子",
        image: "/img/gyoza.png",
        tag: "ヤバい",
        desc: "見た目のインパクト抜群！濃厚イカスミを練り込んだ真っ黒な皮で、中身もイカとホタテがぎっしり。口の中が真っ黒になる覚悟はできていますか？",
        allergy: "小麦・いか・えび・卵"
    },
    {
        id: "shop20",
        title: "【挑戦者求む】地獄の100辛デスソース餃子",
        image: "/img/gyoza.png",
        tag: "超激辛",
        desc: "世界最強クラスの唐辛子「キャロライナ・リーパー」を使用。完食者には認定証を授与。※お子様・心臓の弱い方はご遠慮ください。",
        allergy: "小麦・豚肉"
    },
    {
        id: "shop21",
        title: "【異次元】虹色レインボーチーズ餃子",
        image: "/img/gyoza.png",
        tag: "映え",
        desc: "7色の天然着色チーズが虹のように溢れ出す！SNS映え間違いなしの、見て楽しい食べて美味しいフォトジェニック餃子。",
        allergy: "小麦・乳・豚肉"
    },
    {
        id: "shop22",
        title: "【衝撃】丸ごとカニ爆弾餃子",
        image: "/img/gyoza.png",
        tag: "豪華",
        desc: "ズワイガニの脚を丸ごと包んだ、贅沢すぎる一品。殻ごとパリパリ食べられる特殊調理で、カニの旨味を余すことなく堪能。",
        allergy: "小麦・かに・卵"
    },
    {
        id: "shop23",
        title: "【禁断】チョコバナナデザート餃子",
        image: "/img/gyoza.png",
        tag: "スイーツ",
        desc: "餃子の概念を覆すデザート餃子！ベルギー産チョコと完熟バナナを包み、揚げたてアツアツに生クリームをトッピング。",
        allergy: "小麦・乳・バナナ"
    },
    {
        id: "shop24",
        title: "【限界突破】1kg巨大ジャンボ餃子",
        image: "/img/gyoza.png",
        tag: "チャレンジ",
        desc: "通常の餃子約20個分！1kgの巨大餃子を15分以内に完食できたら無料。シェアして食べてもOKのパーティー向けメニュー。",
        allergy: "小麦・卵・豚肉・大豆"
    }
];

export default function MenuPage() {
    const [selectedShop, setSelectedShop] = useState<ShopData | null>(null);

    return (
        <>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-black text-brand-red mb-4">MENU</h2>
                        <p className="text-gray-500 font-bold">出店店舗一覧</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHOPS.map((shop, index) => (
                        <ScrollReveal key={shop.id} delay={index * 0.05}>
                            <div
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group h-full flex flex-col transition-transform hover:scale-105 active:scale-95"
                                onClick={() => setSelectedShop(shop)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={shop.image}
                                        alt={shop.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-brand-yellow text-xs font-bold px-2 py-1 rounded shadow-md">
                                        {shop.tag}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">
                                            {shop.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {shop.desc}
                                        </p>
                                    </div>
                                    <div className="mt-4 text-brand-orange font-bold text-right text-sm">
                                        詳細を見る →
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </main>
            <Footer />

            <MenuModal
                shop={selectedShop}
                onClose={() => setSelectedShop(null)}
            />
        </>
    );
}
