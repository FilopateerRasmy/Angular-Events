import { Component} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles:[
    `
    .nav.navbar-nav{fonst-size:15px}
    #searchForm {margin-right:100px}
    @media (max-widht: 1200px) {#searchForm{ display:none } }
    li > a.active{color: #f97924;}
    `
  ]
})

export class NavBarComponent {
  constructor() { }

}