import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as shopActions from '../../store/shop.actions';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import { ShopItem } from 'src/app/shared/shop-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<ShopItem[]>;
  constructor(private store: Store<ShopState>) {}

  ngOnInit() {
    this.cart$ = this.store.select('shop');
    this.store.dispatch(new shopActions.GetItems());
  }

}
