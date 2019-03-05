import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/shared/shop-item.model';

export const matts: ShopItem[] = [
  new ShopItem('Blue Star Matt', 'A play matt with blue stars',
    'http://laukinukas.lt/image/cache/catalog/kilim%C4%97liai/kl-500x500.jpg', 30, 4),
  new ShopItem('Colorful Matt', 'A colorful play matt',
    'https://pixel.nymag.com/imgs/daily/strategist/2018/06/21/baby-mats/Twist-and-Fold.w710.h473.2x.jpg', 30, 5)
];

@Component({
  selector: 'app-matts',
  templateUrl: './matts.component.html',
  styleUrls: ['./matts.component.scss']
})
export class MattsComponent implements OnInit {
  matts: ShopItem[] = [...matts];
  constructor() { }

  ngOnInit() {
  }

}
