import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';
import { NotifierService } from 'angular-notifier';

export const babyExs: ShopItem[] = [
  new ShopItem('Blue Stars', 'A two-sided white cotton play matt with blue stars',
    '../../../assets/imgs/babyEx/babyEx-matt-stars.jpg', 28, 1),
  new ShopItem('Exercise Stand', 'A natural wooden hand-made stand',
    '../../../assets/imgs/babyEx/babyEx-pink.jpg', 30, 2),
  new ShopItem('Mount Example', 'A majestic view of some beautiful mountains',
    'https://mdbootstrap.com/img/Photos/Others/img (36).jpg', 40, 3),
  new ShopItem('Chill Dude', 'A truly relaxed banana wearing sunglasses',
    'https://upload.wikimedia.org/wikipedia/commons/e/e2/Reeipublic_Banana.gif', 45, 4)
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
  private readonly notifier: NotifierService;
  constructor(private store: Store<ShopState>, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {}

  addToCart(item: ShopItem) {
    this.store.dispatch(new shopActions.LoadItemToCart(item));
    this.notifier.notify('info',
      'Thanks for putting items into the storage, each week our team will try to synchronize our factory stock with it!');
  }

  showItemDetails(name: string, imageUrl: string) {
    this.selectedName = name;
    this.selectedUrl = imageUrl;
  }
}
