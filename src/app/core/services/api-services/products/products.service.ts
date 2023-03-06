import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProductsWithCategory } from "src/app/core/dto/category-products.dto";
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

  getProductsOfACategory({
    limit,
    skip,
    categoryName,
  }: IProductsWithCategory): Observable<IProducts> {
    return this.http.get<IProducts>(
      `${this.httpService.url}products/category/${categoryName}?limit=${limit}&skip=${skip}`,
      {
        headers: this.httpService.headers,
      }
    );
  }
}
