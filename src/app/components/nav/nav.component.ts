import {Component, Input, OnInit} from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {IProduct} from "../../model/IProduct";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  buyIcon= faCartShopping;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
  }
}
