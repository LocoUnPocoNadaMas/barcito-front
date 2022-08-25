import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../model/IProduct";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: IProduct[] = [];
  orders: IProduct[] = [];
  cart: boolean = false;


  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getMenu().subscribe(data => {
      this.products = data
    });
  }

  cartChange() {
    this.cart=!this.cart;
  }
}
