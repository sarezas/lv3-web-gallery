import * as shopActions from './shop.actions';
import { Action } from '@ngrx/store';
import { ShopState } from '../shared/shop.state';

export type Action = shopActions.Actions;

const initialState: ShopState = {
    shopItems: [],
    itemCount: 0
};

export function ShopReducer(state = initialState, action: shopActions.Actions): ShopState {
    switch (action.type) {
        case shopActions.LOAD_ITEM_TO_CART: {
            return {
                ...state,
                shopItems: [...state.shopItems, action.payload],
                // itemCount: state.itemCount + 1
                itemCount: state.shopItems.length + 1
            };
        }
        case shopActions.DELETE_ITEM_FROM_CART: {
            return {
                ...state,
                // shopItems: state.shopItems.filter(item => item.id !== action.payload)
                shopItems: [...state.shopItems.filter(item => item.id !== action.payload)],
                itemCount: state.shopItems.length - 1
            };
        }
        case shopActions.GET_ITEMS: {
            return {
                ...state,
                shopItems: [...state.shopItems],
                itemCount: state.shopItems.length
            };
        }
        case shopActions.GET_ITEMS_SUCCESS: {
            return {
                ...state,
                shopItems: [action.payload],
                itemCount: state.shopItems.length + 1
            };
        }
        default:
            return state;
    }
}
