import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import * as shopActions from '../store/shop.actions';
import { map, switchMap } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
import { snapshotChanges } from '@angular/fire/database';

export type Action = shopActions.Actions;

@Injectable()
export class ShopEffects {
    constructor(private actions: Actions, private firestore: AngularFirestore) { }

    dbRef = firebase.database().ref();
    cartRef = this.dbRef.child('cart');

    @Effect()
    getShopItems: Observable<any> = this.actions.pipe(
        ofType(shopActions.GET_ITEMS),
        switchMap(() => {
            return from(this.cartRef.once('value', snap => {
                snap.forEach(childSnap => childSnap.val());
            }))
                .pipe(
                    map((data) => {
                        if (data !== null) {
                            const dbItems = Object.values(data.val());
                            const array = [];
                            for (let i = 0; i <= dbItems.length; i++) {
                                array.push(dbItems[i]);
                            }
                            return {
                                type: 'GET_ITEMS_SUCCESS',
                                payload: dbItems
                            };
                        } else {
                            return;
                        }
                    })
                );
        })
    );

    @Effect()
    addShopItem: Observable<any> = this.actions.pipe(
        ofType(shopActions.LOAD_ITEM_TO_CART),
        map((action: shopActions.LoadItemToCart) => action.payload),
        map(payload => {
            this.cartRef.push(payload);
            return {
                type: 'LOAD_ITEM_TO_CART_SUCCESS'
            };
        })
    );

    @Effect()
    removeShopItem: Observable<any> = this.actions.pipe(
        ofType(shopActions.DELETE_ITEM_FROM_CART),
        map((action: shopActions.DeleteItemFromCart) => action.payload),
        map((payload) => {
            const itemId = payload.id;
            const selectedItem = this.cartRef.orderByChild('id').equalTo(itemId);
            selectedItem.once('value', snap => {
                snap.forEach(child => {
                    child.ref.remove();
                });
            });
            return {
                type: 'DELETE_ITEM_FROM_CART_SUCCESS'
            };
        })
    );
}
