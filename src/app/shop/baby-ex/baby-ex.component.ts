import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const babyExs: ShopItem[] = [
  new ShopItem('Blue Stars', 'A two-sided white cotton play matt with blue stars',
    '../../../assets/imgs/babyEx/babyEx-matt-stars.jpg', 28, 1),
  new ShopItem('Exercise Stand', 'A natural wooden hand-made stand',
    '../../../assets/imgs/babyEx/babyEx-pink.jpg', 30, 2),
  new ShopItem('Mountains 2', 'A hand-made wooden stand', 'https://mdbootstrap.com/img/Photos/Others/img (36).jpg', 40, 3),
  new ShopItem('Chill Dude', 'A blue star play matt', 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Reeipublic_Banana.gif', 45, 4)
];

@Component({
  selector: 'app-baby-ex',
  templateUrl: './baby-ex.component.html',
  styleUrls: ['./baby-ex.component.scss']
})
export class BabyExComponent implements OnInit {
  babyExs = [...babyExs];
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
