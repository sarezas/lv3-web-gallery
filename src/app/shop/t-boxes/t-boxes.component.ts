import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const tBoxes: ShopItem[] = [
  new ShopItem('Pink Stars', 'A pink stars toy box',
    'http://laukinukas.lt/image/cache/catalog/Zaisl%C5%B3%20krep%C5%A1iai/zk2-500x500.jpg', 20, 27),
  new ShopItem('Blue Stars', 'A blue stars toy box',
    'http://laukinukas.lt/image/cache/catalog/Zaisl%C5%B3%20krep%C5%A1iai/zk1-500x500.jpg', 20, 28),
  new ShopItem('Grey Stars', 'A grey stars toy box',
    'http://laukinukas.lt/image/cache/catalog/Zaisl%C5%B3%20krep%C5%A1iai/zk3-500x500.jpg', 20, 29)
];

@Component({
  selector: 'app-t-boxes',
  templateUrl: './t-boxes.component.html',
  styleUrls: ['./t-boxes.component.scss']
})
export class TBoxesComponent implements OnInit {
  tBoxes: ShopItem[] = [...tBoxes];
  selectedName: string;
  selectedUrl: string;
  constructor(private store: Store<ShopState>) { }

  ngOnInit() {}

  addToCart(item: ShopItem) {
    this.store.dispatch(new shopActions.LoadItemToCart(item));
  }

  showItemDetails(name: string, imageUrl: string) {
    this.selectedName = name;
    this.selectedUrl = imageUrl;
  }
}
