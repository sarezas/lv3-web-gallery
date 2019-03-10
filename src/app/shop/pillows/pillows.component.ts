import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';
import { NotifierService } from 'angular-notifier';

export const pillows: ShopItem[] = [
  new ShopItem('Star Pillow', 'A cotton grey pillow with white stars',
    '../../../assets/imgs/pillows/pillow-star.jpg', 7, 6),
  new ShopItem('Cloud Pillow', 'A linen blue material for optimum baby comfort',
    '../../../assets/imgs/pillows/pillow-cloud-blue.jpg', 7, 7),
  new ShopItem('Pompom Pillow', 'A cotton pink pillow with a button',
    '../../../assets/imgs/pillows/pillow-pink-pompom.jpg', 8, 8),
  new ShopItem('Middle Button', 'A linen blue material for optimum baby comfort',
    '../../../assets/imgs/pillows/pillow-blue-zigzag.jpg', 10, 9),
  new ShopItem('Button And Pompom', 'A cotton pillow for adults',
    '../../../assets/imgs/pillows/pillow-grey-stars.png', 12, 10),
  new ShopItem('Owal Pillow', 'An owal-shaped pillow with side mane',
    '../../../assets/imgs/pillows/pillow-grey.png', 7, 11)
];

@Component({
  selector: 'app-pillows',
  templateUrl: './pillows.component.html',
  styleUrls: ['./pillows.component.scss']
})
export class PillowsComponent implements OnInit {
  pillows: ShopItem[] = [...pillows];
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
