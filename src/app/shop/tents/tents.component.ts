import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const tents: ShopItem[] = [
  new ShopItem('Creme Tent', 'A spacious fort for kids',
    'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w3-500x500.png', 90, 21),
  new ShopItem('Grey Zig-zag Dot Tent', 'A cubic busa tent for every kid',
    'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w1-500x500.png', 90, 22),
  new ShopItem('Dark Grey Tent', 'A girly tent',
    'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w1-500x500.png', 90, 23),
  new ShopItem('Creme Tent', 'A spacious tent for kids',
    'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w3-500x500.png', 90, 24),
  new ShopItem('Grey Zig-zag Dot Tent', 'A grey zig-zag tent',
    'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/k15-500x500.jpg', 90, 25),
  new ShopItem('Dark Grey Tent', 'A cubic busa tent for every kid',
    'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/k15-500x500.jpg', 90, 26)
];

@Component({
  selector: 'app-tents',
  templateUrl: './tents.component.html',
  styleUrls: ['./tents.component.scss']
})
export class TentsComponent implements OnInit {
  tents: ShopItem[] = [...tents];
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
