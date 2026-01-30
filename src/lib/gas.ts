import { CartItem } from "../app/types";

export const sendOrderToGAS = async (items: CartItem[], totalPrice: number) => {
    const gasUrl = process.env.NEXT_PUBLIC_GAS_URL;
    if (!gasUrl) {
        throw new Error("GAS URL is not defined");
    }

    try {
        const response = await fetch(gasUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain", // GAS handles text/plain better for CORS sometimes, or application/json
            },
            body: JSON.stringify({
                items: items.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                totalPrice: totalPrice,
            }),
        });

        const result = await response.json();
        if (result.status !== "success") {
            throw new Error(result.message || "Failed to submit order");
        }
        return result;
    } catch (error) {
        console.error("Error submitting order:", error);
        throw error;
    }
};
