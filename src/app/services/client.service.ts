import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../components/menu/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url: string = "https://bar-back-spring-app-20220815215921.azuremicroservices.io/";
  private local: string ="http://127.0.0.1/";

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.local+"producto");
  }
  /*getMenu(): Observable<any> {
    return this.httpClient.get<any>(this.local+"producto");
  }*/
}
