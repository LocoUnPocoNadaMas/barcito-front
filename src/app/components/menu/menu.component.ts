import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {IProduct} from "../../model/IProduct";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: IProduct[] = [];

  @Output() onCartChange = new EventEmitter<void>();
  @Input() orders: IProduct[] = [];
  @Output() ordersChange = new EventEmitter<IProduct[]>();

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getMenu().subscribe( data =>{
      this.products = data
    });
  }

  addProduct(product: IProduct) {
    this.orders.push(product);
  }

  onOrder() {
    this.onCartChange.emit();
    this.ordersChange.emit(this.orders);
  }
}
