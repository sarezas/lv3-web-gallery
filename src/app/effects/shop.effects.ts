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

export type Action = shopActions.Actions;

@Injectable()
export class ShopEffects {
    constructor(private actions: Actions,
                private firestore: AngularFirestore,
                private dbs: DatabaseService,
                private afDb: AngularFireDatabase) {}

    database = firebase.database().ref('/cart');

    @Effect()
    addShopItem: Observable<any> = this.actions.pipe(
        ofType(shopActions.LOAD_ITEM_TO_CART),
        map((action: shopActions.LoadItemToCart) => action.payload),
        map(payload => {
            this.database.push(payload);
            return {
                type: shopActions.LOAD_ITEM_TO_CART_SUCCESS
            };
        })
    );

    @Effect()
    getShopItems: Observable<any> = this.actions.pipe(
        ofType(shopActions.GET_ITEMS),
        switchMap(() => {
            return of(this.database.once('value'))
            .pipe(
                map((payload) => {
                    return {
                        type: 'GET_ITEMS_SUCCESS',
                        payload: payload
                    };
                }
            ));
        })
    );

    // galima ir sita istrinti
    // @Effect()
    // getShopItems: Observable<any> = this.actions.pipe(
    //     ofType(shopActions.GET_ITEMS),
    //     switchMap(() => this.database.once('value')
    //         .then(function(snapshot) {
    //             const dbItems = Object.entries(snapshot.val());
    //             console.log(dbItems);
    //             map(() => new shopActions.GetItemsSuccess(dbItems));
    //         })),
    //         map(() => {
    //             return {
    //                 type: shopActions.GET_ITEMS_SUCCESS
    //             };
    //         }
    //     )
    // );

    // @Effect()
    // getShopItems: Observable<any> = this.actions.pipe(
    //     ofType(shopActions.GET_ITEMS),
    //     switchMap((payload: any[]) => this.database.once('value', function(snapshot) {
            //     const dbItem = keys[i];
    //     })),
    //     map(() => {
    //     })
    // );
}
