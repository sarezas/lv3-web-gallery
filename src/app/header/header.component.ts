import { Component, OnInit } from '@angular/core';

// declare a const without instantiating it
// declare const window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}
