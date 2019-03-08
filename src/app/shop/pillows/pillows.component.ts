import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const pillows: ShopItem[] = [
  new ShopItem('Deco Star Pillow', 'A cotton pillow for adults',
    '../../../assets/imgs/pillows/pillow-star.jpg', 7, 6),
  new ShopItem('Deco Cloud Pillow', 'A linen blue material for optimum baby comfort',
    '../../../assets/imgs/pillows/pillow-cloud-blue.jpg', 7, 7),
  new ShopItem('Deco Pompom Pillow', 'A girly pillow',
    '../../../assets/imgs/pillows/pillow-pink-pompom.jpg', 8, 8),
  new ShopItem('Deco Pillow With Button', 'A linen blue material for optimum baby comfort',
    '../../../assets/imgs/pillows/pillow-blue-zigzag.jpg', 10, 9),
  new ShopItem('Deco Pillow With Button And Pompom', 'A cotton pillow for adults',
    '../../../assets/imgs/pillows/pillow-grey-stars.png', 12, 10),
  new ShopItem('Deco Owal Pillow', 'A girly pillow',
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
