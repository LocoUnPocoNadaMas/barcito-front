import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../model/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //private apiUrl: string = "https://bar-back-spring-app-20220816233635.azuremicroservices.io/";
  private apiUrl: string ="http://127.0.0.1/";

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl+"producto");
  }

  /*postOrder(product: IProduct): Observable<IProduct> {
    const url = `${this.apiUrl}/${product.pvalue}`; //obviamente esta mal
    return this.httpClient.post<IProduct>(url);
  }*/
}
