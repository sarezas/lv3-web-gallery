import { Pipe, PipeTransform } from '@angular/core';
import { ShopItem } from '../shared/shop-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(shopItems: ShopItem[], searchTerm: string): any {
    // check if search term is undefined and return all shop items if so
    if (searchTerm === undefined) {
      return shopItems;
    }
    // return shop items according to search term
    return shopItems.filter((shopItem: ShopItem) => {
      return shopItem.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
