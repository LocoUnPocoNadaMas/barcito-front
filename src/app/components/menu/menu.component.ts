import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {IProduct} from "../../model/IProduct";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getMenu().subscribe( data =>{
      this.products = data
    });
  }

  orders: IProduct[] = [];

  addProduct(product: IProduct) {
    this.orders.push(product);
    for (const p of this.orders) {
      console.log(p);
    }
  }
}
