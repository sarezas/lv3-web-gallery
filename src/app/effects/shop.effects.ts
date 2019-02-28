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

    database = firebase.database().ref('cart');

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
        switchMap((payload: ShopItem[]) => this.database.once('value', function(snapshot) {
            payload = snapshot.val();
            console.log(payload);
            map(() => new shopActions.GetItemsSuccess(payload));
            console.log(payload);
        })),
    );
}
