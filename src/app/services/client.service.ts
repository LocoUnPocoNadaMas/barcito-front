import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {IProduct} from "../model/IProduct";
import {IOrder} from "../model/IOrder";

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl: string = "https://bar-back-spring-app-20220825161906.azuremicroservices.io/";
  //private apiUrl: string ="http://127.0.0.1/";

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl+"producto")
      .pipe(retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  postOrder(order: IOrder): Observable<IOrder> {
    //const url = `${this.apiUrl}/${agregar}`; //obviamente esta mal

    return this.httpClient.post<IOrder>(this.apiUrl+"agregar", order, httpOptions)
    //return this.httpClient.post<IOrder>(this.apiUrl+"agregar", order)
      .pipe(
        //catchError(this.handleError('postOrder', order))
        catchError(this.handleError)
      );
  }
}
