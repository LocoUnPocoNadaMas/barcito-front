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

  protected a: boolean = false;

  ngOnInit(): void {
    this.a=this.comprobacion();
  }

  comprobacion(): boolean{
    this.clientService.getMenu().subscribe( data =>{
      this.products = data;
      return true
    });
    return false;
  }

  addProduct(product: IProduct) {

  }
}
