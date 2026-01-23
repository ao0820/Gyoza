import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white py-16 border-t-4 border-brand-red">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-black mb-10 tracking-widest text-brand-yellow">GYOZA FES 2026</h2>
                <div className="flex justify-center gap-8 mb-10 text-sm font-bold tracking-wider">
                    <Link href="/" className="hover:text-brand-yellow transition-colors">TOP</Link>
                    <Link href="/menu" className="hover:text-brand-yellow transition-colors">MENU</Link>
                    <Link href="/access" className="hover:text-brand-yellow transition-colors">ACCESS</Link>
                    <Link href="/contact" className="hover:text-brand-yellow transition-colors">CONTACT</Link>
                </div>
                <div className="text-gray-400 text-xs tracking-wider space-y-2">
                    <p>主催：餃子フェス実行委員会</p>
                    <p>&copy; 2026 Gyoza Festival Executive Committee. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
