import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  images = ['slider3', 'slider2', 'slider1'].map((n) => `../assets/images/slider/${n}.png`);
  constructor() { }

  ngOnInit() {
  }

}
