import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const tents: ShopItem[] = [
  new ShopItem('Creme Tent', 'A spacious, creme-colored fort for kids',
    '../../../assets/imgs/tents/tent-creme.png', 90, 21),
  new ShopItem('Grey Zig-zag Tent', 'A cubic busa tent for every child',
    '../../../assets/imgs/tents/tent-light-grey.png', 90, 22),
  new ShopItem('Dark Grey Tent', 'A tent with side roof windows',
    '../../../assets/imgs/tents/tent-grey.png', 90, 23),
  new ShopItem('Black Tent', 'A spacious tent for kids',
    '../../../assets/imgs/tents/tent-black.png', 90, 24),
  new ShopItem('Black Dorry Tent', 'A grey zig-zag tent',
    '../../../assets/imgs/tents/tent-black-girl.jpg', 90, 25),
  new ShopItem('Stars Grey Tent', 'A cubic busa tent for every kid',
    '../../../assets/imgs/tents/tent-stars-grey.png', 90, 26)
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
