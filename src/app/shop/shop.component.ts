import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import { Observable } from 'rxjs';
// import * as firebase from 'firebase';
// import * as shopActions from '../store/shop.actions';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { ShopItem } from '../shared/shop-item.model';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  cart$: Observable<number>;
  constructor(private store: Store<ShopState>) {
  }

  ngOnInit() {
    this.cart$ = this.store.select('shop');
  }

}
