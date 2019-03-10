import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as shopActions from '../../store/shop.actions';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import { ShopItem } from 'src/app/shared/shop-item.model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<ShopItem[]>;
  selectedName: string;
  selectedUrl: string;
  private readonly notifier: NotifierService;
  constructor(private store: Store<ShopState>, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.cart$ = this.store.select('shop');
  }

  removeItemFromDb(item: ShopItem) {
    this.store.dispatch(new shopActions.DeleteItemFromCart(item));
    this.notifier.notify('warning',
      'Item removed!');
  }

  showItemDetails(name: string, imageUrl: string) {
    this.selectedName = name;
    this.selectedUrl = imageUrl;
  }

}
