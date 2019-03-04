import { Action } from '@ngrx/store';
import { ShopItem } from '../shared/shop-item.model';

export const LOAD_ITEM_TO_CART = 'LOAD_ITEM_TO_CART';
export const LOAD_ITEM_TO_CART_SUCCESS = 'LOAD_ITEM_TO_CART_SUCCESS';
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
export const DELETE_ITEM_FROM_CART_SUCCESS = 'DELETE_ITEM_FROM_CART_SUCCESS';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export class LoadItemToCart implements Action {
    readonly type = LOAD_ITEM_TO_CART;
    constructor(public payload: ShopItem) {}
}

export class LoadItemToCartSuccess implements Action {
    readonly type = LOAD_ITEM_TO_CART_SUCCESS;
}

export class DeleteItemFromCart implements Action {
    readonly type = DELETE_ITEM_FROM_CART;
    constructor(public payload: ShopItem) {}
}

export class DeleteItemFromCartSuccess implements Action {
    readonly type = DELETE_ITEM_FROM_CART_SUCCESS;
}

export class GetItems implements Action {
    readonly type = GET_ITEMS;
}

export class GetItemsSuccess implements Action {
    readonly type = GET_ITEMS_SUCCESS;
    constructor(public payload: ShopItem[]) {}
}

export type Actions =
    LoadItemToCart |
    LoadItemToCartSuccess |
    DeleteItemFromCart |
    DeleteItemFromCartSuccess |
    GetItems |
    GetItemsSuccess;
