import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const puffs: ShopItem[] = [
  new ShopItem('Yellow Zig-zag Puff', 'A yellow and white zig-zag puff',
  'http://laukinukas.lt/image/cache/catalog/pufai/pf-500x500.jpg', 19, 12),
new ShopItem('Grey Zig-zag Puff', 'A grey zig-zag puff',
  'http://laukinukas.lt/image/cache/catalog/Pufai/CNT_1162-500x500.jpg', 19, 13),
new ShopItem('Grey Stars Puff', 'A grey-starred puff',
  'http://laukinukas.lt/image/cache/catalog/Pufai/PF1-500x500.jpg', 19, 14)
];

@Component({
  selector: 'app-puffs',
  templateUrl: './puffs.component.html',
  styleUrls: ['./puffs.component.scss']
})
export class PuffsComponent implements OnInit {
  puffs: ShopItem[] = [...puffs];
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
