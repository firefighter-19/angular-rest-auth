import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  IProducts,
  IProductsPaginationOptions,
} from "src/app/core/interfaces/products";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  getAllProducts({
    limit,
    skip,
  }: IProductsPaginationOptions): Observable<IProducts> {
    return this.http.get<IProducts>(
      `${this.httpService.url}products/?limit=${limit}&skip=${skip}`,
      {
        headers: this.httpService.headers,
      }
    );
  }

  getProductsOfACategory() {}
}
