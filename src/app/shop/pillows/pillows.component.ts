import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import * as shopActions from '../../store/shop.actions';

import { ShopItem } from 'src/app/shared/shop-item.model';

export const pillows: ShopItem[] = [
  new ShopItem('Deco Star Pillow', 'A cotton pillow for adults',
    'http://laukinukas.lt/image/cache/catalog/Pagalv%C4%97l%C4%97s/p5-500x500.jpg', 7, 6),
  new ShopItem('Deco Cloud Pillow', 'A linen blue material for optimum baby comfort',
    'http://laukinukas.lt/image/cache/catalog/Pagalv%C4%97l%C4%97s/p8-500x500.jpg', 7, 7),
  new ShopItem('Deco Pompom Pillow', 'A girly pillow',
    'http://laukinukas.lt/image/cache/catalog/Pagalv%C4%97l%C4%97s/p3-500x500.png', 8, 8),
  new ShopItem('Deco Pillow With Button', 'A linen blue material for optimum baby comfort',
    'http://laukinukas.lt/image/cache/catalog/Pagalv%C4%97l%C4%97s/nuotrauka-12-500x500.jpg', 10, 9),
  new ShopItem('Deco Pillow With Button And Pompom', 'A cotton pillow for adults',
    'http://laukinukas.lt/image/cache/catalog/Pagalv%C4%97l%C4%97s/p6-500x500.jpg', 12, 10),
  new ShopItem('Deco Owal Pillow', 'A girly pillow',
    'http://laukinukas.lt/image/cache/catalog/Pagalv%C4%97l%C4%97s/p2-500x500.png', 7, 11)
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
