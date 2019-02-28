import { ShopItem } from '../shared/shop-item.model';

export class ShopState {
    constructor() {}
    readonly shopItems: ShopItem[];
    readonly itemCount: number;
}
