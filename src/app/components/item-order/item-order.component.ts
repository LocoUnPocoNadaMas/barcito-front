import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../model/IProduct";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.css']
})
export class ItemOrderComponent implements OnInit {

  @Input() item!: IProduct;
  @Output() onRemoveItem: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  protected removeIcon = faMinusCircle;

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(item: IProduct) {
    this.onRemoveItem.emit(item);
  }
}
