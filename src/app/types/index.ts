export interface Shop {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    tag: string;
    allergy?: string;
}

export interface CartItem extends Shop {
    quantity: number;
}
