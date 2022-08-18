import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../model/IProduct";

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  addIcon = faPlusCircle;

  @Input() product: IProduct = {name:"",description:"",pvalue:0};
  //@Input() product: IProduct = [];
  //@Input() product: IProduct[] = [];
  @Output() onAddProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  private order: IProduct[] = [];
  private count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * emite al padre
   * @param product
   */
  onAdd(p: IProduct){
    this.order.push(p);
    for (var orderElement of this.order) {
      console.log(orderElement);
    }
  }

}
