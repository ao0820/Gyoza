"use client";

import { useEffect, useState } from "react";
import { CreditCard, Smartphone, CheckCircle } from "lucide-react";

interface PaymentSimulatorProps {
    paymentMethod: string;
    amount: number;
    onComplete: () => void;
}

export default function PaymentSimulator({ paymentMethod, amount, onComplete }: PaymentSimulatorProps) {
    const [stage, setStage] = useState<"processing" | "success">("processing");

    useEffect(() => {
        // 擬似処理：3秒後に成功
        const timer = setTimeout(() => {
            setStage("success");
            // さらに2秒後に完了コールバック
            setTimeout(() => {
                onComplete();
            }, 2000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const getPaymentIcon = () => {
        if (paymentMethod.includes("クレジット") || paymentMethod.includes("カード")) {
            return <CreditCard size={64} className="text-white" />;
        }
        return <Smartphone size={64} className="text-white" />;
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl">
                {stage === "processing" ? (
                    <>
                        <div className="w-24 h-24 bg-gradient-to-br from-brand-red to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            {getPaymentIcon()}
                        </div>
                        <h2 className="text-3xl font-black text-sumi mb-4">
                            決済処理中...
                        </h2>
                        <p className="text-gray-600 mb-6">
                            {paymentMethod}で決済しています
                        </p>
                        <div className="bg-gray-100 rounded-full p-4 mb-6">
                            <p className="text-sm text-gray-500 mb-2">お支払い金額</p>
                            <p className="text-4xl font-black text-brand-red">
                                ¥{amount.toLocaleString()}
                            </p>
                        </div>
                        {/* Loading Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-red to-orange-500 animate-[loading_3s_ease-in-out]"
                                style={{
                                    animation: 'loading 3s ease-in-out forwards'
                                }}
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-4">
                            しばらくお待ちください...
                        </p>
                    </>
                ) : (
                    <>
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={64} className="text-green-500" />
                        </div>
                        <h2 className="text-3xl font-black text-sumi mb-4">
                            決済完了！
                        </h2>
                        <p className="text-gray-600 mb-6">
                            ご購入ありがとうございます
                        </p>
                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                            <p className="text-sm text-gray-600 mb-2">お支払い完了</p>
                            <p className="text-3xl font-black text-green-600">
                                ¥{amount.toLocaleString()}
                            </p>
                        </div>
                        <p className="text-sm text-gray-500 mt-6">
                            まもなく完了ページに移動します...
                        </p>
                    </>
                )}
            </div>

            <style jsx>{`
                @keyframes loading {
                    from {
                        width: 0%;
                    }
                    to {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
