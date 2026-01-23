import { X } from "lucide-react";
import Image from "next/image";
import { Shop } from "../types";

interface MenuModalProps {
    shop: Shop | null;
    onClose: () => void;
}

export default function MenuModal({ shop, onClose }: MenuModalProps) {
    if (!shop) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <div
                className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-10"
            >
                <div className="relative h-64">
                    <Image
                        src={shop.image}
                        alt={shop.name}
                        fill
                        className="object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors text-gray-800"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8">
                    <h3 className="text-3xl font-black text-brand-red mb-4">{shop.name}</h3>

                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-400 mb-2">こだわりポイント</h4>
                        <p className="text-gray-700 leading-relaxed text-lg">{shop.description}</p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-xl border border-brand-orange/20">
                        <h4 className="text-sm font-bold text-brand-orange mb-1">特定原材料（アレルギー表示）</h4>
                        <p className="text-sm text-gray-600 font-medium">{shop.allergy || "なし"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
