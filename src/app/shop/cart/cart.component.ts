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
  selectedName: string;
  selectedUrl: string;
  constructor(private store: Store<ShopState>) {}

  ngOnInit() {
    this.cart$ = this.store.select('shop');
  }

  removeItemFromDb(item: ShopItem) {
    this.store.dispatch(new shopActions.DeleteItemFromCart(item));
  }

  showItemDetails(name: string, imageUrl: string) {
    this.selectedName = name;
    this.selectedUrl = imageUrl;
  }

}
