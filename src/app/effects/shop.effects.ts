import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import * as shopActions from '../store/shop.actions';
import { DatabaseService } from '../services/database.service';
import { map, switchMap } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

export type Action = shopActions.Actions;

@Injectable()
export class ShopEffects {
    constructor(private actions: Actions,
                private firestore: AngularFirestore,
                private dbs: DatabaseService,
                private afDb: AngularFireDatabase) {}

    database = firebase.database();

    @Effect()
    addShopItem: Observable<any> = this.actions.pipe(
        ofType(shopActions.LOAD_ITEM_TO_CART),
        map((action: shopActions.LoadItemToCart) => action.payload),
        map(payload => {
            this.database.ref('cart').push(payload);
            return {
                type: 'LOAD_ITEM_TO_CART_SUCCESS'
            };
        })
    );

    @Effect()
    removeShopItem: Observable<any> = this.actions.pipe(
        ofType(shopActions.DELETE_ITEM_FROM_CART),
        map((action: shopActions.DeleteItemFromCart) => action.payload),
        map(payload => {
            const shopItemsInDb = this.database.ref('cart');
            shopItemsInDb.once('value', snap => {
                const data = snap.val();
                const dataKeys = Object.entries(data);
                console.log(dataKeys);
                for (let i = 0; i <= dataKeys.length; i++) {
                    const k = dataKeys[i];
                    const kstring = String(k[0]);
                    console.log(kstring);
                    return shopItemsInDb.child(kstring).remove();
                }
            });
            return {
                type: 'DELETE_ITEM_FROM_CART_SUCCESS'
            };
        })
    );

    @Effect()
    getShopItems: Observable<any> = this.actions.pipe(
        ofType(shopActions.GET_ITEMS),
        switchMap(data => {
            return from(this.database.ref('cart').once('value', snap => {
                snap.forEach(childSnap => childSnap.val());
            }))
                .pipe(
                    map((payload) => {
                        const dbItems = Object.values(payload.val());
                        const array = [];
                        for (let i = 0; i <= dbItems.length; i++) {
                            array.push(dbItems[i]);
                        }
                        return {
                            type: 'GET_ITEMS_SUCCESS',
                            payload: dbItems
                        };
                    }
                ));
        })
    );
}
