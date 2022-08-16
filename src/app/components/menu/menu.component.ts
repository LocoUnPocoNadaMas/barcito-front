import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {IProduct} from "./IProduct";

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
      this.products = data;
      console.log(this.products);
    });
  }

  addProduct(product: IProduct) {

  }
}
