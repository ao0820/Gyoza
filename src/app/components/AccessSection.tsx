
import ScrollReveal from "./ScrollReveal";

export default function AccessSection() {
    return (
        <section className="py-24 bg-washi" id="access">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-brand-red mb-4">ACCESS</h2>
                        <p className="text-gray-500 font-bold tracking-widest">会場・アクセス</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                        <div className="grid md:grid-cols-2">
                            <div className="bg-gray-200 h-64 md:h-auto min-h-[300px] w-full relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.503460867727!2d136.90656637633215!3d35.16895315802315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370d383921b7b%3A0x6b6e4177d4c9797f!2z5LmF5bGL5aSn6YCa5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1705381000000!5m2!1sja!2sjp"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500 absolute inset-0"
                                />
                            </div>
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl font-black text-brand-red mb-6">久屋大通公園 エディオン久屋広場</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold border-l-4 border-brand-yellow pl-3 mb-2 text-sm text-gray-500">電車でお越しの方</h4>
                                        <p className="text-sumi font-medium text-sm leading-relaxed">
                                            地下鉄名城線・桜通線「久屋大通」駅 徒歩3分<br />
                                            地下鉄名城線・東山線「栄」駅 徒歩3分
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold border-l-4 border-brand-yellow pl-3 mb-2 text-sm text-gray-500">住所</h4>
                                        <p className="text-sumi font-medium text-sm">
                                            〒460-0008 愛知県名古屋市中区栄3丁目65
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-dashed border-gray-200">
                                        <p className="text-gray-400 text-xs">
                                            ※ 会場に専用駐車場はございません。公共交通機関をご利用ください。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
