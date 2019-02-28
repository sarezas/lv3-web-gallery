import { Component, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/shared/shop-item.model';

@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.scss']
})
export class NewItemsComponent implements OnInit {
  newItems: ShopItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
