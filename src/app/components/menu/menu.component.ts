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

  orders: IProduct[] = [];

  @Output() onAddOrder: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getMenu().subscribe( data =>{
      this.products = data
    });
  }

  addProduct(order: IProduct) {
    //this.onAddOrder.emit(order);
    //console.info("b"+order);
  }
}
