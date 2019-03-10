import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';
import { NotifierService } from 'angular-notifier';

export const puffs: ShopItem[] = [
  new ShopItem('Yellow Zig-zag', 'A soft yellow and white zig-zag puff',
  '../../../assets/imgs/puffs/puff-double-yellow.jpg', 19, 12),
new ShopItem('Grey Stars', 'A soft grey puff with white stars',
  '../../../assets/imgs/puffs/puff-dark-grey.jpg', 19, 13),
new ShopItem('Grey Zig-zag', 'A grey zig-zag puff with white stripes',
  '../../../assets/imgs/puffs/puff-light-grey.jpg', 19, 14)
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
