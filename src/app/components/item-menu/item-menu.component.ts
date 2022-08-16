import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../menu/IProduct";

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  addIcon = faPlusCircle;
  @Input() product: IProduct = {name:"",description:"",pvalue:0};
  @Output() onAddProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(product: IProduct){
    this.onAddProduct.emit(product);
  }

}
