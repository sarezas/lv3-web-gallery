import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/app/shared/shop.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  cart$: Observable<number>;
  constructor(private store: Store<ShopState>) {
  }

  ngOnInit() {
    this.cart$ = this.store.select('shop');
  }

  scrollToView(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 300);
  }
}
