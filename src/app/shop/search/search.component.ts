import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as shopActions from '../../store/shop.actions';
import { ShopState } from '../../shared/shop.state';

import { FilterPipe } from '../filter.pipe';
import { ShopItem } from 'src/app/shared/shop-item.model';
import { babyExs } from '../baby-ex/baby-ex.component';
import { matts } from '../matts/matts.component';
import { tents } from '../tents/tents.component';
import { pillows } from '../pillows/pillows.component';
import { puffs } from '../puffs/puffs.component';
import { tBoxes } from '../t-boxes/t-boxes.component';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FilterPipe]
})
export class SearchComponent implements OnInit {
  shopItems: ShopItem[] = [...babyExs, ...matts, ...pillows, ...puffs, ...tBoxes, ...tents];
  selectedName: string;
  selectedUrl: string;
  searchTerm: string;
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
