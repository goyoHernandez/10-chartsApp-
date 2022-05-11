import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string,
  name: string
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
     .ppp {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
     }
    `
  ]
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      name: 'bars',
      route: '/charts/bars'
    },
    {
      name: 'bars-double',
      route: './charts/bars-double'
    },
    {
      name: 'donut',
      route: './charts/donut'
    },
    {
      name: 'donut Http',
      route: './charts/donut-http'
    }
  ];


  constructor() { }

}
