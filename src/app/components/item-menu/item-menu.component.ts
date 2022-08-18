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

  @Input() item: IProduct = {name:"",description:"",pvalue:0};
  @Output() onAddProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * emite al padre
   * @param product
   */
  onAdd(product: IProduct) {
    this.onAddProduct.emit(product);
  }

}
