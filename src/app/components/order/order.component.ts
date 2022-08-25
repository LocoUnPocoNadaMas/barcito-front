import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../model/IProduct";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Output() onCartChange = new EventEmitter<boolean>();

  @Input() orders: IProduct[] = [];
  @Output() ordersChange = new EventEmitter<IProduct[]>();

  @Output() onConfirm = new EventEmitter<void>();

  protected price: number = 0;

  constructor() { }

  ngOnInit(): void {
    for (let p of this.orders) {
      console.log(p);
      this.price+=p.pvalue;
    }
  }

  removeItem(order: IProduct) {
    this.price=0;
    const filteredLibraries = this.orders.filter((item)=> item !== order);
    this.orders = filteredLibraries;
    for (let p of this.orders) {
      this.price+=p.pvalue;
    }

    this.ordersChange.emit(this.orders);
  }

  onGoBack() {
    this.onCartChange.emit(false);
  }

  onConfirmOrder() {
    this.onConfirm.emit();
  }
}
