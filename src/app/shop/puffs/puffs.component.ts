import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/shared/shop-item.model';

@Component({
  selector: 'app-puffs',
  templateUrl: './puffs.component.html',
  styleUrls: ['./puffs.component.scss']
})
export class PuffsComponent implements OnInit {
  puffs: ShopItem[] = [
    new ShopItem('Yellow Zig-zag Puff', 'A yellow and white zig-zag puff',
    'http://laukinukas.lt/image/cache/catalog/pufai/pf-500x500.jpg', 19, 12),
  new ShopItem('Grey Zig-zag Puff', 'A grey zig-zag puff',
    'http://laukinukas.lt/image/cache/catalog/Pufai/CNT_1162-500x500.jpg', 19, 13),
  new ShopItem('Grey Stars Puff', 'A grey-starred puff',
    'http://laukinukas.lt/image/cache/catalog/Pufai/PF1-500x500.jpg', 19, 14)
  ];
  constructor() { }

  ngOnInit() {
  }

}
