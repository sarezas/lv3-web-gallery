export class ShopItem {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    id?: number;

    constructor(name: string, description: string, imageUrl: string, price: number, id: number) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = id;
    }
}

export interface ShopItem {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    id?: number;
}
