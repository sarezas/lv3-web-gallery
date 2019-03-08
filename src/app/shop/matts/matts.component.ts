import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const matts: ShopItem[] = [
  new ShopItem('Blue Star Matt', 'A play matt with blue stars',
    '../../../assets/imgs/matts/matt-blue-stars.jpg', 30, 4)
  // new ShopItem('Colorful Matt', 'A colorful play matt',
  //   'https://pixel.nymag.com/imgs/daily/strategist/2018/06/21/baby-mats/Twist-and-Fold.w710.h473.2x.jpg', 30, 5)
];

@Component({
  selector: 'app-matts',
  templateUrl: './matts.component.html',
  styleUrls: ['./matts.component.scss']
})
export class MattsComponent implements OnInit {
  matts: ShopItem[] = [...matts];
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
