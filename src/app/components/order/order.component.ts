import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../model/IProduct";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Output() onCartChange = new EventEmitter<void>();

  @Input() orders: IProduct[] = [];
  @Output() ordersChange = new EventEmitter<IProduct[]>();

  protected value:number = 0;

  constructor() { }

  ngOnInit(): void {
    for (let p of this.orders) {
      console.log(p);
      this.value+=p.pvalue;
    }
  }

  addOrder(orders: IProduct[]) {
    //this.orders.push(product);
  }

  removeItem(order: IProduct) {
    this.value=0;
    const filteredLibraries = this.orders.filter((item)=> item !== order);
    this.orders = filteredLibraries;
    for (let p of this.orders) {
      console.log(p);
      this.value+=p.pvalue;
    }

    this.ordersChange.emit(this.orders);
  }

  onGoBack() {
    this.onCartChange.emit();
  }

  onConfirm() {

  }
}
