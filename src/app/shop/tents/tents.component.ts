import { Component, OnInit, Output } from '@angular/core';
import { ShopItem } from 'src/app/shared/shop-item.model';

@Component({
  selector: 'app-tents',
  templateUrl: './tents.component.html',
  styleUrls: ['./tents.component.scss']
})
export class TentsComponent implements OnInit {
  @Output() tents: ShopItem[] = [
    new ShopItem('Creme Tent', 'A spacious fort for kids',
      'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w3-500x500.png', 90, 21),
    new ShopItem('Grey Zig-zag Dot Tent', 'A cubic busa tent for every kid',
      'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w1-500x500.png', 90, 22),
    new ShopItem('Dark Grey Tent', 'A girly tent',
      'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w1-500x500.png', 90, 23),
    new ShopItem('Creme Tent', 'A spacious tent for kids',
      'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/w3-500x500.png', 90, 24),
    new ShopItem('Grey Zig-zag Dot Tent', 'A grey zig-zag tent',
      'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/k15-500x500.jpg', 90, 25),
    new ShopItem('Dark Grey Tent', 'A cubic busa tent for every kid',
      'http://laukinukas.lt/image/cache/catalog/Palapin%C4%97s/wigvam/k15-500x500.jpg', 90, 26)
  ];
  constructor() { }

  ngOnInit() {
  }

}
