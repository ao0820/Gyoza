"use client";

import { useCart } from "../../context/CartContext";
import { X, Trash2, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { sendOrderToGAS } from "../../lib/gas";

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const [isOrdering, setIsOrdering] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    if (!isOpen) return null;

    const handleOrder = async () => {
        if (cart.length === 0) return;

        setIsOrdering(true);
        try {
            await sendOrderToGAS(cart, totalPrice);
            setOrderComplete(true);
            clearCart();
        } catch (error) {
            alert("注文の送信に失敗しました。もう一度お試しください。");
            console.error(error);
        } finally {
            setIsOrdering(false);
        }
    };

    if (orderComplete) {
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
                <div className="relative bg-white w-full max-w-md rounded-3xl p-8 text-center z-10 shadow-2xl">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-sumi mb-4">注文完了！</h3>
                    <p className="text-gray-500 mb-8">ご注文ありがとうございます。<br />スタッフが席までお持ちします。</p>
                    <button
                        onClick={() => { setOrderComplete(false); onClose(); }}
                        className="bg-brand-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                    >
                        閉じる
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />

            {/* Drawer */}
            <div className="relative bg-white w-full max-w-md h-full shadow-2xl z-10 flex flex-col transform transition-transform duration-300">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                    <h2 className="text-2xl font-black text-sumi">カート</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                            <Trash2 size={48} className="opacity-20" />
                            <p className="font-bold">カートは空です</p>
                            <button onClick={onClose} className="text-brand-red font-bold underline">
                                メニューを見る
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <h3 className="font-bold text-sumi text-sm line-clamp-1">{item.name}</h3>
                                    <p className="text-brand-red font-bold">¥{item.price}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-brand-red"
                                            >
                                                -
                                            </button>
                                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-brand-red"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 bg-white border-t border-gray-100 space-y-4 safe-bottom">
                        <div className="flex justify-between items-center text-xl font-black">
                            <span>合計</span>
                            <span className="text-brand-red">¥{totalPrice.toLocaleString()}</span>
                        </div>
                        <button
                            onClick={handleOrder}
                            disabled={isOrdering}
                            className={`w-full py-4 rounded-xl font-black text-white text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${isOrdering
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-brand-red hover:bg-red-600 hover:shadow-brand-red/40 active:scale-95"
                                }`}
                        >
                            {isOrdering ? (
                                <>
                                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    注文を確定する
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
