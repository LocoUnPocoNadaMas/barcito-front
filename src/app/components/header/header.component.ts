import {Component, OnInit} from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buyIcon = faCartShopping;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(){
    console.info("comprado")
  }
}
