import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const babyExs: ShopItem[] = [
  new ShopItem('Mountains', 'A hand-made wooden stand', 'https://mdbootstrap.com/img/Photos/Others/img (36).jpg', 30, 1),
  new ShopItem('Sexy Lady', 'A blue star play matt',
    'https://media.self.com/photos/589cab5b695e95ff576aacec/master/pass/workout-tips.jpg', 35, 2),
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
