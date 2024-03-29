import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';
import { NotifierService } from 'angular-notifier';

export const tBoxes: ShopItem[] = [
  new ShopItem('Pink Stars', 'A pink stars toy box',
    '../../../assets/imgs/tboxes/tbox-pink.jpg', 20, 27),
  new ShopItem('Blue Stars', 'A blue stars toy box',
    '../../../assets/imgs/tboxes/tbox-blue-stars.jpg', 20, 28),
  new ShopItem('Grey Stars', 'A grey stars toy box',
    '../../../assets/imgs/tboxes/tbox-light-grey.jpg', 20, 29)
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
