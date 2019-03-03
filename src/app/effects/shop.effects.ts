import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import * as firebase from 'firebase';
import * as shopActions from '../store/shop.actions';
import { DatabaseService } from '../services/database.service';
import { map, switchMap, mergeMap, catchError, mapTo, tap, switchMapTo, merge } from 'rxjs/operators';
import { ShopItem } from '../shared/shop-item.model';
import { isNgTemplate } from '@angular/compiler';

export type Action = shopActions.Actions;

@Injectable()
export class ShopEffects {
    constructor(private actions: Actions,
                private firestore: AngularFirestore,
                private dbs: DatabaseService,
                private afDb: AngularFireDatabase) {}

    // database = firebase.database().ref('cart/');
    database = firebase.database();

    @Effect()
    addShopItem: Observable<any> = this.actions.pipe(
        ofType(shopActions.LOAD_ITEM_TO_CART),
        map((action: shopActions.LoadItemToCart) => action.payload),
        map(payload => {
            this.database.ref('cart').push(payload);
            return {
                type: 'LOAD_ITEM_TO_CART_SUCCESS'            // jei reiks, atkeisti atgal i shopActions.LOAD_ITEM...
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
                        console.log(array);
                        return {
                            type: 'GET_ITEMS_SUCCESS',
                            payload: dbItems
                        };
                    }
                ));
        })
    );
}
