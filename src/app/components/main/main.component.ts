import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../model/IProduct";
import {ClientService} from "../../services/client.service";
import {IOrder} from "../../model/IOrder";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  protected products: IProduct[] = [];
  protected orders: IProduct[] = [];
  protected cart: boolean = false;
  //private item: IOrder = {prod_id: 0, client_id: 0};


  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getMenu().subscribe(data => {
      this.products = data
    });
  }

  cartChange(value: boolean) {
    this.cart=value;
  }

  confirmOrder() {
    let order: IOrder = {prod_id: 0, client_id: 0};
    for (const o of this.orders) {
      //console.log(o)
      order.prod_id = o.prodID;
      order.client_id = 1;
      this.clientService.postOrder(order).subscribe();
      const filteredLibraries = this.orders.filter((item) => item !== o);
      this.orders = filteredLibraries;
    }
    this.cart = false;
    window.confirm("Pedido realizado con éxito");
  }
}
